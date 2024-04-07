#!/bin/bash

# Function to apply the patch
apply_patch() {
  git checkout -b patch-branch
  if ! git apply "$1"; then
    echo "Failed to apply the patch. Please check the patch file."
    git checkout main
    git branch -D patch-branch
    exit 1
  fi
  git add public/index.html
  git commit -m "Apply patch: $2"
  git checkout main
  if ! git merge patch-branch; then
    echo "Failed to merge the patch. Please resolve any conflicts manually."
    git merge --abort
    git checkout main
    git branch -D patch-branch
    exit 1
  fi
  git branch -D patch-branch
}
# Check if a patch file is provided
if [ $# -eq 0 ]; then
  echo "Please provide a patch file as an argument."
  exit 1
fi

# Get the patch file and description from the arguments
patch_file="$1"
patch_description="$2"

# Check if the patch file exists
if [ ! -f "$patch_file" ]; then
  echo "Patch file '$patch_file' does not exist."
  exit 1
fi

# Apply the patch
apply_patch "$patch_file" "$patch_description"

# Build and restart the Docker container
if ! docker build -t puzzles .; then
  echo "Failed to build the Docker image. Please check the Dockerfile and build logs."
  exit 1
fi

if ! docker stop puzzles; then
  echo "Failed to stop the 'puzzles' container. It may not be running."
fi

if ! docker rm puzzles; then
  echo "Failed to remove the 'puzzles' container. It may not exist."
fi

if ! docker run -d -p 9999:9999 --name puzzles puzzles; then
  echo "Failed to run the 'puzzles' container. Please check the Docker logs."
  exit 1
fi

echo "Patch applied and deployment completed successfully."

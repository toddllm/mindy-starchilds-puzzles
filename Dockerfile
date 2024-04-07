# Use the latest version of Node.js
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

# Build the Svelte and Three.js app
#RUN npm run build

# Expose the port on which the Express server will run
EXPOSE 9999

# Run the Express server
CMD ["node", "server.js"]

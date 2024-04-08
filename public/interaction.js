import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.130.0/build/three.module.js';

export class Interaction {
  constructor(renderer, scene, camera, puzzlePieces) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    this.puzzlePieces = puzzlePieces;

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    // Get the DOM element from the renderer
    const domElement = this.renderer.domElement;

    // Add event listeners for interaction
    domElement.addEventListener('mousedown', this.onMouseDown.bind(this));
    domElement.addEventListener('mousemove', this.onMouseMove.bind(this));
    domElement.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  onMouseDown(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    const intersects = this.raycaster.intersectObjects(this.puzzlePieces.children);

    if (intersects.length > 0) {
      const piece = intersects[0].object;
      piece.material.color.set(0x00ff00); // Change color on click

      // Store the selected piece
      this.selectedPiece = piece;
    }
  }

  onMouseMove(event) {
    if (this.selectedPiece) {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);

      const intersects = this.raycaster.intersectObject(this.puzzlePieces.earth);

      if (intersects.length > 0) {
        const intersectionPoint = intersects[0].point;

        // Move the selected piece to the intersection point
        this.selectedPiece.position.copy(intersectionPoint);
      }
    }
  }

  onMouseUp(event) {
    if (this.selectedPiece) {
      this.selectedPiece.material.color.set(0xff0000); // Change color back on release
      this.selectedPiece = null;
    }
  }
}

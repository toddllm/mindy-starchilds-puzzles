export class Interaction {
  constructor(domElement, camera, puzzlePieces, earth) {
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.draggedPiece = null;
    this.snapThreshold = 0.5;

    domElement.addEventListener('mousedown', this.onMouseDown.bind(this), false);
    domElement.addEventListener('mousemove', this.onMouseMove.bind(this), false);
    domElement.addEventListener('mouseup', this.onMouseUp.bind(this), false);

    this.camera = camera;
    this.puzzlePieces = puzzlePieces;
    this.earth = earth;
  }

  onMouseDown(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.puzzlePieces.map(piece => piece.mesh));
    if (intersects.length > 0) {
      this.draggedPiece = intersects[0].object;
      // Start dragging the piece
      // ...
    }
  }

  onMouseMove(event) {
    if (this.draggedPiece) {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      const mousePosition = new THREE.Vector3(mouseX, mouseY, 0.5);
      mousePosition.unproject(this.camera);
      this.draggedPiece.position.copy(mousePosition);
    }
  }

  onMouseUp(event) {
    if (this.draggedPiece) {
      // Stop dragging the piece and check if it snaps into place
      this.checkCollision(this.draggedPiece);
      this.draggedPiece = null;
    }
  }

  checkCollision(piece) {
    const piecePosition = piece.position;
    const earthPosition = this.earth.mesh.position;
    const distance = piecePosition.distanceTo(earthPosition);
    if (distance < this.snapThreshold) {
      piece.position.copy(earthPosition);
      // Snap the piece into place
      // ...
    }
  }
}

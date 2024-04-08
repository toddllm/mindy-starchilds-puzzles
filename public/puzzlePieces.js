import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.130.0/build/three.module.js';

export class PuzzlePieces extends THREE.Group {
  constructor(earth) {
    super();

    this.earth = earth;

    // Create puzzle pieces
    const numPieces = 10;
    for (let i = 0; i < numPieces; i++) {
      const piece = this.createPuzzlePiece();
      this.add(piece);
    }
  }

  createPuzzlePiece() {
    const geometry = new THREE.SphereGeometry(0.2, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const piece = new THREE.Mesh(geometry, material);

    // Position the piece randomly
    const radius = 2;
    const angle = Math.random() * Math.PI * 2;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    piece.position.set(x, y, 0);

    return piece;
  }

  onMouseDown(event, interaction) {
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, interaction.camera);

    const intersects = raycaster.intersectObjects(this.children);

    if (intersects.length > 0) {
      const piece = intersects[0].object;
      piece.material.color.set(0x00ff00); // Change color on click

      // Move the piece to the earth's surface
      const direction = this.earth.position.clone().sub(piece.position).normalize();
      piece.position.add(direction.multiplyScalar(0.1));
    }
  }
}

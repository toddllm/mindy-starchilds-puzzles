export class PuzzlePiece {
  constructor(position, rotation, material) {
    this.geometry = new THREE.SphereGeometry(0.5, 32, 32);
    this.material = material.clone();
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.copy(position);
    this.mesh.rotation.copy(rotation);

    // Modify vertices and faces based on the puzzle piece shape
    const vertices = this.geometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
      const vertex = new THREE.Vector3(vertices[i], vertices[i + 1], vertices[i + 2]);
      vertex.multiplyScalar(1.01);
      vertices[i] = vertex.x;
      vertices[i + 1] = vertex.y;
      vertices[i + 2] = vertex.z;
    }
  }
}

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.130.0/build/three.module.js';

export class Scene extends THREE.Scene {
  constructor() {
    super();
  }

  // Add any additional methods or properties specific to your Scene class
  createEarth() {
    // Create and return the Earth object
    // Example code:
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const earth = new THREE.Mesh(geometry, material);
    return earth;
  }
}

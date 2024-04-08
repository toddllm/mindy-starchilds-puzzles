import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.130.0/build/three.module.js';
import { EarthMaterial } from '/game/earthMaterial.js';
import { EarthTexture } from '/game/earthTexture.js';

export class Earth extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new EarthMaterial();

    // Use the custom EarthTexture
    const texture = new EarthTexture();
    material.map = texture;

    super(geometry, material);

    // Set the initial rotation to mimic Earth's axis tilt
    this.rotation.x = Math.PI * 0.4; // Tilt the Earth by approximately 23 degrees
    this.rotation.y = 0;
    this.rotation.z = 0;

    this.scale.set(1.5, 1.5, 1.5);

    // Add an atmosphere
    const atmosphereGeometry = new THREE.SphereGeometry(1.1, 32, 32);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x0000ff,
      transparent: true,
      opacity: 0.2,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    this.add(atmosphere);
  }
}

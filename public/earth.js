import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.130.0/build/three.module.js';
import { EarthMaterial } from '/game/earthMaterial.js';

export class Earth extends THREE.Mesh {
  constructor() {
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new EarthMaterial();
    super(geometry, material);

    // Add any additional setup or child objects here
    // For example:
    // const childObject = new THREE.Mesh(...);
    // this.add(childObject);
  }
}

import { EarthMaterial } from './earthMaterial.js';

export class Earth {
  constructor(scene) {
    this.geometry = new THREE.SphereGeometry(5, 64, 64);
    this.material = new EarthMaterial();
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    scene.add(this.mesh);
  }
}

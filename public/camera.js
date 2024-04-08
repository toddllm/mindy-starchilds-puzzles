import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.130.0/build/three.module.js';
//
export class Camera extends THREE.PerspectiveCamera {
  constructor(fov, aspect, near, far) {
    super(fov, aspect, near, far);
    this.position.z = 10;
  }
}

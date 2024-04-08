import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.130.0/build/three.module.js';
export class Renderer extends THREE.WebGLRenderer {
  constructor(width, height) {
    super();
    this.setSize(width, height);
    document.body.appendChild(this.domElement);
  }
}

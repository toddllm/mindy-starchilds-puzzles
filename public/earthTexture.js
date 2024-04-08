import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.130.0/build/three.module.js';

export class EarthTexture extends THREE.Texture {
  constructor() {
    const width = 512;
    const height = 256;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');

    // Generate procedural texture
    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        const r = Math.random() * 0.6 + 0.4; // Random value between 0.4 and 1.0
        const g = Math.random() * 0.6 + 0.4;
        const b = Math.random() * 0.6 + 0.4;
        context.fillStyle = `rgb(${r * 255}, ${g * 255}, ${b * 255})`;
        context.fillRect(i, j, 1, 1);
      }
    }

    super(canvas);
    this.needsUpdate = true;
  }
}

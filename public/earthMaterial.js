import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.130.0/build/three.module.js';

export class EarthMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
          vec3 oceanColor = vec3(0.0, 0.4, 0.6);
          vec3 landColor = vec3(0.2, 0.8, 0.2);
          vec3 finalColor = mix(oceanColor, landColor, smoothstep(-0.2, 0.2, vNormal.y));
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `
    });
  }
}

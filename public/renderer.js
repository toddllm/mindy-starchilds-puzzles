export class Renderer extends THREE.WebGLRenderer {
  constructor(width, height) {
    super();
    this.setSize(width, height);
    document.body.appendChild(this.domElement);
  }
}

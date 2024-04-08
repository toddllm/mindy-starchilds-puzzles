import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.130.0/build/three.module.js';

export class Interaction {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;

    // Get the DOM element from the renderer
    const domElement = this.renderer.domElement;

    // Add event listeners for interaction
    domElement.addEventListener('mousedown', this.onMouseDown.bind(this));
    domElement.addEventListener('mousemove', this.onMouseMove.bind(this));
    domElement.addEventListener('mouseup', this.onMouseUp.bind(this));
  }

  onMouseDown(event) {
    // Handle mouse down event
    console.log('Mouse down event:', event);
  }

  onMouseMove(event) {
    // Handle mouse move event
    console.log('Mouse move event:', event);
  }

  onMouseUp(event) {
    // Handle mouse up event
    console.log('Mouse up event:', event);
  }
}

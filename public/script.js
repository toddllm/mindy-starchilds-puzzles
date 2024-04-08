import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.130.0/build/three.module.js';
import { Scene } from '/game/scene.js';
import { Earth } from '/game/earth.js';
import { EarthMaterial } from '/game/earthMaterial.js';
import { Camera } from '/game/camera.js';
import { Renderer } from '/game/renderer.js';
import { Interaction } from '/game/interaction.js';
import { PuzzlePiece } from '/game/puzzlePiece.js';

// Set up the scene, camera, and renderer
const scene = new Scene();
const camera = new Camera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create an instance of the Earth
const earth = new Earth();
scene.add(earth);

// Position the camera
camera.position.z = 5;

// Set up interaction
const interaction = new Interaction(renderer, scene, camera);

// Render loop
function animate() {
  requestAnimationFrame(animate);
  earth.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Resize the renderer when the window is resized
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

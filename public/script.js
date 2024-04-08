import { Scene } from './scene.js';
import { Renderer } from './renderer.js';
import { Camera } from './camera.js';
import { Earth } from './earth.js';
import { PuzzlePiece } from './puzzlePiece.js';
import { Interaction } from './interaction.js';

// Set up the scene, camera, and renderer
const scene = new Scene();
const camera = new Camera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new Renderer(window.innerWidth, window.innerHeight);

// Create the Earth
const earth = new Earth(scene);

// Generate puzzle pieces
const numPieces = 20;
const puzzlePieces = [];
for (let i = 0; i < numPieces; i++) {
  const position = new THREE.Vector3(
    Math.random() * 10 - 5,
    Math.random() * 10 - 5,
    Math.random() * 10 - 5
  );
  const rotation = new THREE.Euler(
    Math.random() * Math.PI,
    Math.random() * Math.PI,
    Math.random() * Math.PI
  );
  const piece = new PuzzlePiece(position, rotation, earth.material);
  puzzlePieces.push(piece);
  scene.add(piece.mesh);
}

// Set up user interaction
const interaction = new Interaction(renderer.domElement, camera, puzzlePieces, earth);

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

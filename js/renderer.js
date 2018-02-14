//	Renderer Setup
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//	Scene Setup
var scene = new THREE.Scene();

//	Camera Setup
var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 40);
camera.position.set(0,0,2);
scene.add(camera);

//	Control Setup
var control = new THREE.OrbitControls(camera, renderer.domElement);
control.minDistance = 1.6;
control.maxDistance = 4;

window.onresize = function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderLoop();
}
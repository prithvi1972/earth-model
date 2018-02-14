//	Texture Setup
const speed_earth_y = 0.0009;
const speed_cloud_y = 0.0012;
var loader = new THREE.TextureLoader()
var mainMapImage = loader.load('img/earth/main.jpg');
var bumpMapImage = loader.load('img/earth/bump.jpg');
var specularMapImage = loader.load('img/earth/specular.jpg');
var cloudMapImage = loader.load('img/earth/clouds.jpg');

//	Earth Mesh Setup
var earth_geometry = new THREE.SphereGeometry(0.5,50,50);
var earth_material = new THREE.MeshPhongMaterial({
	map:mainMapImage,
	bumpMap:bumpMapImage,
	bumpScale:0.025,
	side: THREE.FrontSide
});
var earth_mesh = new THREE.Mesh(earth_geometry, earth_material);
earth_mesh.name = 'em';
scene.add(earth_mesh);

//	Cloud Mesh Setup
var cloud_geometry = new THREE.SphereGeometry(0.505,50,50);
var cloud_material = new THREE.MeshPhongMaterial({
	map:cloudMapImage,
	opacity:0.2,
	transparent:true,
	side:THREE.FrontSide
});
var cloud_mesh = new THREE.Mesh(cloud_geometry, cloud_material);
cloud_mesh.name = 'cm';
scene.add(cloud_mesh);

//	Earth Animation Setup
//	Cloud Animation Setup
function update() {
	earth_mesh.rotation.y += speed_earth_y;
	cloud_mesh.rotation.y += speed_cloud_y;
}

//	Rendering Scene
function renderLoop() {
	update();
	requestAnimationFrame(renderLoop);
	renderer.render(scene, camera);
}

renderLoop();
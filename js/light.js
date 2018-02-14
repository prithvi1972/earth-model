//	Light Setup
var pointLight = new THREE.PointLight(0xffffff, 2, 100);
pointLight.position.set(-10,0,20);
pointLight.name = 'pl';

var ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.name = 'al';

var directionalLight = new THREE.DirectionalLight(0xffffff,1);
directionalLight.position.set(0,0,50);
directionalLight.name = 'dl';

function togglePointLight() {
	if(!scene.getObjectByName('pl'))	{scene.add(pointLight);}
	else {scene.remove(pointLight);}
}

function toggleAmbientLight() {
	if(!scene.getObjectByName('al'))	{scene.add(ambientLight);}
	else {scene.remove(ambientLight);}
}

function toggleDirectionalLight() {
	if(!scene.getObjectByName('dl'))	{scene.add(directionalLight);}
	else {scene.remove(directionalLight);}
}

toggleDirectionalLight();
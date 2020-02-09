var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, 300 / 225, 0.1, 775);

var spheresArray = [];

var renderer = new THREE.WebGLRenderer();
renderer.setSize(500, 400);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.SphereBufferGeometry(3, 32, 50, 0, Math.PI * 3, 0, Math.PI * 1.5);
var material = new THREE.MeshBasicMaterial({ color: 0x999999, wireframe: true, transparent: true, opacity: 0.45 } );
var sphere = new THREE.Mesh(geometry, material);

camera.position.z = 30;
camera.position.y = 5;
camera.position.x = 10;

var group = new THREE.Group();

var createGroup = function() {
    spheresArray.forEach(sphere => group.add(sphere));
};

var numberOfSpheres = function() {
    numOfSpheres = document.getElementById("numspheres").value;
    for(var i = 0; i < numOfSpheres; i++){
        scene.add(sphere);
    }
};

var updateXcameraPosition = function() {
    camera.position.x = document.getElementById("xaxis").value;
};

var updateYcameraPosition = function() {
    camera.position.y = document.getElementById("yaxis").value;
};

var updateZcameraPosition = function() {
    camera.position.z = document.getElementById("zaxis").value;
};

var changeColor = function() {
    sphere.material.color = new THREE.Color(0xffffff * Math.random());
    sphere.material.needsUpdate = true;
};

var render = function () {
    requestAnimationFrame(render);

    sphere.rotation.y += 0.05;
    sphere.rotation.z += 0.01;
    sphere.rotation.x += 0.05;

    renderer.render(scene, camera);
};

scene.add(sphere);
render();
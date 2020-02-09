var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(50, 500 / 400, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(500, 400);
document.body.appendChild(renderer.domElement);

var light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
scene.add( light );

var geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
var material = new THREE.MeshBasicMaterial({ color: 0x999999, wireframe: true, transparent: true, opacity: 0.45 } );
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 10;

myFunction = function() {
    cube.material.color = new THREE.Color(0xffffff * Math.random());
    cube.material.needsUpdate = true;
    };

var render = function () {
    requestAnimationFrame(render);

    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

render();
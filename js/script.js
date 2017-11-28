var container = document.getElementById("container");

var renderer = new THREE.CanvasRenderer();
renderer.setSize(window.innerWidth , window.innerHeight );
container.appendChild(renderer.domElement);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,10000);
scene.add(camera);

new THREE.Sprite(new THREE.SpriteMaterial{
		opacity = 1,
		program: function(context){
			context.beginPath();
			context.arc(0,0,1,0,Math.PI * 2,true);
			context.closePath();
			context.fill();
		}
});
Sprite.position.x = 0;
Sprite.position.y = 0;
Sprite.position.z = 0;
scene.add(Sprite);
camera.position.z = 100;
camera.lookAt(Sprite);


renderer.render( scene, camera);


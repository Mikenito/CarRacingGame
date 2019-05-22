//THREE global variables
var camera, scene, renderer, loader,keyboard;
var angle=0;
var speed=0;//DECELERATION;
var acc=0;//ACCELERATION;
var time = 0;

var goal = new THREE.Object3D;//declared dummy object.
var car =new THREE.Object3D;//declared the car.


//used a dummy object so the camera can tail the car.
//they are part of the dummy object n camera.
var newPosition = new THREE.Vector3();
var matrix = new THREE.Matrix4();
var temp = new THREE.Vector3;


//collision();
init();
animate();

//creating the scene
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(110, window.innerWidth / window.innerHeight, 0.1, 1000000);
    camera.position.set(0,2,500);
    camera.lookAt(scene.position);

    //
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    document.body.appendChild(renderer.domElement);

    //Directional Light
  const color = 0xffffff;
  const intensity = 0.5;
  var sun = new THREE.DirectionalLight(color, intensity);
  sun.position.set(0, 50, 30);
  sun.castShadow = true;
  //shadow properties
  sun.shadow.mapSize.width = 256;
  sun.shadow.mapSize.height = 256;
  sun.shadow.camera.near = 0.5;
  sun.shadow.camera.far = 50;
  scene.add(sun);

  //Ambient light
  ambientLight = new THREE.AmbientLight(0xff6666, 0.2);
  scene.add(ambientLight);

  //Point light
  pointLight = new THREE.PointLight(0xffffff, 1, 58);
  pointLight.position.set(-30,50,-30);
  pointLight.castShadow = true;
  pointLight.shadow.camera.near = 0.5;
  pointLight.shadow.camera.far = 50;
  scene.add(pointLight)

   keyboard = new THREEx.KeyboardState();
   //controls = new THREE.OrbitControls(camera, renderer.domElement);

    //Sky Box Code
 var skyBox = function () {
        skyBoxGeometry = new THREE.CubeGeometry(100000, 100000, 100000);
        Material =
            [
                new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("ame_starfield/starfield_ft.jpg"),
                    side: THREE.BackSide
                }),
                new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("ame_starfield/starfield_bk.jpg"),
                    side: THREE.BackSide
                }),
                new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("ame_starfield/starfield_up.jpg"),
                    side: THREE.BackSide
                }),
                new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("ame_starfield/starfield_dn.jpg"),
                    side: THREE.BackSide
                }),
                new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("ame_starfield/starfield_rt.jpg"),
                    side: THREE.BackSide
                }),
                new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("ame_starfield/starfield_lf.jpg"),
                    side: THREE.BackSide
                })

            ];
        skyBoxMaterial = new THREE.MeshFaceMaterial(Material);
        completeSkyBox = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);
        completeSkyBox.receiveShadow = false;
        completeSkyBox.castShadow = true;
        return completeSkyBox;

}

//initialized my dummy object.
goal.position.set(0, 2, -2);
           /// goal.rotation.y = Math.PI/2;
goal.scale.set(0,0,0);
//goal.transparent = true;

    scene.add(skyBox());

}

//this updates everything during play.
function animate() {

  // these are updated, to mke sure the camera can emitate what the car & dummy variables are doing & ensures that the camera if is always late.
   temp.setFromMatrixPosition(goal.matrixWorld);

   camera.position.lerp(temp, 0.5);
    camera.lookAt( car.position );

    requestAnimationFrame( animate );
    renderer.render( scene, camera);


if(keyboard.pressed("r")){
Race();

}

function myFunction() {
  setTimeout(function(){ window.location.href = "GameOver.html"; }, 20000);
}
//the controls tilt the car right, n correct displacement
// turns car left n right

if (keyboard.pressed("a")){
//camera = new THREE.PerspectiveCamera(130, window.innerWidth / window.innerHeight, 0.1, 1000000);
camera.position.lerp(new THREE.Vector3(1,100,1), -0.02);
//camera.lookAt( new THREE.Vector3(0,1,0) );

}
//Above Perspective
if (keyboard.pressed("w")){
  camera.position.lerp(new THREE.Vector3(100,-100005,100), -0.002);
}
//behind Perspective
if (keyboard.pressed("s")){
  camera.position.lerp(new THREE.Vector3(-1000,10000,-1000), -0.009);
}
//1st person Perspective
if ( keyboard.pressed("d")){
  camera.position.lerp(new THREE.Vector3(-1000,100500,-1000), -0.0001);
}


if(keyboard.pressed("left")) {     car.rotation.y += 0.1;  angle+=0.1;   }
 if(keyboard.pressed("right")) {   car.rotation.y -= 0.1;  angle-=0.1;

    }
//displacement.
if(keyboard.pressed("down")) {  acc =acc-acc;    car.position.z -=Math.sin(-angle)*speed;     car.position.x -= Math.cos(-angle)*speed;

 speed+=0.1;}
if(keyboard.pressed("up")) {
speed.update; car.position.z += Math.sin(-angle)*acc;     car.position.x += Math.cos(-angle)*acc;

 acc=acc+0.2;
 myFunction();
 }


};


function Race(){

car.position.set(300,0,4500);
//car.rotateY(Math.PI/3);
var maxTime=360;
var score = 0;

score = maxTime - timeleft;
var timeleft = 360;
var downloadTimer = setInterval(function(){
  document.getElementById("CarGameLevel4(willBeLevel2)").innerHTML = timeleft + " seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("CarGameLevel4(willBeLevel2)").innerHTML = "you lost"
  }
}, 1000);



}

//this function will be called when the race start, if the car collides with the cube your score decreases. level 3.
function collision(){
for(var j = 0;j<boxArray.length;j++){
var firstObject = car;

var secondObject = boxArray[j];
var thirdObject = boxArray2[j];

firstBB = new THREE.Box3().setFromObject(firstObject);

secondBB = new THREE.Box3().setFromObject(secondObject);
thirdBB = new THREE.Box3().setFromObject(thirdObject);
//var collision = firstBB.isIntersectionBox(secondBB);
firstBB.castShadow = true;
secondBB.castShadow = true;
thirdBB.castShadow = true;

if(firstBB.isIntersectionBox(secondBB)){

scene.remove(boxArray[j]);

}
if(firstBB.isIntersectionBox(thirdBB)){

scene.remove(boxArray2[j]);

}

}


}

//THIS WORLD FUNCTION WILL BE RESPONSIBLE FOR ALL THE OBJECT IN THE SCENE FROM THE GROUND TO THE ACTUALL OBJECTS
var boxArray = []; //i used an array to store all the blocks that will be created, the array will be used in collision detection.
var boxArray2 = [];
{
const objLoader = new THREE.OBJLoader2();
objLoader.loadMtl('reroadsforscene/road9new.mtl', null, (materials) => {
      // var mesh = new Physijs.createMaterial(materials);
    objLoader.setMaterials(materials);
    objLoader.load('reroadsforscene/road9new.obj', (event) => {

     const root = event.detail.loaderRootNode;
        root.rotation.y = -Math.PI/2;
        root.scale.set(2000,200,2000);
      root.receiveShadow = true;
      //root.castShadow = true;
       gr=root;
scene.add(gr);

for(var h=0;h<gr.children.length;h++){
console.log(gr.children[h]);

}
});
});


function block(){
// this function creates the cubes that i will use as road obstacles.
        box = new THREE.CubeGeometry(500, 200, 200);
  Material =
            [
                new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("images/barrier2.jpg"),
                    side: THREE.DoubleSide
                }),
                new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("images/barrier2.jpg"),
                    side: THREE.DoubleSide
                }),
                new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("images/barrier2.jpg"),
                    side: THREE.DoubleSide
                }),
                new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("images/barrier2.jpg"),
                    side: THREE.DoubleSide
                }),
                new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("images/barrier2.jpg"),
                     side: THREE.DoubleSide
                }),
                new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("images/barrier2.jpg"),
                     side: THREE.DoubleSide
                })

            ];
 cube = new THREE.MeshFaceMaterial(Material);
        com = new THREE.Mesh(box, cube);
        com.receiveShadow = true;
        com.castShadow = true;
   return com;
}

 function roadBlocks(){
var x =0;
var y =0; //translation variables.
var t=0;


for(var i  = 0;i<19;i++){//these for loops are used to translate the cubes to the correct places.
boxArray[i] = block();
boxArray2[i]=block();
if(i<3){
scene.add(boxArray[i].translateZ(-t));
boxArray2[i].translateX(500);
scene.add(boxArray2[i].translateZ(-t+1500));
t = t+3000;
}

if(i>3&&i<7){
boxArray[i].translateX(5700)
scene.add(boxArray[i].translateZ(-x));
boxArray2[i].translateX(6400);
scene.add(boxArray2[i].translateZ(-x+1500));
x = x+3000;
}

if(i>7&&i<11){
boxArray[i].translateX(7700)
scene.add(boxArray[i].translateZ(t));
boxArray2[i].translateX(8400);
scene.add(boxArray2[i].translateZ(t+1500));
t = t+3000;
}

if(i>11&&i<19){
boxArray[i].translateX(13650)
scene.add(boxArray[i].translateZ(-y));
boxArray2[i].translateX(14350);
scene.add(boxArray2[i].translateZ(-y+1500));
y = y-3000;
}
}
var randomB = block();
randomB.translateZ(4000);
scene.add(randomB);
console.log(randomB.position);

}
    Finish = new THREE.PlaneGeometry(500, 200);
  Material = new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("images/barrier2.jpg"),
                    side: THREE.DoubleSide
                });
var line = new THREE.Mesh(Finish,Material);
//line.rotateX(-Math.PI/2);
line.translateZ(-15000);

scene.add(line);
roadBlocks();
}

//THIS WORLD FUNCTION WILL BE RESPONSIBLE FOR ALL THE OBJECT IN THE SCENE FROM THE GROUND TO THE ACTUALL OBJECTS
var coinArray=[];
var coinArray2=[];
var coin;
{

const objLoader = new THREE.OBJLoader2();
objLoader.loadMtl('reroadsforscene/road7new.mtl', null, (materials) => {
      // var mesh = new Physijs.createMaterial(materials);
    objLoader.setMaterials(materials);
    objLoader.load('reroadsforscene/road7new.obj', (event) => {

     const root = event.detail.loaderRootNode;
        root.rotation.y = -Math.PI/2;
        root.scale.set(2000,200,2000);
      root.receiveShadow = false;
       gr=root;


scene.add(gr);

for(var h=0;h<gr.children.length;h++){
console.log(gr.children[h]);

}
});
});


//this generates the coins
function coinGenerator(){
  var ringGeometry = new THREE.TorusGeometry(
      2.5, 0.25, 8, 64
  );
  var cylinderGeometry  = new THREE.CylinderGeometry(
      2.5, 2.5, 0.45, 16
  );
  cylinderGeometry.rotateX(Math.PI / 2);
  var combinedGeometry = new THREE.Geometry();
  combinedGeometry.merge(ringGeometry);
  combinedGeometry.merge(cylinderGeometry);
  var objectMaterial = new THREE.MeshNormalMaterial({
      color: 0xd4af37,   //GOLD = #FFD700, OR #DAA520.
      roughness: 0.5,
      metalness: 1.0
  });
  var coin = new THREE.Mesh(combinedGeometry,objectMaterial);
coin.scale.set(20,20,20);
coin.position.set(0,100,0);
coin.rotateY(-Math.PI/2);

  return coin;
}

var t = 0;
var x = 1500;
var z=9000;
var s = 2000;

var x1 = -2000;
var s1 = -2000;
var t1 = 0;
var z1 = 9000;
var s2 =-5500;
var x2 =-6500;
for(var i=0; i<30; i++){

coinArray[i] = coinGenerator();
coinArray2[i]= coinGenerator();
}
for(var j=0;j<coinArray.length;j++){

if(j<=6){
coinArray[j].translateX(x);
coinArray2[j].translateX(s);
scene.add(coinArray[j].translateZ(t));
scene.add(coinArray2[j].translateZ(z));
t+=1500;
x+=83;
s-=83;
z+=1500;
}

if(j>6&&j<=12){

coinArray[j].translateX(x1);
coinArray2[j].translateX(s1);
scene.add(coinArray[j].translateZ(t1));
scene.add(coinArray2[j].translateZ(z1));
t1+=1500;
x1+=83;
s1-=83;
z1+=1500;


}

if(j>12&&j<=18){

coinArray[j].translateX(x2);
coinArray2[j].translateX(s2);
scene.add(coinArray[j].translateZ(-t1));
scene.add(coinArray2[j].translateZ(-z1));
t1+=1500;
x2+=150;
s2-=83;
z1+=1500;


}
}

}

//var car,goal;
var object = new THREE.Object3D;
const objLoader = new THREE.OBJLoader2();
objLoader.loadMtl('o/Honda NSX TAKATA DOME.mtl', null, (materials) => {
  //var mesh = new Physijs.createMaterial(materials);
  objLoader.setMaterials(materials);
  objLoader.load('o/Honda NSX TAKATA DOME.obj', (event) => {
    // var root = new Physijs.HeightfieldMesh(
    //event,
    //new THREE.MeshFaceMaterial(materials ),0
    //);
    const root = event.detail.loaderRootNode;
    root.rotation.y = Math.PI/2;
    root.scale.set(100,150,100);
    root.receiveShadow = true;
    root.castShadow = true;
    // root.position.x = 20;
    car=root;
    //     car.position=gr.postion;
    // var newCar = new Physijs.Mesh(object,car,6);

    //attached a dummy object to move with the car, as so the camera can follow.
    car.add( goal );
    //adds car to the scene.
    scene.add(car);
  });
});


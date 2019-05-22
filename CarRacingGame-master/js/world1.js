//THIS WORLD FUNCTION WILL BE RESPONSIBLE FOR ALL THE OBJECT IN THE SCENE FROM THE GROUND TO THE ACTUALL OBJECTS

{
const objLoader = new THREE.OBJLoader2();
objLoader.loadMtl('reroadsforscene/road6new.mtl', null, (materials) => {
  // var mesh = new Physijs.createMaterial(materials);
  objLoader.setMaterials(materials);
  objLoader.load('reroadsforscene/road6new.obj', (event) => {

    const root = event.detail.loaderRootNode;
    root.rotation.y = -Math.PI/2;
    root.scale.set(2000,200,2000);
    root.receiveShadow = false;
    //root.castShadow = true;
    gr=root;
  scene.add(gr);

  });
});
}


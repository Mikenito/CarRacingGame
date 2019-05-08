//loading the object using OBJLoader
// loader = new THREE.OBJLoader();
// loader.load(
//     '1967-shelby-ford-mustang-obj/1967-shelby-ford-mustang.obj',
//     function (object) {
//         object.rotation.y = Math.PI / 2;
//         object.scale.set(10, 10, 10);
//         object.castShadow = true;
//         object.receiveShadow = false;
//         scene.add(object);
//     });

//loading the object with material using OBJLoader2
{
    const objLoader = new THREE.OBJLoader2();
    objLoader.loadMtl('1967-shelby-ford-mustang-obj/1967-shelby-ford-mustang.mtl', null, (materials) => {
        objLoader.setMaterials(materials);
        objLoader.load('1967-shelby-ford-mustang-obj/1967-shelby-ford-mustang.obj', (event) => {
            const root = event.detail.loaderRootNode;
            root.rotation.y = Math.PI/2;
            root.scale.set(10,10,10);
            scene.add(root);
            root.receiveShadow = false;
            root.castShadow = true;
        });
    });
}

// loading the object without the material
// {
//     const Loader = new THREE.OBJLoader2();
//     Loader.load('1967-shelby-ford-mustang-obj/1967-shelby-ford-mustang.obj', (event) => {
//         const root = event.detail.loaderRootNode;
//         scene.add(root);
//     });
// }

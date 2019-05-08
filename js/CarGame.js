//THREE global variables
var camera, scene, renderer, loader;

init();
animate();

//creating the scene
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100000);
    camera.position.set(0,0,10);
    //camera.lookAt(scene.position);

    //
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    const color = 0xffffff;
    const intensity = 1;
    var sun = new THREE.DirectionalLight(color, intensity);
    sun.position.set(0, 5, 3);
    sun.castShadow = true;
    scene.add(sun);
    //shadow properties
    sun.shadow.mapSize.width = 256;
    sun.shadow.mapSize.height = 256;
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 50;

    //Sky Box Code
    var skyBox = function () {
        skyBoxGeometry = new THREE.CubeGeometry(2000, 2000, 2000);
        Material =
            [
                new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("sky_box_images/ftNegZ.jpg"),
                    side: THREE.BackSide
                }),
                new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("sky_box_images/bkPosZ.jpg"),
                    side: THREE.BackSide
                }),
                new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("sky_box_images/PosY.jpg"),
                    side: THREE.BackSide
                }),
                new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("sky_box_images/dnNegY.jpg"),
                    side: THREE.BackSide
                }),
                new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("sky_box_images/PosX.jpg"),
                    side: THREE.BackSide
                }),
                new THREE.MeshBasicMaterial({
                    map: new THREE.TextureLoader().load("sky_box_images/NegX(1).jpg"),
                    side: THREE.BackSide
                })

            ];
        skyBoxMaterial = new THREE.MeshFaceMaterial(Material);
        completeSkyBox = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);
        completeSkyBox.receiveShadow = false;
        completeSkyBox.castShadow = true;
        return completeSkyBox;
    }


    // this function controls the green part of the surface.
    var grass = function () {
        var geometry2 = new THREE.PlaneGeometry(333.33, 250, 2, 1);
        //geometry2.rotation.x = -Math.PI/2;
        var material2 = new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load("grass.jpg"),
            side: THREE.DoubleSide
        });
        var green = new THREE.Mesh(geometry2, material2);
        green.receiveShadow = true;
        green.castShadow = false;
        return green;
    }

    var plane = grass();
    plane.rotateX(-Math.PI / 2);
    plane.translateY(208.33);

    var plane2 = grass();
    plane2.rotateX(-Math.PI / 2);
    plane2.translateY(-208.33);

    var road = function () {
        var geometry3 = new THREE.PlaneGeometry(500, 1000, 2, 2);
        //geometry2.rotation.x = -Math.PI/2;
        var material3 = new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load("road.jpg"),
            side: THREE.DoubleSide
        });
        var se = new THREE.Mesh(geometry3, material3);
        se.receiveShadow = true;
        se.castShadow = false;
        return se;
    }

    var seg = road();
    seg.rotateX(-Math.PI / 2);
    seg.translateX(-420);

    var seg2 = road();
    seg2.rotateX(-Math.PI / 2);
    seg2.translateX(420);

    var road2 = function () {
        var geometry4 = new THREE.PlaneGeometry(366.67, 166.67, 2, 2);
        //geometry2.rotation.x = -Math.PI/2;
        var material4 = new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load("road2.jpg"),
            side: THREE.DoubleSide
        });
        var se2 = new THREE.Mesh(geometry4, material4);
        se2.receiveShadow = true;
        se2.castShadow = false;
        return se2;
    }
    var seg3, seg4, seg5;

    seg3 = road2();
    seg3.rotateX(-Math.PI / 2);
    seg3.receiveShadow = true;
    seg3.castShadow = false;

    seg4 = road2();
    seg4.rotateX(-Math.PI / 2);
    seg4.translateY(416.67);

    seg5 = road2();
    seg5.rotateX(-Math.PI / 2);
    seg5.translateY(-416.67);


    scene.add(skyBox());
    scene.add(plane);
    scene.add(plane2);
    scene.add(seg);
    scene.add(seg2);
    scene.add(seg3);
    scene.add(seg4);
    scene.add(seg5);

    // var loader = new THREE.OBJLoader();
    // loader.load(
    // 		'1967-shelby-ford-mustang-obj/1967-shelby-ford-mustang.obj',
    // 		function (object) {
    // 			object.rotation.y = Math.PI / 2;
    // 			object.scale.set(10, 10, 10);
    // 			object.castShadow = true;
    // 			object.receiveShadow = false;
    // 			//scene.add(object);
    // 		});

}
//This updates the orbits controls
//controls.update();

/*this caters for animating the scene
 *i.e rotating the cube/rotating the view
 */
function animate() {
    requestAnimationFrame( animate );

    renderer.render( scene, camera);
};
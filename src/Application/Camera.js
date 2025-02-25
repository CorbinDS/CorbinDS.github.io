import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Application from "./Application.js"

export default class Camera{
    constructor(baseScene) {
        this.application = new Application();
        this.baseScene = baseScene;
        this.sizes = this.application.sizes;
        this.scene = this.baseScene.scene;
        this.canvas = this.application.canvas;
        
        this.setInstance();
    }

    setInstance(){
        this.instance = new THREE.PerspectiveCamera(
            35,
            this.sizes.width / this.sizes.height,
            0.1,
            100
        );
        this.instance.position.set(6,4,8);
        this.instance.lookAt(new THREE.Vector3(0, 0, 0));
        this.scene.add(this.instance);
    }

    setOrbitControls(){
        this.controls = new OrbitControls(this.instance, this.canvas);
        this.controls.enableDamping = true;
    }

    resize(){
        this.instance.aspect = this.sizes.width / this.sizes.height;
        this.instance.updateProjectionMatrix();
    }

    update(){
        if (this.controls) this.controls.update();
    }
}
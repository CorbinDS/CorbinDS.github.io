import * as THREE from 'three'
import Application from "./Application.js"
import Camera from "./Camera.js"
import Debug from "./Utils/Debug.js"


export default class BaseScene {
    constructor(){  
        this.application = new Application();
        this.debug = new Debug();
        this.scene = new THREE.Scene();
        this.camera = new Camera(this);
    }

    update(){
        this.camera.update();
    }
}
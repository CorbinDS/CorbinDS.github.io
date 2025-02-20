import * as THREE from 'three'

import Camera from "./Camera.js"
import Debug from "./Utils/Debug.js"
import World from "./World/World.js"

export default class BaseScene {
    constructor(){  
        this.debug = new Debug();
        this.scene = new THREE.Scene();
        this.camera = new Camera(this);
        this.world = new World(this);
    }

    update(){
        this.camera.update();
        this.world.update();
    }
}
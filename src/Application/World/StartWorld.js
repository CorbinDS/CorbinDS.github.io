import * as THREE from 'three'

import World from "./World.js"

export default class StartWorld extends World {
    constructor(baseScene){
        super(baseScene);
        
        this.resources.on("ready", () => {
            // Setup
            const geometry = new THREE.BoxGeometry( 1, 1, 1 );
            const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            const cube = new THREE.Mesh( geometry, material );
            this.baseScene.scene.add( cube );
        });
    }

    update(){

    }
}
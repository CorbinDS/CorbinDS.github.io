import * as THREE from 'three'
import Sizes from "./Utils/Sizes.js"
import Time from "./Utils/Time.js"
import Resources from "./Utils/Resources.js"
import Camera from "./Camera.js"
import Renderer from "./Renderer.js"
import World from "./World/World.js"
import sources from "./sources.js"
import Debug from "./Utils/Debug.js"
import BaseScene from "./BaseScene.js"

let instance = null;

export default class Application {
    constructor(canvas){
        if (instance) {
            return instance;
        }
        instance = this;
        // Global Access
        window.application = this;
        
        // options
        this.canvas = canvas;
        
        // Setup
        this.debug = new Debug();
        // Sizes and Time will be needed by all BaseScenes, so it is ok to keep them here
        this.sizes = new Sizes();
        // Might want to have seperate timers for each individual BaseScene (keep track of time since you've entered one particular area)
        this.time = new Time();
        // Will probably want to seperate resources by baseScenes later.
        this.resources = new Resources(sources);


        const tempScene = new BaseScene();
        this.scenes = {};
        this.scenes.tempScene = tempScene;
        this.scenes.currentScene = tempScene;


        // Only need one renderer, but we will be switching cameras
        this.renderer = new Renderer(); 

        // Sizes resize event
        this.sizes.on("resize", () => {
            this.resize();
        });
        // Time tick event
        this.time.on("tick", () => {
            this.update();
        })
    }

    resize(){
        // either tell all cameras, or handle resizing to current size when switching to a new camera
        this.currentScene.camera.resize();
        this.renderer.resize();
    }

    update() {
        if (this.scenes.currentScene){
            this.scenes.currentScene.update();
            this.renderer.update();
        } 
    }

    // destroy(){
    //     this.sizes.off("resize");
    //     this.time.off("tick");

    //     // Traverse scene
    //     this.scene.traverse((child) => {
    //         if (child instanceof THREE.Mesh){
    //             child.geometry.dispose();

    //             for (const key in child.material){
    //                 const value = child.material[key];

    //                 if (value && typeof value.dispose() === "function"){
    //                     value.dispose();
    //                 }
    //             }
    //         }
    //     });
    //     this.camera.controls.dispose();
    //     this.renderer.instance.dispose();

    //     if (this.debug.active){
    //         this.debug.ui.dispose();
    //     }
    // }
}
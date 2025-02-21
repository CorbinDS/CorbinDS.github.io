import Application from "../Application.js"
import Environment from "./Environment.js"
import Floor from "./Floor.js"
import Fox from "./Fox.js"
export default class World {
    constructor(baseScene){
        this.application = new Application();

        this.shouldRotate = false;
        
        this.baseScene = baseScene;
        this.scene = this.baseScene.scene;
        this.resources = this.application.resources;


        this.resources.on("ready", () => {
            // Setup
            this.floor = new Floor(this.baseScene);
            if (this.shouldRotate) this.floor.rotateMesh();
            this.fox = new Fox(this.baseScene);
            this.environment = new Environment(this.baseScene);
        });
    }

    update(){
        if (this.fox){
            this.fox.update();
        }
    }
    setShouldRotate(){
        this.shouldRotate = true;
    }
}
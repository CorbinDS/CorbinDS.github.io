import Application from "../Application.js"
import Environment from "./Environment.js"
import Floor from "./Floor.js"
import Fox from "./Fox.js"
export default class World {
    constructor(baseScene){
        this.application = new Application();

        console.log(this.application);

        this.baseScene = baseScene;
        this.scene = this.baseScene.scene;
        this.resources = this.application.resources;


        this.resources.on("ready", () => {
            // Setup
            this.floor = new Floor(this.baseScene);
            this.fox = new Fox(this.baseScene);
            this.environment = new Environment(this.baseScene);
        });
    }

    update(){
        if (this.fox){
            this.fox.update();
        }
    }
}
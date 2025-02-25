import World from "./World.js"
import Environment from "./Environment.js"
import Floor from "./Floor.js"
import Fox from "./Fox.js"

export default class FoxWorld extends World {
    constructor(baseScene){
        super(baseScene);
        
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
}
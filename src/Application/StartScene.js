import StartWorld from "./World/StartWorld.js"
import Inputs from "./Utils/Inputs.js"
import BaseScene from "./BaseScene.js"


export default class StartScene extends BaseScene{
    constructor(){  
        super();
        this.world = new StartWorld(this);
    }

    update(){
        super.update();
        this.world.update();
    }
}
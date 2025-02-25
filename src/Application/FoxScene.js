import FoxWorld from "./World/FoxWorld.js"
import BaseScene from "./BaseScene.js"
import Helpers from "./Utils/Helpers.js"

export default class FoxScene extends BaseScene{
    constructor(){  
        super();
        this.world = new FoxWorld(this);
        this.application.inputs.on("scroll", (deltaY) => {
            this.scroll(deltaY);
        });
        this.scroller = {};
        this.scroller.currentScroll = 0;
        this.scroller.targetScroll = 1000;
    }

    update(){
        super.update();
        this.world.update();
    }

    scroll(dY){
        this.scroller.currentScroll += dY;
        this.scroller.currentScroll = Helpers.clamp(this.scroller.currentScroll, 0, this.scroller.targetScroll);
        if (this.scroller.currentScroll === this.scroller.targetScroll) this.triggerSwap();
    }

    triggerSwap(){
        this.application.swapCurrentScene();
    }
}
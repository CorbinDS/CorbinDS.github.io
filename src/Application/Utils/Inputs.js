import EventEmitter from "./EventEmitter.js"

export default class Inputs extends EventEmitter {
    constructor(){
        super();

        window.addEventListener("wheel", (event) => {
            this.trigger("scroll", [event.deltaY]);
        });
    }
}
import Application from "../Application.js"

export default class World {
    constructor(baseScene){
        this.application = new Application();

        this.baseScene = baseScene;
        this.scene = this.baseScene.scene;
        this.resources = this.application.resources;
    }
}
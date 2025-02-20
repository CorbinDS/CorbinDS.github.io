import * as THREE from 'three'

import Application from "../Application.js"
export default class Environment{
    constructor(baseScene){
        this.application = new Application();
        this.baseScene = baseScene;
        this.scene = this.application.scene;
        this.resources = this.application.resources;
        this.debug = this.application.debug;

        if (this.debug.active){
            this.debugFolder = this.debug.ui.addFolder("environment");
        }

        this.setSunLight();
        this.setEnvironmentMap(); 
    }

    setSunLight(){
        this.sunLight = new THREE.DirectionalLight('#ffffff', 4)
        this.sunLight.castShadow = true
        this.sunLight.shadow.camera.far = 15
        this.sunLight.shadow.mapSize.set(1024, 1024)
        this.sunLight.shadow.normalBias = 0.05
        this.sunLight.position.set(3.5, 2, - 1.25)
        this.baseScene.scene.add(this.sunLight)

        if (this.debug.active){
            this.debugFolder
                .add(this.sunLight, "intensity")
                .name("sunLightIntensity")
                .min(0)
                .max(10)
                .step(0.001);

            this.debugFolder
                .add(this.sunLight.position, "x")
                .name("sunLightX")
                .min(-5)
                .max(5)
                .step(0.001);
            this.debugFolder
                .add(this.sunLight.position, "y")
                .name("sunLightY")
                .min(-5)
                .max(5)
                .step(0.001);

            this.debugFolder
                .add(this.sunLight.position, "z")
                .name("sunLightZ")
                .min(-5)
                .max(5)
                .step(0.001);
        }

        

    }
    
    setEnvironmentMap(){
        this.environmentMap = {};
        this.environmentMap.intensity = 0.4;
        this.environmentMap.texture = this.resources.items.environmentMapTexture;
        this.environmentMap.texture.colorSpace = THREE.SRGBColorSpace;

        this.baseScene.environment = this.environmentMap.texture;

        this.environmentMap.updateMaterial = () => {
            this.baseScene.scene.traverse((child) => {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial){
                    child.material.envMap = this.environmentMap.texture;
                    child.material.envMapIntensity = this.environmentMap.intensity;
                    child.material.needsUpdate = true;
                }
            });
        }

        this.environmentMap.updateMaterial();

        // Debug

        if (this.debug.active){
            this.debugFolder
                .add(this.environmentMap, "intensity")
                .name("envMapIntensity")
                .min(0)
                .max(4)
                .step(0.001)
                .onChange(this.environmentMap.updateMaterial);
        }
    }
}
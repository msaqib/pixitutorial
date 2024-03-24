import * as PIXI from "pixi.js";
import { Loader } from "./Loader"
import { ScenesManager } from "./ScenesManager";

class Application {
    run(config) {
        this.config = config;
        this.app = new PIXI.Application();
        this.config.stage = this.app.stage;
        this.app.init({ width: 500, height: 500 }).then(()=> {
            document.body.appendChild(this.app.canvas);
            this.loader = new Loader(this.config, PIXI.Assets);
            this.loader.preload().then(() => this.start());
            this.scenes = new ScenesManager();
        }) 
    }
    async start() {
        this.scene = new this.config["startScene"]();
        this.scenes.start("Game");
        const bg = this.scene.backgroundSprite
        // Center the sprite's anchor point
        bg.anchor.set(0.5);
        // Move the sprite to the center of the screen
        bg.x = this.app.screen.width / 2;
        bg.y = this.app.screen.height / 2;
        this.app.stage.addChild(bg);
    }
    res(key) {
        return this.loader.resources[key];
    }

    sprite(key) {
        return new PIXI.Sprite(this.res(key));
    }
}

export const App = new Application();
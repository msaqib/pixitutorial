import * as PIXI from "pixi.js";
import { App } from "../system/App";
import { Scene } from "../system/Scene";

export class Game extends Scene{
    constructor() {
        super()
        this.container = new PIXI.Container();
        this.createBackground();
    }
    createBackground() {
        this.bg = App.sprite("bg");
        
        // Create a sprite with the background image
        this.backgroundSprite = new PIXI.Sprite(this.bg);

        // Set the position of the background sprite to (0, 0)
        this.bg.position.set(0, 0);
        this.container.addChild(this.backgroundSprite);
    }
}
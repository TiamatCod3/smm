import BaseScene from "./BaseScene";

export default class PreloadScene extends Phaser.Scene{
    constructor(config:Phaser.Types.Core.GameConfig) {
        super('PreloadScene');
    }

    preload(){
        this.load.audio('mario-music','assets/music/tema-principal.mp3')
    }

    create(): void {
        this.scene.start('MenuScene')
    }
}
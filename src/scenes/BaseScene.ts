import Phaser, { Game } from "phaser";

export default class BaseScene extends Phaser.Scene {
    config: Phaser.Types.Core.GameConfig;
    screenCenter: number[];
    fontSize: number;
    lineHeight: number;
    fontOptions: { fontSize: string; fill: string; };
    constructor(key:string, config:Phaser.Types.Core.GameConfig) {
        super(key)
        this.config = config;
        this.screenCenter = [config.width / 2, config.height / 2]
        this.fontSize = 34;
        this.lineHeight = 42;
        this.fontOptions = {fontSize: `${this.fontSize}px`, fill: '#fff'};
    }

    create(){

    }

    createMenu(menu, setupMenuEvents){
        let lastMenuPositionY = 0

        menu.forEach((menuItem) =>{
            console.group(menuItem)
            const menuPosition = [
                this.screenCenter[0], 
                this.screenCenter[1] + lastMenuPositionY
            ]
            // const text = this.add.text(...menuPosition,menuItem.text, {
            //     fontSize: '32px',
            //     color: '#CD00FF'
            // }).setOrigin(0.5)
            menuItem.textGO = this.add.text(...menuPosition, menuItem.text, this.fontOptions).setOrigin(0.5, 1);
            lastMenuPositionY += this.lineHeight;
            setupMenuEvents(menuItem);
        })
    }
}

import BaseScene from "./BaseScene";
//https://www.mariomayhem.com/downloads/sound_tracks/super_mario_bros_1_soundtrack.php
//https://themushroomkingdom.net/media/smb/wav

export default class MenuScene extends BaseScene{
    menu: ({ scene: string; text: string; } | { scene: null; text: string; })[];
    constructor(config:Phaser.Types.Core.GameConfig ) {
        super('MenuScene', config);
        this.menu = [
            {scene: 'PlayScene', text: 'Play'},
            {scene: 'ScoreScene', text: 'Score'},
            {scene: null, text: 'Exit'}
        ]
    }
    
    preload():void{
        
    }
    
    create(): void {
        this.createMenu(this.menu, this.setupMenuEvents.bind(this));
    }
    setupMenuEvents(menuItem: MenuItem): void {
        const textGO = menuItem.textGO;
        textGO.setInteractive();

        textGO.on('pointerover', () => {
            textGO.setStyle({fill: '#ff0'});
        })
      
          textGO.on('pointerout', () => {
            textGO.setStyle({fill: '#fff'});
        })
        textGO.on('pointerup', () => {
            menuItem.scene && this.scene.start(menuItem.scene);
      
            if (menuItem.text === 'Exit') {
              this.game.destroy(true);
            }
        })
    }
}
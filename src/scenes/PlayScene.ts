import BaseScene from "./BaseScene";

export default class PlayScene extends BaseScene{
    constructor(config: Phaser.Types.Core.GameConfig ) {
        super('PlayScene', config)
        this.config = config;
    }

    create(){
        const text = this.add.text(
            400,300,'Olá pessoal',{
                fontSize: '32px',
                color: '#CD00FF'
            }
        ).setOrigin(0.5)
    }
}
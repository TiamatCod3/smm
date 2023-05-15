import Phaser from "phaser";
import BaseScene from "./scenes/BaseScene";
import MenuScene from "./scenes/MenuScene";
import PlayScene from "./scenes/PlayScene";
import PreloadScene from "./scenes/PreloadScene";


const WIDTH = 800;
const HEIGHT = 600;
const START_POSITION = {x: WIDTH * 0.1, y: HEIGHT / 2}

const SHARED_CONFIG = {
    width: WIDTH,
    height: HEIGHT,
    startPosition: START_POSITION
}

const Scenes = [PreloadScene, MenuScene, PlayScene]
const createScene = Scene => new Scene(SHARED_CONFIG)
const initScenes = () => Scenes.map(createScene)

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    ...SHARED_CONFIG,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: true
        }
    },
    backgroundColor: '#4488aa',
    scene: initScenes()
}

new Phaser.Game(config)



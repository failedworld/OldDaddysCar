// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameState from "./GameState";
import ObstaclesPool from "./ObstaclesPool";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Obstacle extends cc.Component {

    @property(cc.Integer)
    speed: number = 800;

    @property(cc.Integer)
    speedUp: number = 0;

    isPassed = false

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        console.log('=======add obs======')

    }

    update (dt) {
        if (GameState.instance.getGameState() == 'GameOver')
            return
        let timerSpeedUp = GameState.instance.getObsFallingSpeed()
        this.node.y -= (this.speed + this.speedUp + timerSpeedUp) * dt
        if (this.node.y < -1140){
            // ObstaclesPool.instance.deleteObs(this.node)
            this.node.destroy()
        }

        if (this.node.y < -700 && this.isPassed == false){
            GameState.instance.addScore()
            this.isPassed = true
        }
    }

    setSpeed(speed){
        this.speed = speed
    }

    setSpeedUp(speedUp){
        this.speedUp = speedUp
    }

    setPassed(isPassed){
        this.isPassed = isPassed
    }

    protected onDestroy(): void {
        console.log('=======delete obs======')
    }
}

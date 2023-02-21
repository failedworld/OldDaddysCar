// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameLogic from "./GameLogic";
import GameState from "./GameState";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DaddyCar extends cc.Component {

    count = 0
    
    power = 0

    @property(cc.Float)
    backForce = 0.0

    @property(cc.Node)
    gameLogic:cc.Node = null

    start () {
        cc.director.getCollisionManager().enabled = true

    }

    onCollisionEnter(other){
        this.count += 1
        this.gameLogic.getComponent(GameLogic).gameOver()
        console.log("=======collision =======" + this.count)
    }

    update (dt) {
        if (GameState.instance.getGameState() == 'GameOver')
            return

        if (this.power > 0 )
            this.power -= this.backForce
        
        if (this.power < 0)
            this.power += this.backForce

        this.node.x += this.power

        if (this.node.x > (1080 / 2 - this.node.width / 2))
            this.node.x = 1080 / 2 - this.node.width / 2
        if (this.node.x < -1080 / 2 + this.node.width / 2)
            this.node.x = -1080 / 2 + this.node.width / 2

    }

    setPower(power){
        this.power = power
    }
}

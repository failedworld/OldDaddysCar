// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameState from "./GameState";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameLogic extends cc.Component {

    isGameOver = false

    @property(cc.Node)
    gameoverPanel:cc.Node = null

    onLoad(){
        // 结束面板隐藏
        this.gameoverPanel.active = false

    }
 
    start () {

        

    }

    gameOver(){
        // 游戏结束
       GameState.instance.setGameState('GameOver')
       this.gameoverPanel.active = true
       let gameOverScoreLblNode = this.gameoverPanel.getChildByName('GameOverScoreLbl')
    
       let scorelbl = gameOverScoreLblNode.getComponent(cc.Label)
       console.log('score ======= ' + scorelbl.string)
       scorelbl.string = 'Score:' + GameState.instance.getScore()
    //    .string = 'Score:' + GameState.instance.getScore

       console.log('=========game over =============')
    }

    public gameReset(){
        GameState.instance.resetAll()
        this.gameoverPanel.active = false
        cc.director.loadScene('Game')
    }

    public gameGiveup(){
        console.log('Game Over===== give up')
        GameState.instance.resetAll()
        this.gameoverPanel.active = false
        cc.director.loadScene('Login')
    }

    public gameStart(){
        // this.gameoverPanel.active = false
        cc.director.loadScene('Game')
    }

    // update (dt) {}
}

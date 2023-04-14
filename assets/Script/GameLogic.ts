// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import GameState from "./GameState";
import MusicManager from "./MusicManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameLogic extends cc.Component {

    isGameOver = false

    @property(cc.Node)
    gameoverPanel:cc.Node = null

    private musicName: string = 'modern-vlog-140795'

    onLoad(){
        // 结束面板隐藏
        this.gameoverPanel.active = false
        
        MusicManager.instance.init()
        let soundClip = MusicManager.instance.getMusic(this.musicName)
        // console.log('soundClip', soundClip)
        MusicManager.instance.playMusic(soundClip)
        // let musicAs = new cc.AudioSource()
        // musicAs.clip = soundClip
        // musicAs.loop = true
        // musicAs.volume = 100
        // musicAs.play()
        console.log('======== music is playing =========')
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
       MusicManager.instance.stopPlay()
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



const {ccclass, property} = cc._decorator;

@ccclass('GameState')
export default class GameState extends cc.Component {

    private static  _instance:GameState = null

    private gameState = 'GameStart'

    private score = 0

    private obsFallingSpeed = 0

    private obsGenerateJudging = 0

    public static get instance():GameState{
        if (!GameState._instance){
            GameState._instance = new GameState();
        }
        return this._instance
    }

    public  getGameState(){
        return this.gameState;
    }

    public  setGameState(gameState){
        this.gameState = gameState;
    }

    public addScore(){
        this.score += 1
    }

    public getScore(){
        return this.score
    }

    public resetAll(){
        this.score = 0
        this.gameState = 'GameStart'
    }

    public getObsFallingSpeed(){
        return this.obsFallingSpeed;
    }

    public setObsFallingSpeed(newSpeed){
        this.obsFallingSpeed = newSpeed
    }

    public getObsGenerateJudging(){
        return this.obsGenerateJudging;
    }

    public setObsGenerateJudging(ObsGenerateJudging){
        this.obsGenerateJudging = ObsGenerateJudging
    }


    start () {

    }

    // update (dt) {}
}

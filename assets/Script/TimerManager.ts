import GameState from "./GameState";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TimerManager extends cc.Component {

    @property(cc.Integer)
    // 60 seconds 
    deltaTime: number = 10;

    @property(cc.Integer)
    deltaSpeedUp: number = 300;

    @property(cc.Integer)
    scoreDeltaTime: number = 1;


    start () {
        // 添加计时器
        let self = this
        this.schedule(this.changeObsSpeed,self.deltaTime) 
        this.schedule(this.changeObsGeneration,self.deltaTime)
        this.schedule(this.addingScore,self.scoreDeltaTime)
        this.schedule(this.changeScoreAdding,self.deltaTime)
        console.log('======== Timer scheduled=========')
    }


    // 改变障碍物下落时间
    changeObsSpeed(){
        if (GameState.instance.getGameState() == 'GameOver'){
            console.log('========unscheduled=========')
            this.unschedule(this.changeObsSpeed)
        }else{
            // console.log('========unscheduled=========')
            let nowSpeed = GameState.instance.getObsFallingSpeed()
            GameState.instance.setObsFallingSpeed(nowSpeed + this.deltaSpeedUp)

            console.log('======== Falling Speed up =========')
        }

        
    }

    changeObsGeneration(){
        if (GameState.instance.getGameState() == 'GameOver'){
            console.log('========unscheduled=========')
            this.unschedule(this.changeObsGeneration)
        }else{
            let nowJudge = GameState.instance.getObsGenerateJudging()
            GameState.instance.setObsGenerateJudging(nowJudge + 0.1)
            console.log('======== Obs generation speed up =========')
        }
    }

    addingScore(){
        if (GameState.instance.getGameState() == 'GameOver'){
            console.log('========unscheduled=========')
            this.unschedule(this.addingScore)
        }else{
            GameState.instance.addScore()
            console.log('======== adding score =========')
        }
    }

    changeScoreAdding(){
        if (GameState.instance.getGameState() == 'GameOver'){
            console.log('========unscheduled=========')
            this.unschedule(this.changeScoreAdding)
        }else{
            let nowScoreAdding = GameState.instance.getAddingNumber()
            nowScoreAdding += 1
            GameState.instance.setAddingNumber(nowScoreAdding)
            console.log('======== score adding change =========')
        }
    }

    // update (dt) {

    // }
}

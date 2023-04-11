import GameState from "./GameState";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TimerManager extends cc.Component {

    @property(cc.Integer)
    // 60 seconds 
    deltaTime: number = 10;

    @property(cc.Integer)
    deltaSpeedUp: number = 300;


    start () {
        // 添加计时器
        let self = this
        this.schedule(this.changeObsSpeed,self.deltaTime) 
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

    // update (dt) {

    // }
}

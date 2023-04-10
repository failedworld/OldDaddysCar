import GameState from "./GameState";

const {ccclass, property} = cc._decorator;

@ccclass
export default class TimerManager extends cc.Component {

    @property(cc.Integer)
    // 60 seconds 
    deltaTime: number = 60;

    @property(cc.Prefab)
    obsPre: cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let self = this
        this.schedule(this.changeObsSpeed,self.deltaTime) 
        console.log('========scheduled=========')
    }

    changeObsSpeed(){
        if (GameState.instance.getGameState() == 'GameOver'){
            console.log('========unscheduled=========')
            this.unschedule(this.changeObsSpeed)
        }else{
            // console.log('========unscheduled=========')
            let obs = cc.instantiate(this.obsPre)
            obs.setParent(cc.director.getScene())
            obs.y = this.node.y;
            obs.x = Math.random() * 1080 + 20
            // obs.getComponent(Obstacle).setSpeed(1600)
            // ObstaclesPool.instance.addObs(obs)
        }

        
    }

    // update (dt) {

    // }
}

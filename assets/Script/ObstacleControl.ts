import GameState from "./GameState";
import Obstacle from "./Obstacle";
import ObstaclesPool from "./ObstaclesPool";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ObstacleControl extends cc.Component {

    @property(cc.Integer)
    deltaTime: number = 2;

    @property(cc.Prefab)
    obsPre: cc.Prefab = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let self = this
        this.schedule(this.generateObs,self.deltaTime) 
        console.log('========scheduled=========')
    }

    generateObs(){
        if (GameState.instance.getGameState() == 'GameOver'){
            console.log('========unscheduled=========')
            this.unschedule(this.generateObs)
        }else{
            // console.log('========unscheduled=========')
            let obs = cc.instantiate(this.obsPre)
            obs.setParent(cc.director.getScene())
            obs.y = this.node.y;
            obs.x = Math.random() * 1080 + 20
            obs.getComponent(Obstacle).setSpeed(1600)
            ObstaclesPool.instance.addObs(obs)
        }

        
    }

    // update (dt) {

    // }
}

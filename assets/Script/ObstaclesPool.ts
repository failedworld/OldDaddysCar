

const {ccclass, property} = cc._decorator;

@ccclass('ObstaclesPool')
export default class ObstaclesPool extends cc.Component {

    private static _instance:ObstaclesPool = null

    obstaclesPool:Array<cc.Node> = []

    public static get instance():ObstaclesPool{
        if (!ObstaclesPool._instance){
            ObstaclesPool._instance = new ObstaclesPool()
        }
        return this._instance
    }

    start () {

    }

    public addObs(obs){
        this.obstaclesPool.push(obs)
    }

    public deleteObs(obs){
        this.obstaclesPool.splice(this.obstaclesPool.findIndex(obs),1)
    }

    public getSize(){
        return this.obstaclesPool.length
    }


    // update (dt) {}
}

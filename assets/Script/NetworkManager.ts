
const {ccclass, property} = cc._decorator;

@ccclass
export default class NetworkManager extends cc.Component {

    private static  _instance:NetworkManager = null

    public static get instance():NetworkManager{
        if (!NetworkManager._instance){
            NetworkManager._instance = new NetworkManager();
        }
        return this._instance
    }
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}
}

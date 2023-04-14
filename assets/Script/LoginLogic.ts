import MusicManager from "./MusicManager";


const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginLogic extends cc.Component {

    start () {

    }

    public gameStart(){
        // MusicManager.instance.init()
        MusicManager.instance.loadMusic()
        cc.director.loadScene('Game')
    }

    // update (dt) {}
}


const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginLogic extends cc.Component {


    start () {

    }

    public gameStart(){
        cc.director.loadScene('Game')
    }

    // update (dt) {}
}

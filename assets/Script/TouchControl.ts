import DaddyCar from "./DaddyCar";


const {ccclass, property} = cc._decorator;

@ccclass
export default class TouchControl extends cc.Component {

    @property(cc.Node)
    daddyCar: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.node.on(cc.Node.EventType.TOUCH_START,this.touchBegin,this)

    }

    // update (dt) {}

    touchBegin(event:cc.Event.EventTouch){
        let pos = event.getLocation()
        if (pos.x > 1080 / 2){
            console.log("=====click right=====")
            this.daddyCar.getComponent(DaddyCar).setPower(5)
        }
        else{
            this.daddyCar.getComponent(DaddyCar).setPower(-5)
            console.log("=====click left======")
        }

    }
}

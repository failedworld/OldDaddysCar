
import GameState from "./GameState";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShowScore extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    text = 'Score:0'
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        this.label.string = this.text;
    }

    update (dt) {
        // console.log('======== score ======' + GameState.instance.getScore())
        this.text = 'Score:' + GameState.instance.getScore()
        this.label.string = this.text

    }
}

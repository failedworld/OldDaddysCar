import GameState from "./GameState";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BgControl extends cc.Component {

    @property({type: cc.Integer})
    speed:number = 0

    // private gameOver = false
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        if (GameState.instance.getGameState() == 'GameOver')
            return

        for (let bgNode of this.node.children){
            bgNode.y -= this.speed * dt

            if (bgNode.y <= -bgNode.height)
                bgNode.y += bgNode.height * 2
        }
    }
}

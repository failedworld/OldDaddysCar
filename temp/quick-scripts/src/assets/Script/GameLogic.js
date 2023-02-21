"use strict";
cc._RF.push(module, 'e388a867i9JBYTzLfw3I85F', 'GameLogic');
// Script/GameLogic.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameState_1 = require("./GameState");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLogic = /** @class */ (function (_super) {
    __extends(GameLogic, _super);
    function GameLogic() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isGameOver = false;
        _this.gameoverPanel = null;
        return _this;
        // update (dt) {}
    }
    GameLogic.prototype.onLoad = function () {
        // 结束面板隐藏
        this.gameoverPanel.active = false;
    };
    GameLogic.prototype.start = function () {
    };
    GameLogic.prototype.gameOver = function () {
        // 游戏结束
        GameState_1.default.instance.setGameState('GameOver');
        this.gameoverPanel.active = true;
        var gameOverScoreLblNode = this.gameoverPanel.getChildByName('GameOverScoreLbl');
        var scorelbl = gameOverScoreLblNode.getComponent(cc.Label);
        console.log('score ======= ' + scorelbl.string);
        scorelbl.string = 'Score:' + GameState_1.default.instance.getScore();
        //    .string = 'Score:' + GameState.instance.getScore
        console.log('=========game over =============');
    };
    GameLogic.prototype.gameReset = function () {
        GameState_1.default.instance.resetAll();
        this.gameoverPanel.active = false;
        cc.director.loadScene('Game');
    };
    GameLogic.prototype.gameGiveup = function () {
        console.log('Game Over===== give up');
        GameState_1.default.instance.resetAll();
        this.gameoverPanel.active = false;
        cc.director.loadScene('Login');
    };
    GameLogic.prototype.gameStart = function () {
        // this.gameoverPanel.active = false
        cc.director.loadScene('Game');
    };
    __decorate([
        property(cc.Node)
    ], GameLogic.prototype, "gameoverPanel", void 0);
    GameLogic = __decorate([
        ccclass
    ], GameLogic);
    return GameLogic;
}(cc.Component));
exports.default = GameLogic;

cc._RF.pop();
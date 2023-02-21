
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameLogic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lTG9naWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseUNBQW9DO0FBRTlCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBb0RDO1FBbERHLGdCQUFVLEdBQUcsS0FBSyxDQUFBO1FBR2xCLG1CQUFhLEdBQVcsSUFBSSxDQUFBOztRQThDNUIsaUJBQWlCO0lBQ3JCLENBQUM7SUE3Q0csMEJBQU0sR0FBTjtRQUNJLFNBQVM7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFFckMsQ0FBQztJQUVELHlCQUFLLEdBQUw7SUFJQSxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNJLE9BQU87UUFDUixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ2hDLElBQUksb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUVoRixJQUFJLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQy9DLFFBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQzdELHNEQUFzRDtRQUVuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVNLDZCQUFTLEdBQWhCO1FBQ0ksbUJBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2pDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFTSw4QkFBVSxHQUFqQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtRQUNyQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDakMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUVNLDZCQUFTLEdBQWhCO1FBQ0ksb0NBQW9DO1FBQ3BDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUE1Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDVTtJQUxYLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FvRDdCO0lBQUQsZ0JBQUM7Q0FwREQsQUFvREMsQ0FwRHNDLEVBQUUsQ0FBQyxTQUFTLEdBb0RsRDtrQkFwRG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuL0dhbWVTdGF0ZVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTG9naWMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIGlzR2FtZU92ZXIgPSBmYWxzZVxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZW92ZXJQYW5lbDpjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIC8vIOe7k+adn+mdouadv+makOiXj1xyXG4gICAgICAgIHRoaXMuZ2FtZW92ZXJQYW5lbC5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgIH1cclxuIFxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZU92ZXIoKXtcclxuICAgICAgICAvLyDmuLjmiI/nu5PmnZ9cclxuICAgICAgIEdhbWVTdGF0ZS5pbnN0YW5jZS5zZXRHYW1lU3RhdGUoJ0dhbWVPdmVyJylcclxuICAgICAgIHRoaXMuZ2FtZW92ZXJQYW5lbC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICBsZXQgZ2FtZU92ZXJTY29yZUxibE5vZGUgPSB0aGlzLmdhbWVvdmVyUGFuZWwuZ2V0Q2hpbGRCeU5hbWUoJ0dhbWVPdmVyU2NvcmVMYmwnKVxyXG4gICAgXHJcbiAgICAgICBsZXQgc2NvcmVsYmwgPSBnYW1lT3ZlclNjb3JlTGJsTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICBjb25zb2xlLmxvZygnc2NvcmUgPT09PT09PSAnICsgc2NvcmVsYmwuc3RyaW5nKVxyXG4gICAgICAgc2NvcmVsYmwuc3RyaW5nID0gJ1Njb3JlOicgKyBHYW1lU3RhdGUuaW5zdGFuY2UuZ2V0U2NvcmUoKVxyXG4gICAgLy8gICAgLnN0cmluZyA9ICdTY29yZTonICsgR2FtZVN0YXRlLmluc3RhbmNlLmdldFNjb3JlXHJcblxyXG4gICAgICAgY29uc29sZS5sb2coJz09PT09PT09PWdhbWUgb3ZlciA9PT09PT09PT09PT09JylcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2FtZVJlc2V0KCl7XHJcbiAgICAgICAgR2FtZVN0YXRlLmluc3RhbmNlLnJlc2V0QWxsKClcclxuICAgICAgICB0aGlzLmdhbWVvdmVyUGFuZWwuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWUnKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnYW1lR2l2ZXVwKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgT3Zlcj09PT09IGdpdmUgdXAnKVxyXG4gICAgICAgIEdhbWVTdGF0ZS5pbnN0YW5jZS5yZXNldEFsbCgpXHJcbiAgICAgICAgdGhpcy5nYW1lb3ZlclBhbmVsLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdMb2dpbicpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdhbWVTdGFydCgpe1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZW92ZXJQYW5lbC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZScpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
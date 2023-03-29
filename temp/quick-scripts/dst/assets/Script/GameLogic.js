
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZUxvZ2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLHlDQUFvQztBQUU5QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQW9EQztRQWxERyxnQkFBVSxHQUFHLEtBQUssQ0FBQTtRQUdsQixtQkFBYSxHQUFXLElBQUksQ0FBQTs7UUE4QzVCLGlCQUFpQjtJQUNyQixDQUFDO0lBN0NHLDBCQUFNLEdBQU47UUFDSSxTQUFTO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO0lBRXJDLENBQUM7SUFFRCx5QkFBSyxHQUFMO0lBSUEsQ0FBQztJQUVELDRCQUFRLEdBQVI7UUFDSSxPQUFPO1FBQ1IsbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNoQyxJQUFJLG9CQUFvQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFFaEYsSUFBSSxRQUFRLEdBQUcsb0JBQW9CLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMvQyxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUM3RCxzREFBc0Q7UUFFbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFFTSw2QkFBUyxHQUFoQjtRQUNJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNqQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRU0sOEJBQVUsR0FBakI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7UUFDckMsbUJBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2pDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFFTSw2QkFBUyxHQUFoQjtRQUNJLG9DQUFvQztRQUNwQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBNUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0RBQ1U7SUFMWCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBb0Q3QjtJQUFELGdCQUFDO0NBcERELEFBb0RDLENBcERzQyxFQUFFLENBQUMsU0FBUyxHQW9EbEQ7a0JBcERvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBHYW1lU3RhdGUgZnJvbSBcIi4vR2FtZVN0YXRlXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUxvZ2ljIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIGlzR2FtZU92ZXIgPSBmYWxzZVxuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZ2FtZW92ZXJQYW5lbDpjYy5Ob2RlID0gbnVsbFxuXG4gICAgb25Mb2FkKCl7XG4gICAgICAgIC8vIOe7k+adn+mdouadv+makOiXj1xuICAgICAgICB0aGlzLmdhbWVvdmVyUGFuZWwuYWN0aXZlID0gZmFsc2VcblxuICAgIH1cbiBcbiAgICBzdGFydCAoKSB7XG5cbiAgICAgICAgXG5cbiAgICB9XG5cbiAgICBnYW1lT3Zlcigpe1xuICAgICAgICAvLyDmuLjmiI/nu5PmnZ9cbiAgICAgICBHYW1lU3RhdGUuaW5zdGFuY2Uuc2V0R2FtZVN0YXRlKCdHYW1lT3ZlcicpXG4gICAgICAgdGhpcy5nYW1lb3ZlclBhbmVsLmFjdGl2ZSA9IHRydWVcbiAgICAgICBsZXQgZ2FtZU92ZXJTY29yZUxibE5vZGUgPSB0aGlzLmdhbWVvdmVyUGFuZWwuZ2V0Q2hpbGRCeU5hbWUoJ0dhbWVPdmVyU2NvcmVMYmwnKVxuICAgIFxuICAgICAgIGxldCBzY29yZWxibCA9IGdhbWVPdmVyU2NvcmVMYmxOb2RlLmdldENvbXBvbmVudChjYy5MYWJlbClcbiAgICAgICBjb25zb2xlLmxvZygnc2NvcmUgPT09PT09PSAnICsgc2NvcmVsYmwuc3RyaW5nKVxuICAgICAgIHNjb3JlbGJsLnN0cmluZyA9ICdTY29yZTonICsgR2FtZVN0YXRlLmluc3RhbmNlLmdldFNjb3JlKClcbiAgICAvLyAgICAuc3RyaW5nID0gJ1Njb3JlOicgKyBHYW1lU3RhdGUuaW5zdGFuY2UuZ2V0U2NvcmVcblxuICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT1nYW1lIG92ZXIgPT09PT09PT09PT09PScpXG4gICAgfVxuXG4gICAgcHVibGljIGdhbWVSZXNldCgpe1xuICAgICAgICBHYW1lU3RhdGUuaW5zdGFuY2UucmVzZXRBbGwoKVxuICAgICAgICB0aGlzLmdhbWVvdmVyUGFuZWwuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lJylcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2FtZUdpdmV1cCgpe1xuICAgICAgICBjb25zb2xlLmxvZygnR2FtZSBPdmVyPT09PT0gZ2l2ZSB1cCcpXG4gICAgICAgIEdhbWVTdGF0ZS5pbnN0YW5jZS5yZXNldEFsbCgpXG4gICAgICAgIHRoaXMuZ2FtZW92ZXJQYW5lbC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0xvZ2luJylcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2FtZVN0YXJ0KCl7XG4gICAgICAgIC8vIHRoaXMuZ2FtZW92ZXJQYW5lbC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWUnKVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/BgControl');
require('./assets/Script/DaddyCar');
require('./assets/Script/GameLogic');
require('./assets/Script/GameState');
require('./assets/Script/HelloWorld');
require('./assets/Script/LoginLogic');
require('./assets/Script/NetworkManager');
require('./assets/Script/Obstacle');
require('./assets/Script/ObstacleControl');
require('./assets/Script/ObstaclesPool');
require('./assets/Script/ShowScore');
require('./assets/Script/TouchControl');
require('./assets/migration/use_reversed_rotateBy');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_reversed_rotateBy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '592cc4bYaZAV7+1AuSdW+Zu', 'use_reversed_rotateBy');
// migration/use_reversed_rotateBy.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with v2.1.0/v2.1.1/v2.3.0/v2.3.1/v2.3.2 versions.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Action in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0/v2.1.1/v2.3.0/v2.3.1/v2.3.2 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Action，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
cc.RotateBy._reverse = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9taWdyYXRpb24vdXNlX3JldmVyc2VkX3JvdGF0ZUJ5LmpzIl0sIm5hbWVzIjpbImNjIiwiUm90YXRlQnkiLCJfcmV2ZXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZQyxRQUFaLEdBQXVCLElBQXZCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSB1c2VkIGZvciBwcm9qZWN0cyBjb21wYXRpYmxlIHdpdGggdjIuMS4wL3YyLjEuMS92Mi4zLjAvdjIuMy4xL3YyLjMuMiB2ZXJzaW9ucy5cbiAqIFlvdSBkbyBub3QgbmVlZCB0byBtYW51YWxseSBhZGQgdGhpcyBzY3JpcHQgaW4gYW55IG90aGVyIHByb2plY3QuXG4gKiBJZiB5b3UgZG9uJ3QgdXNlIGNjLkFjdGlvbiBpbiB5b3VyIHByb2plY3QsIHlvdSBjYW4gZGVsZXRlIHRoaXMgc2NyaXB0IGRpcmVjdGx5LlxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cbiAqXG4gKiDmraTohJrmnKznlLEgQ29jb3MgQ3JlYXRvciDoh6rliqjnlJ/miJDvvIzku4XnlKjkuo7lhbzlrrkgdjIuMS4wL3YyLjEuMS92Mi4zLjAvdjIuMy4xL3YyLjMuMiDniYjmnKznmoTlt6XnqIvvvIxcbiAqIOS9oOaXoOmcgOWcqOS7u+S9leWFtuWug+mhueebruS4reaJi+WKqOa3u+WKoOatpOiEmuacrOOAglxuICog5aaC5p6c5L2g55qE6aG555uu5Lit5rKh55So5YiwIEFjdGlvbu+8jOWPr+ebtOaOpeWIoOmZpOivpeiEmuacrOOAglxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcbiAqL1xuXG5jYy5Sb3RhdGVCeS5fcmV2ZXJzZSA9IHRydWU7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2d751Wz+qNIuLW8F7z7ZYag', 'GameState');
// Script/GameState.ts

"use strict";
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameState = /** @class */ (function (_super) {
    __extends(GameState, _super);
    function GameState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gameState = 'GameStart';
        _this.score = 0;
        return _this;
        // update (dt) {}
    }
    GameState_1 = GameState;
    Object.defineProperty(GameState, "instance", {
        get: function () {
            if (!GameState_1._instance) {
                GameState_1._instance = new GameState_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    GameState.prototype.getGameState = function () {
        return this.gameState;
    };
    GameState.prototype.setGameState = function (gameState) {
        this.gameState = gameState;
    };
    GameState.prototype.addScore = function () {
        this.score += 1;
    };
    GameState.prototype.getScore = function () {
        return this.score;
    };
    GameState.prototype.resetAll = function () {
        this.score = 0;
        this.gameState = 'GameStart';
    };
    GameState.prototype.start = function () {
    };
    var GameState_1;
    GameState._instance = null;
    GameState = GameState_1 = __decorate([
        ccclass('GameState')
    ], GameState);
    return GameState;
}(cc.Component));
exports.default = GameState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZVN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBMENDO1FBdENXLGVBQVMsR0FBRyxXQUFXLENBQUE7UUFFdkIsV0FBSyxHQUFHLENBQUMsQ0FBQTs7UUFtQ2pCLGlCQUFpQjtJQUNyQixDQUFDO2tCQTFDb0IsU0FBUztJQVExQixzQkFBa0IscUJBQVE7YUFBMUI7WUFDSSxJQUFJLENBQUMsV0FBUyxDQUFDLFNBQVMsRUFBQztnQkFDckIsV0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLFdBQVMsRUFBRSxDQUFDO2FBQ3pDO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3pCLENBQUM7OztPQUFBO0lBRU8sZ0NBQVksR0FBcEI7UUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUVPLGdDQUFZLEdBQXBCLFVBQXFCLFNBQVM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVNLDRCQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQTtJQUNuQixDQUFDO0lBRU0sNEJBQVEsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNyQixDQUFDO0lBRU0sNEJBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1FBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUE7SUFDaEMsQ0FBQztJQUdELHlCQUFLLEdBQUw7SUFFQSxDQUFDOztJQXJDZSxtQkFBUyxHQUFhLElBQUksQ0FBQTtJQUZ6QixTQUFTO1FBRDdCLE9BQU8sQ0FBQyxXQUFXLENBQUM7T0FDQSxTQUFTLENBMEM3QjtJQUFELGdCQUFDO0NBMUNELEFBMENDLENBMUNzQyxFQUFFLENBQUMsU0FBUyxHQTBDbEQ7a0JBMUNvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzcygnR2FtZVN0YXRlJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyAgX2luc3RhbmNlOkdhbWVTdGF0ZSA9IG51bGxcblxuICAgIHByaXZhdGUgZ2FtZVN0YXRlID0gJ0dhbWVTdGFydCdcblxuICAgIHByaXZhdGUgc2NvcmUgPSAwXG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOkdhbWVTdGF0ZXtcbiAgICAgICAgaWYgKCFHYW1lU3RhdGUuX2luc3RhbmNlKXtcbiAgICAgICAgICAgIEdhbWVTdGF0ZS5faW5zdGFuY2UgPSBuZXcgR2FtZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlXG4gICAgfVxuXG4gICAgcHVibGljICBnZXRHYW1lU3RhdGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZVN0YXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyAgc2V0R2FtZVN0YXRlKGdhbWVTdGF0ZSl7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXRlID0gZ2FtZVN0YXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRTY29yZSgpe1xuICAgICAgICB0aGlzLnNjb3JlICs9IDFcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2NvcmUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmVcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRBbGwoKXtcbiAgICAgICAgdGhpcy5zY29yZSA9IDBcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAnR2FtZVN0YXJ0J1xuICAgIH1cblxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/HelloWorld.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7e2bA1PotJNYgyI/39KG+D', 'HelloWorld');
// Script/HelloWorld.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    label: {
      "default": null,
      type: cc.Label
    },
    // defaults, set visually when attaching this script to the Canvas
    text: 'Hello, World!'
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.label.string = this.text;
  },
  // called every frame
  update: function update(dt) {}
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSGVsbG9Xb3JsZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxhYmVsIiwidHlwZSIsIkxhYmVsIiwidGV4dCIsIm9uTG9hZCIsInN0cmluZyIsInVwZGF0ZSIsImR0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztFQUNMLFdBQVNELEVBQUUsQ0FBQ0UsU0FEUDtFQUdMQyxVQUFVLEVBQUU7SUFDUkMsS0FBSyxFQUFFO01BQ0gsV0FBUyxJQUROO01BRUhDLElBQUksRUFBRUwsRUFBRSxDQUFDTTtJQUZOLENBREM7SUFLUjtJQUNBQyxJQUFJLEVBQUU7RUFORSxDQUhQO0VBWUw7RUFDQUMsTUFBTSxFQUFFLGtCQUFZO0lBQ2hCLEtBQUtKLEtBQUwsQ0FBV0ssTUFBWCxHQUFvQixLQUFLRixJQUF6QjtFQUNILENBZkk7RUFpQkw7RUFDQUcsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWMsQ0FFckI7QUFwQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvLyBkZWZhdWx0cywgc2V0IHZpc3VhbGx5IHdoZW4gYXR0YWNoaW5nIHRoaXMgc2NyaXB0IHRvIHRoZSBDYW52YXNcbiAgICAgICAgdGV4dDogJ0hlbGxvLCBXb3JsZCEnXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMudGV4dDtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Obstacle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '538d4RkE7ZJGrfEoEh1grsW', 'Obstacle');
// Script/Obstacle.ts

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
var Obstacle = /** @class */ (function (_super) {
    __extends(Obstacle, _super);
    function Obstacle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 800;
        _this.speedUp = 0;
        _this.isPassed = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Obstacle.prototype.start = function () {
        console.log('=======add obs======');
    };
    Obstacle.prototype.update = function (dt) {
        if (GameState_1.default.instance.getGameState() == 'GameOver')
            return;
        this.node.y -= (this.speed + this.speedUp) * dt;
        if (this.node.y < -1140) {
            // ObstaclesPool.instance.deleteObs(this.node)
            this.node.destroy();
        }
        if (this.node.y < -700 && this.isPassed == false) {
            GameState_1.default.instance.addScore();
            this.isPassed = true;
        }
    };
    Obstacle.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Obstacle.prototype.setSpeedUp = function (speedUp) {
        this.speedUp = speedUp;
    };
    Obstacle.prototype.setPassed = function (isPassed) {
        this.isPassed = isPassed;
    };
    Obstacle.prototype.onDestroy = function () {
        console.log('=======delete obs======');
    };
    __decorate([
        property(cc.Integer)
    ], Obstacle.prototype, "speed", void 0);
    __decorate([
        property(cc.Integer)
    ], Obstacle.prototype, "speedUp", void 0);
    Obstacle = __decorate([
        ccclass
    ], Obstacle);
    return Obstacle;
}(cc.Component));
exports.default = Obstacle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvT2JzdGFjbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseUNBQW9DO0FBRzlCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBa0RDO1FBL0NHLFdBQUssR0FBVyxHQUFHLENBQUM7UUFHcEIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixjQUFRLEdBQUcsS0FBSyxDQUFBOztJQTBDcEIsQ0FBQztJQXhDRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7SUFFdkMsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxVQUFVO1lBQy9DLE9BQU07UUFFVixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUMvQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDO1lBQ3BCLDhDQUE4QztZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1NBQ3RCO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssRUFBQztZQUM3QyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtTQUN2QjtJQUNMLENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsS0FBSztRQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3RCLENBQUM7SUFFRCw2QkFBVSxHQUFWLFVBQVcsT0FBTztRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0lBQzFCLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsUUFBUTtRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0lBQzVCLENBQUM7SUFFUyw0QkFBUyxHQUFuQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBOUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7MkNBQ0Q7SUFHcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs2Q0FDRDtJQU5ILFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrRDVCO0lBQUQsZUFBQztDQWxERCxBQWtEQyxDQWxEcUMsRUFBRSxDQUFDLFNBQVMsR0FrRGpEO2tCQWxEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5pbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuL0dhbWVTdGF0ZVwiO1xuaW1wb3J0IE9ic3RhY2xlc1Bvb2wgZnJvbSBcIi4vT2JzdGFjbGVzUG9vbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic3RhY2xlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICAgIHNwZWVkOiBudW1iZXIgPSA4MDA7XG5cbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBzcGVlZFVwOiBudW1iZXIgPSAwO1xuXG4gICAgaXNQYXNzZWQgPSBmYWxzZVxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT1hZGQgb2JzPT09PT09JylcblxuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgaWYgKEdhbWVTdGF0ZS5pbnN0YW5jZS5nZXRHYW1lU3RhdGUoKSA9PSAnR2FtZU92ZXInKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICBcbiAgICAgICAgdGhpcy5ub2RlLnkgLT0gKHRoaXMuc3BlZWQgKyB0aGlzLnNwZWVkVXApICogZHRcbiAgICAgICAgaWYgKHRoaXMubm9kZS55IDwgLTExNDApe1xuICAgICAgICAgICAgLy8gT2JzdGFjbGVzUG9vbC5pbnN0YW5jZS5kZWxldGVPYnModGhpcy5ub2RlKVxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubm9kZS55IDwgLTcwMCAmJiB0aGlzLmlzUGFzc2VkID09IGZhbHNlKXtcbiAgICAgICAgICAgIEdhbWVTdGF0ZS5pbnN0YW5jZS5hZGRTY29yZSgpXG4gICAgICAgICAgICB0aGlzLmlzUGFzc2VkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0U3BlZWQoc3BlZWQpe1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWRcbiAgICB9XG5cbiAgICBzZXRTcGVlZFVwKHNwZWVkVXApe1xuICAgICAgICB0aGlzLnNwZWVkVXAgPSBzcGVlZFVwXG4gICAgfVxuXG4gICAgc2V0UGFzc2VkKGlzUGFzc2VkKXtcbiAgICAgICAgdGhpcy5pc1Bhc3NlZCA9IGlzUGFzc2VkXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT1kZWxldGUgb2JzPT09PT09JylcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ShowScore.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0d91fRGQaFD14+qRtAY4YCx', 'ShowScore');
// Script/ShowScore.ts

"use strict";
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
var ShowScore = /** @class */ (function (_super) {
    __extends(ShowScore, _super);
    function ShowScore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'Score:0';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    ShowScore.prototype.start = function () {
        this.label.string = this.text;
    };
    ShowScore.prototype.update = function (dt) {
        // console.log('======== score ======' + GameState.instance.getScore())
        this.text = 'Score:' + GameState_1.default.instance.getScore();
        this.label.string = this.text;
    };
    __decorate([
        property(cc.Label)
    ], ShowScore.prototype, "label", void 0);
    ShowScore = __decorate([
        ccclass
    ], ShowScore);
    return ShowScore;
}(cc.Component));
exports.default = ShowScore;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU2hvd1Njb3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUFvQztBQUU5QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQW9CQztRQWpCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLFVBQUksR0FBRyxTQUFTLENBQUE7O0lBZXBCLENBQUM7SUFkRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHlCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFRCwwQkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLHVFQUF1RTtRQUN2RSxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsR0FBRyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO0lBRWpDLENBQUM7SUFoQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSTtJQUhOLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FvQjdCO0lBQUQsZ0JBQUM7Q0FwQkQsQUFvQkMsQ0FwQnNDLEVBQUUsQ0FBQyxTQUFTLEdBb0JsRDtrQkFwQm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSBcIi4vR2FtZVN0YXRlXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvd1Njb3JlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgdGV4dCA9ICdTY29yZTowJ1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdGhpcy50ZXh0O1xuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJz09PT09PT09IHNjb3JlID09PT09PScgKyBHYW1lU3RhdGUuaW5zdGFuY2UuZ2V0U2NvcmUoKSlcbiAgICAgICAgdGhpcy50ZXh0ID0gJ1Njb3JlOicgKyBHYW1lU3RhdGUuaW5zdGFuY2UuZ2V0U2NvcmUoKVxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMudGV4dFxuXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ObstaclesPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb92c/OrhRIeIMMQmwikWC2', 'ObstaclesPool');
// Script/ObstaclesPool.ts

"use strict";
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ObstaclesPool = /** @class */ (function (_super) {
    __extends(ObstaclesPool, _super);
    function ObstaclesPool() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.obstaclesPool = [];
        return _this;
        // update (dt) {}
    }
    ObstaclesPool_1 = ObstaclesPool;
    Object.defineProperty(ObstaclesPool, "instance", {
        get: function () {
            if (!ObstaclesPool_1._instance) {
                ObstaclesPool_1._instance = new ObstaclesPool_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    ObstaclesPool.prototype.start = function () {
    };
    ObstaclesPool.prototype.addObs = function (obs) {
        this.obstaclesPool.push(obs);
    };
    ObstaclesPool.prototype.deleteObs = function (obs) {
        this.obstaclesPool.splice(this.obstaclesPool.findIndex(obs), 1);
    };
    ObstaclesPool.prototype.getSize = function () {
        return this.obstaclesPool.length;
    };
    var ObstaclesPool_1;
    ObstaclesPool._instance = null;
    ObstaclesPool = ObstaclesPool_1 = __decorate([
        ccclass('ObstaclesPool')
    ], ObstaclesPool);
    return ObstaclesPool;
}(cc.Component));
exports.default = ObstaclesPool;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvT2JzdGFjbGVzUG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQStCQztRQTNCRyxtQkFBYSxHQUFrQixFQUFFLENBQUE7O1FBMEJqQyxpQkFBaUI7SUFDckIsQ0FBQztzQkEvQm9CLGFBQWE7SUFNOUIsc0JBQWtCLHlCQUFRO2FBQTFCO1lBQ0ksSUFBSSxDQUFDLGVBQWEsQ0FBQyxTQUFTLEVBQUM7Z0JBQ3pCLGVBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxlQUFhLEVBQUUsQ0FBQTthQUNoRDtZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN6QixDQUFDOzs7T0FBQTtJQUVELDZCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRU0sOEJBQU0sR0FBYixVQUFjLEdBQUc7UUFDYixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBRU0saUNBQVMsR0FBaEIsVUFBaUIsR0FBRztRQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtJQUNsRSxDQUFDO0lBRU0sK0JBQU8sR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUE7SUFDcEMsQ0FBQzs7SUF6QmMsdUJBQVMsR0FBaUIsSUFBSSxDQUFBO0lBRjVCLGFBQWE7UUFEakMsT0FBTyxDQUFDLGVBQWUsQ0FBQztPQUNKLGFBQWEsQ0ErQmpDO0lBQUQsb0JBQUM7Q0EvQkQsQUErQkMsQ0EvQjBDLEVBQUUsQ0FBQyxTQUFTLEdBK0J0RDtrQkEvQm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzKCdPYnN0YWNsZXNQb29sJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic3RhY2xlc1Bvb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOk9ic3RhY2xlc1Bvb2wgPSBudWxsXG5cbiAgICBvYnN0YWNsZXNQb29sOkFycmF5PGNjLk5vZGU+ID0gW11cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6T2JzdGFjbGVzUG9vbHtcbiAgICAgICAgaWYgKCFPYnN0YWNsZXNQb29sLl9pbnN0YW5jZSl7XG4gICAgICAgICAgICBPYnN0YWNsZXNQb29sLl9pbnN0YW5jZSA9IG5ldyBPYnN0YWNsZXNQb29sKClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkT2JzKG9icyl7XG4gICAgICAgIHRoaXMub2JzdGFjbGVzUG9vbC5wdXNoKG9icylcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlT2JzKG9icyl7XG4gICAgICAgIHRoaXMub2JzdGFjbGVzUG9vbC5zcGxpY2UodGhpcy5vYnN0YWNsZXNQb29sLmZpbmRJbmRleChvYnMpLDEpXG4gICAgfVxuXG4gICAgcHVibGljIGdldFNpemUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JzdGFjbGVzUG9vbC5sZW5ndGhcbiAgICB9XG5cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/TouchControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd937dg7sphPZ4BmGM6Pl6Q8', 'TouchControl');
// Script/TouchControl.ts

"use strict";
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
var DaddyCar_1 = require("./DaddyCar");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchControl = /** @class */ (function (_super) {
    __extends(TouchControl, _super);
    function TouchControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.daddyCar = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    TouchControl.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchBegin, this);
    };
    // update (dt) {}
    TouchControl.prototype.touchBegin = function (event) {
        var pos = event.getLocation();
        if (pos.x > 1080 / 2) {
            console.log("=====click right=====");
            this.daddyCar.getComponent(DaddyCar_1.default).setPower(5);
        }
        else {
            this.daddyCar.getComponent(DaddyCar_1.default).setPower(-5);
            console.log("=====click left======");
        }
    };
    __decorate([
        property(cc.Node)
    ], TouchControl.prototype, "daddyCar", void 0);
    TouchControl = __decorate([
        ccclass
    ], TouchControl);
    return TouchControl;
}(cc.Component));
exports.default = TouchControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVG91Y2hDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFrQztBQUc1QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQTRCQztRQXpCRyxjQUFRLEdBQVksSUFBSSxDQUFDOztJQXlCN0IsQ0FBQztJQXZCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLDRCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUVwRSxDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLGlDQUFVLEdBQVYsVUFBVyxLQUF5QjtRQUNoQyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDN0IsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUM7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1lBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDbkQ7YUFDRztZQUNBLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUE7U0FDdkM7SUFFTCxDQUFDO0lBeEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ087SUFIUixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBNEJoQztJQUFELG1CQUFDO0NBNUJELEFBNEJDLENBNUJ5QyxFQUFFLENBQUMsU0FBUyxHQTRCckQ7a0JBNUJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhZGR5Q2FyIGZyb20gXCIuL0RhZGR5Q2FyXCI7XG5cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3VjaENvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZGFkZHlDYXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMudG91Y2hCZWdpbix0aGlzKVxuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cblxuICAgIHRvdWNoQmVnaW4oZXZlbnQ6Y2MuRXZlbnQuRXZlbnRUb3VjaCl7XG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXG4gICAgICAgIGlmIChwb3MueCA+IDEwODAgLyAyKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT1jbGljayByaWdodD09PT09XCIpXG4gICAgICAgICAgICB0aGlzLmRhZGR5Q2FyLmdldENvbXBvbmVudChEYWRkeUNhcikuc2V0UG93ZXIoNSlcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5kYWRkeUNhci5nZXRDb21wb25lbnQoRGFkZHlDYXIpLnNldFBvd2VyKC01KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PWNsaWNrIGxlZnQ9PT09PT1cIilcbiAgICAgICAgfVxuXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/LoginLogic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0a920Na8ClAqrJ74HdnuUmu', 'LoginLogic');
// Script/LoginLogic.ts

"use strict";
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoginLogic = /** @class */ (function (_super) {
    __extends(LoginLogic, _super);
    function LoginLogic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginLogic.prototype.start = function () {
    };
    LoginLogic.prototype.gameStart = function () {
        cc.director.loadScene('Game');
    };
    LoginLogic = __decorate([
        ccclass
    ], LoginLogic);
    return LoginLogic;
}(cc.Component));
exports.default = LoginLogic;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTG9naW5Mb2dpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDs7SUFZQSxDQUFDO0lBVEcsMEJBQUssR0FBTDtJQUVBLENBQUM7SUFFTSw4QkFBUyxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFUZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQVk5QjtJQUFELGlCQUFDO0NBWkQsQUFZQyxDQVp1QyxFQUFFLENBQUMsU0FBUyxHQVluRDtrQkFab0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbkxvZ2ljIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGdhbWVTdGFydCgpe1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWUnKVxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/NetworkManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f346N9qmNAGaDzwDOSJrFY', 'NetworkManager');
// Script/NetworkManager.ts

"use strict";
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NetworkManager = /** @class */ (function (_super) {
    __extends(NetworkManager, _super);
    function NetworkManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetworkManager_1 = NetworkManager;
    Object.defineProperty(NetworkManager, "instance", {
        get: function () {
            if (!NetworkManager_1._instance) {
                NetworkManager_1._instance = new NetworkManager_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NetworkManager.prototype.start = function () {
    };
    var NetworkManager_1;
    NetworkManager._instance = null;
    NetworkManager = NetworkManager_1 = __decorate([
        ccclass
    ], NetworkManager);
    return NetworkManager;
}(cc.Component));
exports.default = NetworkManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTmV0d29ya01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7O0lBbUJBLENBQUM7dUJBbkJvQixjQUFjO0lBSS9CLHNCQUFrQiwwQkFBUTthQUExQjtZQUNJLElBQUksQ0FBQyxnQkFBYyxDQUFDLFNBQVMsRUFBQztnQkFDMUIsZ0JBQWMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxnQkFBYyxFQUFFLENBQUM7YUFDbkQ7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDekIsQ0FBQzs7O09BQUE7SUFDRCx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLDhCQUFLLEdBQUw7SUFFQSxDQUFDOztJQWRlLHdCQUFTLEdBQWtCLElBQUksQ0FBQTtJQUY5QixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBbUJsQztJQUFELHFCQUFDO0NBbkJELEFBbUJDLENBbkIyQyxFQUFFLENBQUMsU0FBUyxHQW1CdkQ7a0JBbkJvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ldHdvcmtNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgc3RhdGljICBfaW5zdGFuY2U6TmV0d29ya01hbmFnZXIgPSBudWxsXG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOk5ldHdvcmtNYW5hZ2Vye1xuICAgICAgICBpZiAoIU5ldHdvcmtNYW5hZ2VyLl9pbnN0YW5jZSl7XG4gICAgICAgICAgICBOZXR3b3JrTWFuYWdlci5faW5zdGFuY2UgPSBuZXcgTmV0d29ya01hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VcbiAgICB9XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ObstacleControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b96b2pnPcxEQ7dbzPYgasNS', 'ObstacleControl');
// Script/ObstacleControl.ts

"use strict";
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
var Obstacle_1 = require("./Obstacle");
var ObstaclesPool_1 = require("./ObstaclesPool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ObstacleControl = /** @class */ (function (_super) {
    __extends(ObstacleControl, _super);
    function ObstacleControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deltaTime = 2;
        _this.obsPre = null;
        return _this;
        // update (dt) {
        // }
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    ObstacleControl.prototype.start = function () {
        var self = this;
        this.schedule(this.generateObs, self.deltaTime);
        console.log('========scheduled=========');
    };
    ObstacleControl.prototype.generateObs = function () {
        if (GameState_1.default.instance.getGameState() == 'GameOver') {
            console.log('========unscheduled=========');
            this.unschedule(this.generateObs);
        }
        else {
            // console.log('========unscheduled=========')
            var obs = cc.instantiate(this.obsPre);
            obs.setParent(cc.director.getScene());
            obs.y = this.node.y;
            obs.x = Math.random() * 1080 + 20;
            obs.getComponent(Obstacle_1.default).setSpeed(1600);
            ObstaclesPool_1.default.instance.addObs(obs);
        }
    };
    __decorate([
        property(cc.Integer)
    ], ObstacleControl.prototype, "deltaTime", void 0);
    __decorate([
        property(cc.Prefab)
    ], ObstacleControl.prototype, "obsPre", void 0);
    ObstacleControl = __decorate([
        ccclass
    ], ObstacleControl);
    return ObstacleControl;
}(cc.Component));
exports.default = ObstacleControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvT2JzdGFjbGVDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQyx1Q0FBa0M7QUFDbEMsaURBQTRDO0FBRXRDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBc0NDO1FBbkNHLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFHdEIsWUFBTSxHQUFjLElBQUksQ0FBQzs7UUE2QnpCLGdCQUFnQjtRQUVoQixJQUFJO0lBQ1IsQ0FBQztJQTlCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLCtCQUFLLEdBQUw7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUE7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNJLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksVUFBVSxFQUFDO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQTtZQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUNwQzthQUFJO1lBQ0QsOENBQThDO1lBQzlDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3JDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1lBQ3JDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQTtZQUNqQyxHQUFHLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDekMsdUJBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3JDO0lBR0wsQ0FBQztJQTlCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3NEQUNDO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ0s7SUFOUixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBc0NuQztJQUFELHNCQUFDO0NBdENELEFBc0NDLENBdEM0QyxFQUFFLENBQUMsU0FBUyxHQXNDeEQ7a0JBdENvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi9HYW1lU3RhdGVcIjtcbmltcG9ydCBPYnN0YWNsZSBmcm9tIFwiLi9PYnN0YWNsZVwiO1xuaW1wb3J0IE9ic3RhY2xlc1Bvb2wgZnJvbSBcIi4vT2JzdGFjbGVzUG9vbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic3RhY2xlQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBkZWx0YVRpbWU6IG51bWJlciA9IDI7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIG9ic1ByZTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZ2VuZXJhdGVPYnMsc2VsZi5kZWx0YVRpbWUpIFxuICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT1zY2hlZHVsZWQ9PT09PT09PT0nKVxuICAgIH1cblxuICAgIGdlbmVyYXRlT2JzKCl7XG4gICAgICAgIGlmIChHYW1lU3RhdGUuaW5zdGFuY2UuZ2V0R2FtZVN0YXRlKCkgPT0gJ0dhbWVPdmVyJyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT11bnNjaGVkdWxlZD09PT09PT09PScpXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5nZW5lcmF0ZU9icylcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPT09PT09PT11bnNjaGVkdWxlZD09PT09PT09PScpXG4gICAgICAgICAgICBsZXQgb2JzID0gY2MuaW5zdGFudGlhdGUodGhpcy5vYnNQcmUpXG4gICAgICAgICAgICBvYnMuc2V0UGFyZW50KGNjLmRpcmVjdG9yLmdldFNjZW5lKCkpXG4gICAgICAgICAgICBvYnMueSA9IHRoaXMubm9kZS55O1xuICAgICAgICAgICAgb2JzLnggPSBNYXRoLnJhbmRvbSgpICogMTA4MCArIDIwXG4gICAgICAgICAgICBvYnMuZ2V0Q29tcG9uZW50KE9ic3RhY2xlKS5zZXRTcGVlZCgxNjAwKVxuICAgICAgICAgICAgT2JzdGFjbGVzUG9vbC5pbnN0YW5jZS5hZGRPYnMob2JzKVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge1xuXG4gICAgLy8gfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BgControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4a3dfB82hJCO6XpoQeib59d', 'BgControl');
// Script/BgControl.ts

"use strict";
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
var BgControl = /** @class */ (function (_super) {
    __extends(BgControl, _super);
    function BgControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 0;
        return _this;
    }
    // private gameOver = false
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    BgControl.prototype.start = function () {
    };
    BgControl.prototype.update = function (dt) {
        if (GameState_1.default.instance.getGameState() == 'GameOver')
            return;
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var bgNode = _a[_i];
            bgNode.y -= this.speed * dt;
            if (bgNode.y <= -bgNode.height)
                bgNode.y += bgNode.height * 2;
        }
    };
    __decorate([
        property({ type: cc.Integer })
    ], BgControl.prototype, "speed", void 0);
    BgControl = __decorate([
        ccclass
    ], BgControl);
    return BgControl;
}(cc.Component));
exports.default = BgControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQmdDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUU5QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXlCQztRQXRCRyxXQUFLLEdBQVUsQ0FBQyxDQUFBOztJQXNCcEIsQ0FBQztJQXBCRywyQkFBMkI7SUFDM0Isd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix5QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxVQUFVO1lBQy9DLE9BQU07UUFFVixLQUFtQixVQUFrQixFQUFsQixLQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFsQixjQUFrQixFQUFsQixJQUFrQixFQUFDO1lBQWpDLElBQUksTUFBTSxTQUFBO1lBQ1gsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtZQUUzQixJQUFJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTtnQkFDMUIsTUFBTSxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtTQUNwQztJQUNMLENBQUM7SUFyQkQ7UUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBQyxDQUFDOzRDQUNiO0lBSEMsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXlCN0I7SUFBRCxnQkFBQztDQXpCRCxBQXlCQyxDQXpCc0MsRUFBRSxDQUFDLFNBQVMsR0F5QmxEO2tCQXpCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lU3RhdGUgZnJvbSBcIi4vR2FtZVN0YXRlXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmdDb250cm9sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7dHlwZTogY2MuSW50ZWdlcn0pXG4gICAgc3BlZWQ6bnVtYmVyID0gMFxuXG4gICAgLy8gcHJpdmF0ZSBnYW1lT3ZlciA9IGZhbHNlXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgaWYgKEdhbWVTdGF0ZS5pbnN0YW5jZS5nZXRHYW1lU3RhdGUoKSA9PSAnR2FtZU92ZXInKVxuICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgZm9yIChsZXQgYmdOb2RlIG9mIHRoaXMubm9kZS5jaGlsZHJlbil7XG4gICAgICAgICAgICBiZ05vZGUueSAtPSB0aGlzLnNwZWVkICogZHRcblxuICAgICAgICAgICAgaWYgKGJnTm9kZS55IDw9IC1iZ05vZGUuaGVpZ2h0KVxuICAgICAgICAgICAgICAgIGJnTm9kZS55ICs9IGJnTm9kZS5oZWlnaHQgKiAyXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/DaddyCar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '295cd/FfMBK+Lwdt8MG77kZ', 'DaddyCar');
// Script/DaddyCar.ts

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
var GameLogic_1 = require("./GameLogic");
var GameState_1 = require("./GameState");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DaddyCar = /** @class */ (function (_super) {
    __extends(DaddyCar, _super);
    function DaddyCar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.count = 0;
        _this.power = 0;
        _this.backForce = 0.0;
        _this.gameLogic = null;
        return _this;
    }
    DaddyCar.prototype.start = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    DaddyCar.prototype.onCollisionEnter = function (other) {
        this.count += 1;
        this.gameLogic.getComponent(GameLogic_1.default).gameOver();
        console.log("=======collision =======" + this.count);
    };
    DaddyCar.prototype.update = function (dt) {
        if (GameState_1.default.instance.getGameState() == 'GameOver')
            return;
        if (this.power > 0)
            this.power -= this.backForce;
        if (this.power < 0)
            this.power += this.backForce;
        this.node.x += this.power;
        if (this.node.x > (1080 / 2 - this.node.width / 2))
            this.node.x = 1080 / 2 - this.node.width / 2;
        if (this.node.x < -1080 / 2 + this.node.width / 2)
            this.node.x = -1080 / 2 + this.node.width / 2;
    };
    DaddyCar.prototype.setPower = function (power) {
        this.power = power;
    };
    __decorate([
        property(cc.Float)
    ], DaddyCar.prototype, "backForce", void 0);
    __decorate([
        property(cc.Node)
    ], DaddyCar.prototype, "gameLogic", void 0);
    DaddyCar = __decorate([
        ccclass
    ], DaddyCar);
    return DaddyCar;
}(cc.Component));
exports.default = DaddyCar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvRGFkZHlDYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseUNBQW9DO0FBQ3BDLHlDQUFvQztBQUU5QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZDQztRQTNDRyxXQUFLLEdBQUcsQ0FBQyxDQUFBO1FBRVQsV0FBSyxHQUFHLENBQUMsQ0FBQTtRQUdULGVBQVMsR0FBRyxHQUFHLENBQUE7UUFHZixlQUFTLEdBQVcsSUFBSSxDQUFBOztJQW1DNUIsQ0FBQztJQWpDRyx3QkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7SUFFcEQsQ0FBQztJQUVELG1DQUFnQixHQUFoQixVQUFpQixLQUFLO1FBQ2xCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFBO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksVUFBVTtZQUMvQyxPQUFNO1FBRVYsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7WUFDZCxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUE7UUFFaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7WUFDZCxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUE7UUFFaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUV6QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7UUFDaEQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO0lBRXJELENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsS0FBSztRQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3RCLENBQUM7SUFyQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDSjtJQUdmO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ007SUFWUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkM1QjtJQUFELGVBQUM7Q0E3Q0QsQUE2Q0MsQ0E3Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBNkNqRDtrQkE3Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVMb2dpYyBmcm9tIFwiLi9HYW1lTG9naWNcIjtcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSBcIi4vR2FtZVN0YXRlXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFkZHlDYXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgY291bnQgPSAwXG4gICAgXG4gICAgcG93ZXIgPSAwXG5cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgYmFja0ZvcmNlID0gMC4wXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBnYW1lTG9naWM6Y2MuTm9kZSA9IG51bGxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlXG5cbiAgICB9XG5cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyKXtcbiAgICAgICAgdGhpcy5jb3VudCArPSAxXG4gICAgICAgIHRoaXMuZ2FtZUxvZ2ljLmdldENvbXBvbmVudChHYW1lTG9naWMpLmdhbWVPdmVyKClcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09Y29sbGlzaW9uID09PT09PT1cIiArIHRoaXMuY291bnQpXG4gICAgfVxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBpZiAoR2FtZVN0YXRlLmluc3RhbmNlLmdldEdhbWVTdGF0ZSgpID09ICdHYW1lT3ZlcicpXG4gICAgICAgICAgICByZXR1cm5cblxuICAgICAgICBpZiAodGhpcy5wb3dlciA+IDAgKVxuICAgICAgICAgICAgdGhpcy5wb3dlciAtPSB0aGlzLmJhY2tGb3JjZVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucG93ZXIgPCAwKVxuICAgICAgICAgICAgdGhpcy5wb3dlciArPSB0aGlzLmJhY2tGb3JjZVxuXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMucG93ZXJcblxuICAgICAgICBpZiAodGhpcy5ub2RlLnggPiAoMTA4MCAvIDIgLSB0aGlzLm5vZGUud2lkdGggLyAyKSlcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gMTA4MCAvIDIgLSB0aGlzLm5vZGUud2lkdGggLyAyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA8IC0xMDgwIC8gMiArIHRoaXMubm9kZS53aWR0aCAvIDIpXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IC0xMDgwIC8gMiArIHRoaXMubm9kZS53aWR0aCAvIDJcblxuICAgIH1cblxuICAgIHNldFBvd2VyKHBvd2VyKXtcbiAgICAgICAgdGhpcy5wb3dlciA9IHBvd2VyXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

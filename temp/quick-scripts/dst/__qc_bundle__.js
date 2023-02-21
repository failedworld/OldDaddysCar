
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYWRkeUNhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix5Q0FBb0M7QUFDcEMseUNBQW9DO0FBRTlCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNkNDO1FBM0NHLFdBQUssR0FBRyxDQUFDLENBQUE7UUFFVCxXQUFLLEdBQUcsQ0FBQyxDQUFBO1FBR1QsZUFBUyxHQUFHLEdBQUcsQ0FBQTtRQUdmLGVBQVMsR0FBVyxJQUFJLENBQUE7O0lBbUM1QixDQUFDO0lBakNHLHdCQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtJQUVwRCxDQUFDO0lBRUQsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUs7UUFDbEIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUE7UUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDeEQsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxVQUFVO1lBQy9DLE9BQU07UUFFVixJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUNkLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUVoQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUNkLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUVoQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFBO1FBRXpCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNoRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7SUFFckQsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztJQXJDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNKO0lBR2Y7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQVZQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2QzVCO0lBQUQsZUFBQztDQTdDRCxBQTZDQyxDQTdDcUMsRUFBRSxDQUFDLFNBQVMsR0E2Q2pEO2tCQTdDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHYW1lTG9naWMgZnJvbSBcIi4vR2FtZUxvZ2ljXCI7XHJcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSBcIi4vR2FtZVN0YXRlXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhZGR5Q2FyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb3VudCA9IDBcclxuICAgIFxyXG4gICAgcG93ZXIgPSAwXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgYmFja0ZvcmNlID0gMC4wXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnYW1lTG9naWM6Y2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIpe1xyXG4gICAgICAgIHRoaXMuY291bnQgKz0gMVxyXG4gICAgICAgIHRoaXMuZ2FtZUxvZ2ljLmdldENvbXBvbmVudChHYW1lTG9naWMpLmdhbWVPdmVyKClcclxuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT1jb2xsaXNpb24gPT09PT09PVwiICsgdGhpcy5jb3VudClcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYgKEdhbWVTdGF0ZS5pbnN0YW5jZS5nZXRHYW1lU3RhdGUoKSA9PSAnR2FtZU92ZXInKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucG93ZXIgPiAwIClcclxuICAgICAgICAgICAgdGhpcy5wb3dlciAtPSB0aGlzLmJhY2tGb3JjZVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnBvd2VyIDwgMClcclxuICAgICAgICAgICAgdGhpcy5wb3dlciArPSB0aGlzLmJhY2tGb3JjZVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnBvd2VyXHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA+ICgxMDgwIC8gMiAtIHRoaXMubm9kZS53aWR0aCAvIDIpKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IDEwODAgLyAyIC0gdGhpcy5ub2RlLndpZHRoIC8gMlxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA8IC0xMDgwIC8gMiArIHRoaXMubm9kZS53aWR0aCAvIDIpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gLTEwODAgLyAyICsgdGhpcy5ub2RlLndpZHRoIC8gMlxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRQb3dlcihwb3dlcil7XHJcbiAgICAgICAgdGhpcy5wb3dlciA9IHBvd2VyXHJcbiAgICB9XHJcbn1cclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfcmV2ZXJzZWRfcm90YXRlQnkuanMiXSwibmFtZXMiOlsiY2MiLCJSb3RhdGVCeSIsIl9yZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxRQUFILENBQVlDLFFBQVosR0FBdUIsSUFBdkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGlzIHNjcmlwdCBpcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBieSBDb2NvcyBDcmVhdG9yIGFuZCBpcyBvbmx5IHVzZWQgZm9yIHByb2plY3RzIGNvbXBhdGlibGUgd2l0aCB2Mi4xLjAvdjIuMS4xL3YyLjMuMC92Mi4zLjEvdjIuMy4yIHZlcnNpb25zLlxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cbiAqIElmIHlvdSBkb24ndCB1c2UgY2MuQWN0aW9uIGluIHlvdXIgcHJvamVjdCwgeW91IGNhbiBkZWxldGUgdGhpcyBzY3JpcHQgZGlyZWN0bHkuXG4gKiBJZiB5b3VyIHByb2plY3QgaXMgaG9zdGVkIGluIFZDUyBzdWNoIGFzIGdpdCwgc3VibWl0IHRoaXMgc2NyaXB0IHRvZ2V0aGVyLlxuICpcbiAqIOatpOiEmuacrOeUsSBDb2NvcyBDcmVhdG9yIOiHquWKqOeUn+aIkO+8jOS7heeUqOS6juWFvOWuuSB2Mi4xLjAvdjIuMS4xL3YyLjMuMC92Mi4zLjEvdjIuMy4yIOeJiOacrOeahOW3peeoi++8jFxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXG4gKiDlpoLmnpzkvaDnmoTpobnnm67kuK3msqHnlKjliLAgQWN0aW9u77yM5Y+v55u05o6l5Yig6Zmk6K+l6ISa5pys44CCXG4gKiDlpoLmnpzkvaDnmoTpobnnm67mnInmiZjnrqHkuo4gZ2l0IOetieeJiOacrOW6k++8jOivt+WwhuatpOiEmuacrOS4gOW5tuS4iuS8oOOAglxuICovXG5cbmNjLlJvdGF0ZUJ5Ll9yZXZlcnNlID0gdHJ1ZTtcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lU3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBdUMsNkJBQVk7SUFBbkQ7UUFBQSxxRUEwQ0M7UUF0Q1csZUFBUyxHQUFHLFdBQVcsQ0FBQTtRQUV2QixXQUFLLEdBQUcsQ0FBQyxDQUFBOztRQW1DakIsaUJBQWlCO0lBQ3JCLENBQUM7a0JBMUNvQixTQUFTO0lBUTFCLHNCQUFrQixxQkFBUTthQUExQjtZQUNJLElBQUksQ0FBQyxXQUFTLENBQUMsU0FBUyxFQUFDO2dCQUNyQixXQUFTLENBQUMsU0FBUyxHQUFHLElBQUksV0FBUyxFQUFFLENBQUM7YUFDekM7WUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7UUFDekIsQ0FBQzs7O09BQUE7SUFFTyxnQ0FBWSxHQUFwQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU8sZ0NBQVksR0FBcEIsVUFBcUIsU0FBUztRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRU0sNEJBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFBO0lBQ25CLENBQUM7SUFFTSw0QkFBUSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFFTSw0QkFBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQTtJQUNoQyxDQUFDO0lBR0QseUJBQUssR0FBTDtJQUVBLENBQUM7O0lBckNlLG1CQUFTLEdBQWEsSUFBSSxDQUFBO0lBRnpCLFNBQVM7UUFEN0IsT0FBTyxDQUFDLFdBQVcsQ0FBQztPQUNBLFNBQVMsQ0EwQzdCO0lBQUQsZ0JBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQ3NDLEVBQUUsQ0FBQyxTQUFTLEdBMENsRDtrQkExQ29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0dhbWVTdGF0ZScpXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTdGF0ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgIF9pbnN0YW5jZTpHYW1lU3RhdGUgPSBudWxsXHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lU3RhdGUgPSAnR2FtZVN0YXJ0J1xyXG5cclxuICAgIHByaXZhdGUgc2NvcmUgPSAwXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTpHYW1lU3RhdGV7XHJcbiAgICAgICAgaWYgKCFHYW1lU3RhdGUuX2luc3RhbmNlKXtcclxuICAgICAgICAgICAgR2FtZVN0YXRlLl9pbnN0YW5jZSA9IG5ldyBHYW1lU3RhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljICBnZXRHYW1lU3RhdGUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljICBzZXRHYW1lU3RhdGUoZ2FtZVN0YXRlKXtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0ZSA9IGdhbWVTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkU2NvcmUoKXtcclxuICAgICAgICB0aGlzLnNjb3JlICs9IDFcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2NvcmUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29yZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNldEFsbCgpe1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwXHJcbiAgICAgICAgdGhpcy5nYW1lU3RhdGUgPSAnR2FtZVN0YXJ0J1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIZWxsb1dvcmxkLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGFiZWwiLCJ0eXBlIiwiTGFiZWwiLCJ0ZXh0Iiwib25Mb2FkIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxLQUFLLEVBQUU7TUFDSCxXQUFTLElBRE47TUFFSEMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRk4sQ0FEQztJQUtSO0lBQ0FDLElBQUksRUFBRTtFQU5FLENBSFA7RUFZTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsS0FBS0osS0FBTCxDQUFXSyxNQUFYLEdBQW9CLEtBQUtGLElBQXpCO0VBQ0gsQ0FmSTtFQWlCTDtFQUNBRyxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYyxDQUVyQjtBQXBCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBkZWZhdWx0cywgc2V0IHZpc3VhbGx5IHdoZW4gYXR0YWNoaW5nIHRoaXMgc2NyaXB0IHRvIHRoZSBDYW52YXNcclxuICAgICAgICB0ZXh0OiAnSGVsbG8sIFdvcmxkISdcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMudGV4dDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOZXR3b3JrTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDs7SUFtQkEsQ0FBQzt1QkFuQm9CLGNBQWM7SUFJL0Isc0JBQWtCLDBCQUFRO2FBQTFCO1lBQ0ksSUFBSSxDQUFDLGdCQUFjLENBQUMsU0FBUyxFQUFDO2dCQUMxQixnQkFBYyxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFjLEVBQUUsQ0FBQzthQUNuRDtZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN6QixDQUFDOzs7T0FBQTtJQUNELHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsOEJBQUssR0FBTDtJQUVBLENBQUM7O0lBZGUsd0JBQVMsR0FBa0IsSUFBSSxDQUFBO0lBRjlCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FtQmxDO0lBQUQscUJBQUM7Q0FuQkQsQUFtQkMsQ0FuQjJDLEVBQUUsQ0FBQyxTQUFTLEdBbUJ2RDtrQkFuQm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0d29ya01hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgIF9pbnN0YW5jZTpOZXR3b3JrTWFuYWdlciA9IG51bGxcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6TmV0d29ya01hbmFnZXJ7XG4gICAgICAgIGlmICghTmV0d29ya01hbmFnZXIuX2luc3RhbmNlKXtcbiAgICAgICAgICAgIE5ldHdvcmtNYW5hZ2VyLl9pbnN0YW5jZSA9IG5ldyBOZXR3b3JrTWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVxuICAgIH1cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lTG9naWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseUNBQW9DO0FBRTlCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBb0RDO1FBbERHLGdCQUFVLEdBQUcsS0FBSyxDQUFBO1FBR2xCLG1CQUFhLEdBQVcsSUFBSSxDQUFBOztRQThDNUIsaUJBQWlCO0lBQ3JCLENBQUM7SUE3Q0csMEJBQU0sR0FBTjtRQUNJLFNBQVM7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFFckMsQ0FBQztJQUVELHlCQUFLLEdBQUw7SUFJQSxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNJLE9BQU87UUFDUixtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ2hDLElBQUksb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtRQUVoRixJQUFJLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQy9DLFFBQVEsQ0FBQyxNQUFNLEdBQUcsUUFBUSxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQzdELHNEQUFzRDtRQUVuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVNLDZCQUFTLEdBQWhCO1FBQ0ksbUJBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2pDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFTSw4QkFBVSxHQUFqQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtRQUNyQyxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7UUFDakMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUVNLDZCQUFTLEdBQWhCO1FBQ0ksb0NBQW9DO1FBQ3BDLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUE1Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDVTtJQUxYLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FvRDdCO0lBQUQsZ0JBQUM7Q0FwREQsQUFvREMsQ0FwRHNDLEVBQUUsQ0FBQyxTQUFTLEdBb0RsRDtrQkFwRG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuL0dhbWVTdGF0ZVwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTG9naWMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIGlzR2FtZU92ZXIgPSBmYWxzZVxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZ2FtZW92ZXJQYW5lbDpjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIC8vIOe7k+adn+mdouadv+makOiXj1xyXG4gICAgICAgIHRoaXMuZ2FtZW92ZXJQYW5lbC5hY3RpdmUgPSBmYWxzZVxyXG5cclxuICAgIH1cclxuIFxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZU92ZXIoKXtcclxuICAgICAgICAvLyDmuLjmiI/nu5PmnZ9cclxuICAgICAgIEdhbWVTdGF0ZS5pbnN0YW5jZS5zZXRHYW1lU3RhdGUoJ0dhbWVPdmVyJylcclxuICAgICAgIHRoaXMuZ2FtZW92ZXJQYW5lbC5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICBsZXQgZ2FtZU92ZXJTY29yZUxibE5vZGUgPSB0aGlzLmdhbWVvdmVyUGFuZWwuZ2V0Q2hpbGRCeU5hbWUoJ0dhbWVPdmVyU2NvcmVMYmwnKVxyXG4gICAgXHJcbiAgICAgICBsZXQgc2NvcmVsYmwgPSBnYW1lT3ZlclNjb3JlTGJsTm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICBjb25zb2xlLmxvZygnc2NvcmUgPT09PT09PSAnICsgc2NvcmVsYmwuc3RyaW5nKVxyXG4gICAgICAgc2NvcmVsYmwuc3RyaW5nID0gJ1Njb3JlOicgKyBHYW1lU3RhdGUuaW5zdGFuY2UuZ2V0U2NvcmUoKVxyXG4gICAgLy8gICAgLnN0cmluZyA9ICdTY29yZTonICsgR2FtZVN0YXRlLmluc3RhbmNlLmdldFNjb3JlXHJcblxyXG4gICAgICAgY29uc29sZS5sb2coJz09PT09PT09PWdhbWUgb3ZlciA9PT09PT09PT09PT09JylcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2FtZVJlc2V0KCl7XHJcbiAgICAgICAgR2FtZVN0YXRlLmluc3RhbmNlLnJlc2V0QWxsKClcclxuICAgICAgICB0aGlzLmdhbWVvdmVyUGFuZWwuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWUnKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnYW1lR2l2ZXVwKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dhbWUgT3Zlcj09PT09IGdpdmUgdXAnKVxyXG4gICAgICAgIEdhbWVTdGF0ZS5pbnN0YW5jZS5yZXNldEFsbCgpXHJcbiAgICAgICAgdGhpcy5nYW1lb3ZlclBhbmVsLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdMb2dpbicpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdhbWVTdGFydCgpe1xyXG4gICAgICAgIC8vIHRoaXMuZ2FtZW92ZXJQYW5lbC5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZScpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPYnN0YWNsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix5Q0FBb0M7QUFHOUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrREM7UUEvQ0csV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUdwQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGNBQVEsR0FBRyxLQUFLLENBQUE7O0lBMENwQixDQUFDO0lBeENHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtJQUV2QyxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLFVBQVU7WUFDL0MsT0FBTTtRQUVWLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQy9DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUM7WUFDcEIsOENBQThDO1lBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7U0FDdEI7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxFQUFDO1lBQzdDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztJQUVELDZCQUFVLEdBQVYsVUFBVyxPQUFPO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDMUIsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxRQUFRO1FBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7SUFDNUIsQ0FBQztJQUVTLDRCQUFTLEdBQW5CO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUE5Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsyQ0FDRDtJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzZDQUNEO0lBTkgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtENUI7SUFBRCxlQUFDO0NBbERELEFBa0RDLENBbERxQyxFQUFFLENBQUMsU0FBUyxHQWtEakQ7a0JBbERvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi9HYW1lU3RhdGVcIjtcclxuaW1wb3J0IE9ic3RhY2xlc1Bvb2wgZnJvbSBcIi4vT2JzdGFjbGVzUG9vbFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnN0YWNsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBzcGVlZDogbnVtYmVyID0gODAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgc3BlZWRVcDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBpc1Bhc3NlZCA9IGZhbHNlXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09YWRkIG9icz09PT09PScpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZiAoR2FtZVN0YXRlLmluc3RhbmNlLmdldEdhbWVTdGF0ZSgpID09ICdHYW1lT3ZlcicpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUueSAtPSAodGhpcy5zcGVlZCArIHRoaXMuc3BlZWRVcCkgKiBkdFxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueSA8IC0xMTQwKXtcclxuICAgICAgICAgICAgLy8gT2JzdGFjbGVzUG9vbC5pbnN0YW5jZS5kZWxldGVPYnModGhpcy5ub2RlKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ub2RlLnkgPCAtNzAwICYmIHRoaXMuaXNQYXNzZWQgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBHYW1lU3RhdGUuaW5zdGFuY2UuYWRkU2NvcmUoKVxyXG4gICAgICAgICAgICB0aGlzLmlzUGFzc2VkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGVlZChzcGVlZCl7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkXHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3BlZWRVcChzcGVlZFVwKXtcclxuICAgICAgICB0aGlzLnNwZWVkVXAgPSBzcGVlZFVwXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFzc2VkKGlzUGFzc2VkKXtcclxuICAgICAgICB0aGlzLmlzUGFzc2VkID0gaXNQYXNzZWRcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09ZGVsZXRlIG9icz09PT09PScpXHJcbiAgICB9XHJcbn1cclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxMb2dpbkxvZ2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEOztJQVlBLENBQUM7SUFURywwQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVNLDhCQUFTLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQVRnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBWTlCO0lBQUQsaUJBQUM7Q0FaRCxBQVlDLENBWnVDLEVBQUUsQ0FBQyxTQUFTLEdBWW5EO2tCQVpvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTG9naWMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2FtZVN0YXJ0KCl7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZScpXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPYnN0YWNsZXNQb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBK0JDO1FBM0JHLG1CQUFhLEdBQWtCLEVBQUUsQ0FBQTs7UUEwQmpDLGlCQUFpQjtJQUNyQixDQUFDO3NCQS9Cb0IsYUFBYTtJQU05QixzQkFBa0IseUJBQVE7YUFBMUI7WUFDSSxJQUFJLENBQUMsZUFBYSxDQUFDLFNBQVMsRUFBQztnQkFDekIsZUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLGVBQWEsRUFBRSxDQUFBO2FBQ2hEO1lBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsNkJBQUssR0FBTDtJQUVBLENBQUM7SUFFTSw4QkFBTSxHQUFiLFVBQWMsR0FBRztRQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFFTSxpQ0FBUyxHQUFoQixVQUFpQixHQUFHO1FBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFFTSwrQkFBTyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQTtJQUNwQyxDQUFDOztJQXpCYyx1QkFBUyxHQUFpQixJQUFJLENBQUE7SUFGNUIsYUFBYTtRQURqQyxPQUFPLENBQUMsZUFBZSxDQUFDO09BQ0osYUFBYSxDQStCakM7SUFBRCxvQkFBQztDQS9CRCxBQStCQyxDQS9CMEMsRUFBRSxDQUFDLFNBQVMsR0ErQnREO2tCQS9Cb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3MoJ09ic3RhY2xlc1Bvb2wnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzdGFjbGVzUG9vbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6T2JzdGFjbGVzUG9vbCA9IG51bGxcblxuICAgIG9ic3RhY2xlc1Bvb2w6QXJyYXk8Y2MuTm9kZT4gPSBbXVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTpPYnN0YWNsZXNQb29se1xuICAgICAgICBpZiAoIU9ic3RhY2xlc1Bvb2wuX2luc3RhbmNlKXtcbiAgICAgICAgICAgIE9ic3RhY2xlc1Bvb2wuX2luc3RhbmNlID0gbmV3IE9ic3RhY2xlc1Bvb2woKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVxuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRPYnMob2JzKXtcbiAgICAgICAgdGhpcy5vYnN0YWNsZXNQb29sLnB1c2gob2JzKVxuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGVPYnMob2JzKXtcbiAgICAgICAgdGhpcy5vYnN0YWNsZXNQb29sLnNwbGljZSh0aGlzLm9ic3RhY2xlc1Bvb2wuZmluZEluZGV4KG9icyksMSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2l6ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5vYnN0YWNsZXNQb29sLmxlbmd0aFxuICAgIH1cblxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPYnN0YWNsZUNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLHVDQUFrQztBQUNsQyxpREFBNEM7QUFFdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUFzQ0M7UUFuQ0csZUFBUyxHQUFXLENBQUMsQ0FBQztRQUd0QixZQUFNLEdBQWMsSUFBSSxDQUFDOztRQTZCekIsZ0JBQWdCO1FBRWhCLElBQUk7SUFDUixDQUFDO0lBOUJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsK0JBQUssR0FBTDtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxVQUFVLEVBQUM7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO1lBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQ3BDO2FBQUk7WUFDRCw4Q0FBOEM7WUFDOUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDckMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7WUFDckMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBO1lBQ2pDLEdBQUcsQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN6Qyx1QkFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDckM7SUFHTCxDQUFDO0lBOUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7c0RBQ0M7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDSztJQU5SLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FzQ25DO0lBQUQsc0JBQUM7Q0F0Q0QsQUFzQ0MsQ0F0QzRDLEVBQUUsQ0FBQyxTQUFTLEdBc0N4RDtrQkF0Q29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuL0dhbWVTdGF0ZVwiO1xyXG5pbXBvcnQgT2JzdGFjbGUgZnJvbSBcIi4vT2JzdGFjbGVcIjtcclxuaW1wb3J0IE9ic3RhY2xlc1Bvb2wgZnJvbSBcIi4vT2JzdGFjbGVzUG9vbFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnN0YWNsZUNvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgZGVsdGFUaW1lOiBudW1iZXIgPSAyO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBvYnNQcmU6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5nZW5lcmF0ZU9icyxzZWxmLmRlbHRhVGltZSkgXHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09c2NoZWR1bGVkPT09PT09PT09JylcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZU9icygpe1xyXG4gICAgICAgIGlmIChHYW1lU3RhdGUuaW5zdGFuY2UuZ2V0R2FtZVN0YXRlKCkgPT0gJ0dhbWVPdmVyJyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PXVuc2NoZWR1bGVkPT09PT09PT09JylcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ2VuZXJhdGVPYnMpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc9PT09PT09PXVuc2NoZWR1bGVkPT09PT09PT09JylcclxuICAgICAgICAgICAgbGV0IG9icyA9IGNjLmluc3RhbnRpYXRlKHRoaXMub2JzUHJlKVxyXG4gICAgICAgICAgICBvYnMuc2V0UGFyZW50KGNjLmRpcmVjdG9yLmdldFNjZW5lKCkpXHJcbiAgICAgICAgICAgIG9icy55ID0gdGhpcy5ub2RlLnk7XHJcbiAgICAgICAgICAgIG9icy54ID0gTWF0aC5yYW5kb20oKSAqIDEwODAgKyAyMFxyXG4gICAgICAgICAgICBvYnMuZ2V0Q29tcG9uZW50KE9ic3RhY2xlKS5zZXRTcGVlZCgxNjAwKVxyXG4gICAgICAgICAgICBPYnN0YWNsZXNQb29sLmluc3RhbmNlLmFkZE9icyhvYnMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUb3VjaENvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBRzVCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBNEJDO1FBekJHLGNBQVEsR0FBWSxJQUFJLENBQUM7O0lBeUI3QixDQUFDO0lBdkJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFBO0lBRXBFLENBQUM7SUFFRCxpQkFBaUI7SUFFakIsaUNBQVUsR0FBVixVQUFXLEtBQXlCO1FBQ2hDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUM3QixJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUE7WUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNuRDthQUNHO1lBQ0EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtTQUN2QztJQUVMLENBQUM7SUF4QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDTztJQUhSLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E0QmhDO0lBQUQsbUJBQUM7Q0E1QkQsQUE0QkMsQ0E1QnlDLEVBQUUsQ0FBQyxTQUFTLEdBNEJyRDtrQkE1Qm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGFkZHlDYXIgZnJvbSBcIi4vRGFkZHlDYXJcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkYWRkeUNhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLnRvdWNoQmVnaW4sdGhpcylcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICB0b3VjaEJlZ2luKGV2ZW50OmNjLkV2ZW50LkV2ZW50VG91Y2gpe1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgaWYgKHBvcy54ID4gMTA4MCAvIDIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09Y2xpY2sgcmlnaHQ9PT09PVwiKVxyXG4gICAgICAgICAgICB0aGlzLmRhZGR5Q2FyLmdldENvbXBvbmVudChEYWRkeUNhcikuc2V0UG93ZXIoNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5kYWRkeUNhci5nZXRDb21wb25lbnQoRGFkZHlDYXIpLnNldFBvd2VyKC01KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09Y2xpY2sgbGVmdD09PT09PVwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCZ0NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBRTlCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBeUJDO1FBdEJHLFdBQUssR0FBVSxDQUFDLENBQUE7O0lBc0JwQixDQUFDO0lBcEJHLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHlCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLFVBQVU7WUFDL0MsT0FBTTtRQUVWLEtBQW1CLFVBQWtCLEVBQWxCLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUM7WUFBakMsSUFBSSxNQUFNLFNBQUE7WUFDWCxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO1lBRTNCLElBQUksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2dCQUMxQixNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1NBQ3BDO0lBQ0wsQ0FBQztJQXJCRDtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFDLENBQUM7NENBQ2I7SUFIQyxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBeUI3QjtJQUFELGdCQUFDO0NBekJELEFBeUJDLENBekJzQyxFQUFFLENBQUMsU0FBUyxHQXlCbEQ7a0JBekJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi9HYW1lU3RhdGVcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZ0NvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5JbnRlZ2VyfSlcbiAgICBzcGVlZDpudW1iZXIgPSAwXG5cbiAgICAvLyBwcml2YXRlIGdhbWVPdmVyID0gZmFsc2VcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBpZiAoR2FtZVN0YXRlLmluc3RhbmNlLmdldEdhbWVTdGF0ZSgpID09ICdHYW1lT3ZlcicpXG4gICAgICAgICAgICByZXR1cm5cblxuICAgICAgICBmb3IgKGxldCBiZ05vZGUgb2YgdGhpcy5ub2RlLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIGJnTm9kZS55IC09IHRoaXMuc3BlZWQgKiBkdFxuXG4gICAgICAgICAgICBpZiAoYmdOb2RlLnkgPD0gLWJnTm9kZS5oZWlnaHQpXG4gICAgICAgICAgICAgICAgYmdOb2RlLnkgKz0gYmdOb2RlLmhlaWdodCAqIDJcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTaG93U2NvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQW9DO0FBRTlCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBb0JDO1FBakJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFHLFNBQVMsQ0FBQTs7SUFlcEIsQ0FBQztJQWRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sdUVBQXVFO1FBQ3ZFLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7SUFFakMsQ0FBQztJQWhCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNJO0lBSE4sU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQW9CN0I7SUFBRCxnQkFBQztDQXBCRCxBQW9CQyxDQXBCc0MsRUFBRSxDQUFDLFNBQVMsR0FvQmxEO2tCQXBCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi9HYW1lU3RhdGVcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93U2NvcmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICB0ZXh0ID0gJ1Njb3JlOjAnXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLnRleHQ7XG4gICAgfVxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnPT09PT09PT0gc2NvcmUgPT09PT09JyArIEdhbWVTdGF0ZS5pbnN0YW5jZS5nZXRTY29yZSgpKVxuICAgICAgICB0aGlzLnRleHQgPSAnU2NvcmU6JyArIEdhbWVTdGF0ZS5pbnN0YW5jZS5nZXRTY29yZSgpXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdGhpcy50ZXh0XG5cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

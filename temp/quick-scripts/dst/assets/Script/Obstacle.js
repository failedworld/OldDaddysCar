
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
"use strict";
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
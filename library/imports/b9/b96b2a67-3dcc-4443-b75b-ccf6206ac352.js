"use strict";
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
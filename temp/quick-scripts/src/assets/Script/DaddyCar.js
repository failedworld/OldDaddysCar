"use strict";
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
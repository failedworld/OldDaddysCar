"use strict";
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
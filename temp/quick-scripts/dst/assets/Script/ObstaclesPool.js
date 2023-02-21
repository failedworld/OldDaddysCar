
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
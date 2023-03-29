
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
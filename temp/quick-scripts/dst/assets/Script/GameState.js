
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
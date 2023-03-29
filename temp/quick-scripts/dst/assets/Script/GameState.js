
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
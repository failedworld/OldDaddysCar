"use strict";
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
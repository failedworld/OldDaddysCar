"use strict";
cc._RF.push(module, '0d91fRGQaFD14+qRtAY4YCx', 'ShowScore');
// Script/ShowScore.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShowScore = /** @class */ (function (_super) {
    __extends(ShowScore, _super);
    function ShowScore() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'Score:0';
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    ShowScore.prototype.start = function () {
        this.label.string = this.text;
    };
    ShowScore.prototype.update = function (dt) {
        // console.log('======== score ======' + GameState.instance.getScore())
        this.text = 'Score:' + GameState_1.default.instance.getScore();
        this.label.string = this.text;
    };
    __decorate([
        property(cc.Label)
    ], ShowScore.prototype, "label", void 0);
    ShowScore = __decorate([
        ccclass
    ], ShowScore);
    return ShowScore;
}(cc.Component));
exports.default = ShowScore;

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ShowScore.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxTaG93U2NvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQW9DO0FBRTlCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBb0JDO1FBakJHLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsVUFBSSxHQUFHLFNBQVMsQ0FBQTs7SUFlcEIsQ0FBQztJQWRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sdUVBQXVFO1FBQ3ZFLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxHQUFHLG1CQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7SUFFakMsQ0FBQztJQWhCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzRDQUNJO0lBSE4sU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQW9CN0I7SUFBRCxnQkFBQztDQXBCRCxBQW9CQyxDQXBCc0MsRUFBRSxDQUFDLFNBQVMsR0FvQmxEO2tCQXBCb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi9HYW1lU3RhdGVcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93U2NvcmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICB0ZXh0ID0gJ1Njb3JlOjAnXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLnRleHQ7XG4gICAgfVxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnPT09PT09PT0gc2NvcmUgPT09PT09JyArIEdhbWVTdGF0ZS5pbnN0YW5jZS5nZXRTY29yZSgpKVxuICAgICAgICB0aGlzLnRleHQgPSAnU2NvcmU6JyArIEdhbWVTdGF0ZS5pbnN0YW5jZS5nZXRTY29yZSgpXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdGhpcy50ZXh0XG5cbiAgICB9XG59XG4iXX0=
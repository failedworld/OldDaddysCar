
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/BgControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4a3dfB82hJCO6XpoQeib59d', 'BgControl');
// Script/BgControl.ts

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
var BgControl = /** @class */ (function (_super) {
    __extends(BgControl, _super);
    function BgControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 0;
        return _this;
    }
    // private gameOver = false
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    BgControl.prototype.start = function () {
    };
    BgControl.prototype.update = function (dt) {
        if (GameState_1.default.instance.getGameState() == 'GameOver')
            return;
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var bgNode = _a[_i];
            bgNode.y -= this.speed * dt;
            if (bgNode.y <= -bgNode.height)
                bgNode.y += bgNode.height * 2;
        }
    };
    __decorate([
        property({ type: cc.Integer })
    ], BgControl.prototype, "speed", void 0);
    BgControl = __decorate([
        ccclass
    ], BgControl);
    return BgControl;
}(cc.Component));
exports.default = BgControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxCZ0NvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBRTlCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBeUJDO1FBdEJHLFdBQUssR0FBVSxDQUFDLENBQUE7O0lBc0JwQixDQUFDO0lBcEJHLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHlCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLFVBQVU7WUFDL0MsT0FBTTtRQUVWLEtBQW1CLFVBQWtCLEVBQWxCLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUM7WUFBakMsSUFBSSxNQUFNLFNBQUE7WUFDWCxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO1lBRTNCLElBQUksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2dCQUMxQixNQUFNLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1NBQ3BDO0lBQ0wsQ0FBQztJQXJCRDtRQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxFQUFDLENBQUM7NENBQ2I7SUFIQyxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBeUI3QjtJQUFELGdCQUFDO0NBekJELEFBeUJDLENBekJzQyxFQUFFLENBQUMsU0FBUyxHQXlCbEQ7a0JBekJvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi9HYW1lU3RhdGVcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZ0NvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHt0eXBlOiBjYy5JbnRlZ2VyfSlcbiAgICBzcGVlZDpudW1iZXIgPSAwXG5cbiAgICAvLyBwcml2YXRlIGdhbWVPdmVyID0gZmFsc2VcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBpZiAoR2FtZVN0YXRlLmluc3RhbmNlLmdldEdhbWVTdGF0ZSgpID09ICdHYW1lT3ZlcicpXG4gICAgICAgICAgICByZXR1cm5cblxuICAgICAgICBmb3IgKGxldCBiZ05vZGUgb2YgdGhpcy5ub2RlLmNoaWxkcmVuKXtcbiAgICAgICAgICAgIGJnTm9kZS55IC09IHRoaXMuc3BlZWQgKiBkdFxuXG4gICAgICAgICAgICBpZiAoYmdOb2RlLnkgPD0gLWJnTm9kZS5oZWlnaHQpXG4gICAgICAgICAgICAgICAgYmdOb2RlLnkgKz0gYmdOb2RlLmhlaWdodCAqIDJcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
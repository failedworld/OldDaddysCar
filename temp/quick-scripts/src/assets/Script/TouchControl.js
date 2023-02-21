"use strict";
cc._RF.push(module, 'd937dg7sphPZ4BmGM6Pl6Q8', 'TouchControl');
// Script/TouchControl.ts

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
var DaddyCar_1 = require("./DaddyCar");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TouchControl = /** @class */ (function (_super) {
    __extends(TouchControl, _super);
    function TouchControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.daddyCar = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    TouchControl.prototype.start = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchBegin, this);
    };
    // update (dt) {}
    TouchControl.prototype.touchBegin = function (event) {
        var pos = event.getLocation();
        if (pos.x > 1080 / 2) {
            console.log("=====click right=====");
            this.daddyCar.getComponent(DaddyCar_1.default).setPower(5);
        }
        else {
            this.daddyCar.getComponent(DaddyCar_1.default).setPower(-5);
            console.log("=====click left======");
        }
    };
    __decorate([
        property(cc.Node)
    ], TouchControl.prototype, "daddyCar", void 0);
    TouchControl = __decorate([
        ccclass
    ], TouchControl);
    return TouchControl;
}(cc.Component));
exports.default = TouchControl;

cc._RF.pop();
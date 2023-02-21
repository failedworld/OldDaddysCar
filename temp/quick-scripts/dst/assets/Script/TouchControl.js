
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/TouchControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxUb3VjaENvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBRzVCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBNEJDO1FBekJHLGNBQVEsR0FBWSxJQUFJLENBQUM7O0lBeUI3QixDQUFDO0lBdkJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFBO0lBRXBFLENBQUM7SUFFRCxpQkFBaUI7SUFFakIsaUNBQVUsR0FBVixVQUFXLEtBQXlCO1FBQ2hDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUM3QixJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBQztZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUE7WUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNuRDthQUNHO1lBQ0EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtTQUN2QztJQUVMLENBQUM7SUF4QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDTztJQUhSLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E0QmhDO0lBQUQsbUJBQUM7Q0E1QkQsQUE0QkMsQ0E1QnlDLEVBQUUsQ0FBQyxTQUFTLEdBNEJyRDtrQkE1Qm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGFkZHlDYXIgZnJvbSBcIi4vRGFkZHlDYXJcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkYWRkeUNhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCx0aGlzLnRvdWNoQmVnaW4sdGhpcylcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICB0b3VjaEJlZ2luKGV2ZW50OmNjLkV2ZW50LkV2ZW50VG91Y2gpe1xyXG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXHJcbiAgICAgICAgaWYgKHBvcy54ID4gMTA4MCAvIDIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09Y2xpY2sgcmlnaHQ9PT09PVwiKVxyXG4gICAgICAgICAgICB0aGlzLmRhZGR5Q2FyLmdldENvbXBvbmVudChEYWRkeUNhcikuc2V0UG93ZXIoNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5kYWRkeUNhci5nZXRDb21wb25lbnQoRGFkZHlDYXIpLnNldFBvd2VyKC01KVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09Y2xpY2sgbGVmdD09PT09PVwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19
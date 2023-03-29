
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVG91Y2hDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFrQztBQUc1QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQTRCQztRQXpCRyxjQUFRLEdBQVksSUFBSSxDQUFDOztJQXlCN0IsQ0FBQztJQXZCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLDRCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUVwRSxDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLGlDQUFVLEdBQVYsVUFBVyxLQUF5QjtRQUNoQyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDN0IsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUM7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1lBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDbkQ7YUFDRztZQUNBLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUE7U0FDdkM7SUFFTCxDQUFDO0lBeEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ087SUFIUixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBNEJoQztJQUFELG1CQUFDO0NBNUJELEFBNEJDLENBNUJ5QyxFQUFFLENBQUMsU0FBUyxHQTRCckQ7a0JBNUJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhZGR5Q2FyIGZyb20gXCIuL0RhZGR5Q2FyXCI7XG5cblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3VjaENvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgZGFkZHlDYXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULHRoaXMudG91Y2hCZWdpbix0aGlzKVxuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cblxuICAgIHRvdWNoQmVnaW4oZXZlbnQ6Y2MuRXZlbnQuRXZlbnRUb3VjaCl7XG4gICAgICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpXG4gICAgICAgIGlmIChwb3MueCA+IDEwODAgLyAyKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT1jbGljayByaWdodD09PT09XCIpXG4gICAgICAgICAgICB0aGlzLmRhZGR5Q2FyLmdldENvbXBvbmVudChEYWRkeUNhcikuc2V0UG93ZXIoNSlcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5kYWRkeUNhci5nZXRDb21wb25lbnQoRGFkZHlDYXIpLnNldFBvd2VyKC01KVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PWNsaWNrIGxlZnQ9PT09PT1cIilcbiAgICAgICAgfVxuXG4gICAgfVxufVxuIl19
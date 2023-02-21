
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/NetworkManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3f346N9qmNAGaDzwDOSJrFY', 'NetworkManager');
// Script/NetworkManager.ts

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
var NetworkManager = /** @class */ (function (_super) {
    __extends(NetworkManager, _super);
    function NetworkManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetworkManager_1 = NetworkManager;
    Object.defineProperty(NetworkManager, "instance", {
        get: function () {
            if (!NetworkManager_1._instance) {
                NetworkManager_1._instance = new NetworkManager_1();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NetworkManager.prototype.start = function () {
    };
    var NetworkManager_1;
    NetworkManager._instance = null;
    NetworkManager = NetworkManager_1 = __decorate([
        ccclass
    ], NetworkManager);
    return NetworkManager;
}(cc.Component));
exports.default = NetworkManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOZXR3b3JrTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBWTtJQUF4RDs7SUFtQkEsQ0FBQzt1QkFuQm9CLGNBQWM7SUFJL0Isc0JBQWtCLDBCQUFRO2FBQTFCO1lBQ0ksSUFBSSxDQUFDLGdCQUFjLENBQUMsU0FBUyxFQUFDO2dCQUMxQixnQkFBYyxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFjLEVBQUUsQ0FBQzthQUNuRDtZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN6QixDQUFDOzs7T0FBQTtJQUNELHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsOEJBQUssR0FBTDtJQUVBLENBQUM7O0lBZGUsd0JBQVMsR0FBa0IsSUFBSSxDQUFBO0lBRjlCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FtQmxDO0lBQUQscUJBQUM7Q0FuQkQsQUFtQkMsQ0FuQjJDLEVBQUUsQ0FBQyxTQUFTLEdBbUJ2RDtrQkFuQm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0d29ya01hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgIF9pbnN0YW5jZTpOZXR3b3JrTWFuYWdlciA9IG51bGxcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6TmV0d29ya01hbmFnZXJ7XG4gICAgICAgIGlmICghTmV0d29ya01hbmFnZXIuX2luc3RhbmNlKXtcbiAgICAgICAgICAgIE5ldHdvcmtNYW5hZ2VyLl9pbnN0YW5jZSA9IG5ldyBOZXR3b3JrTWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVxuICAgIH1cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQgKCkge1xuXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
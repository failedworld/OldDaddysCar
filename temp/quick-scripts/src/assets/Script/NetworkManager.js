"use strict";
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

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ObstacleControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b96b2pnPcxEQ7dbzPYgasNS', 'ObstacleControl');
// Script/ObstacleControl.ts

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
var Obstacle_1 = require("./Obstacle");
var ObstaclesPool_1 = require("./ObstaclesPool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ObstacleControl = /** @class */ (function (_super) {
    __extends(ObstacleControl, _super);
    function ObstacleControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deltaTime = 2;
        _this.obsPre = null;
        return _this;
        // update (dt) {
        // }
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    ObstacleControl.prototype.start = function () {
        var self = this;
        this.schedule(this.generateObs, self.deltaTime);
        console.log('========scheduled=========');
    };
    ObstacleControl.prototype.generateObs = function () {
        if (GameState_1.default.instance.getGameState() == 'GameOver') {
            console.log('========unscheduled=========');
            this.unschedule(this.generateObs);
        }
        else {
            // console.log('========unscheduled=========')
            var obs = cc.instantiate(this.obsPre);
            obs.setParent(cc.director.getScene());
            obs.y = this.node.y;
            obs.x = Math.random() * 1080 + 20;
            obs.getComponent(Obstacle_1.default).setSpeed(1600);
            ObstaclesPool_1.default.instance.addObs(obs);
        }
    };
    __decorate([
        property(cc.Integer)
    ], ObstacleControl.prototype, "deltaTime", void 0);
    __decorate([
        property(cc.Prefab)
    ], ObstacleControl.prototype, "obsPre", void 0);
    ObstacleControl = __decorate([
        ccclass
    ], ObstacleControl);
    return ObstacleControl;
}(cc.Component));
exports.default = ObstacleControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPYnN0YWNsZUNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBQ3BDLHVDQUFrQztBQUNsQyxpREFBNEM7QUFFdEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUFzQ0M7UUFuQ0csZUFBUyxHQUFXLENBQUMsQ0FBQztRQUd0QixZQUFNLEdBQWMsSUFBSSxDQUFDOztRQTZCekIsZ0JBQWdCO1FBRWhCLElBQUk7SUFDUixDQUFDO0lBOUJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsK0JBQUssR0FBTDtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0ksSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxVQUFVLEVBQUM7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO1lBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1NBQ3BDO2FBQUk7WUFDRCw4Q0FBOEM7WUFDOUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDckMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7WUFDckMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFBO1lBQ2pDLEdBQUcsQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUN6Qyx1QkFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDckM7SUFHTCxDQUFDO0lBOUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7c0RBQ0M7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzttREFDSztJQU5SLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FzQ25DO0lBQUQsc0JBQUM7Q0F0Q0QsQUFzQ0MsQ0F0QzRDLEVBQUUsQ0FBQyxTQUFTLEdBc0N4RDtrQkF0Q29CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVN0YXRlIGZyb20gXCIuL0dhbWVTdGF0ZVwiO1xyXG5pbXBvcnQgT2JzdGFjbGUgZnJvbSBcIi4vT2JzdGFjbGVcIjtcclxuaW1wb3J0IE9ic3RhY2xlc1Bvb2wgZnJvbSBcIi4vT2JzdGFjbGVzUG9vbFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnN0YWNsZUNvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgZGVsdGFUaW1lOiBudW1iZXIgPSAyO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBvYnNQcmU6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5nZW5lcmF0ZU9icyxzZWxmLmRlbHRhVGltZSkgXHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09c2NoZWR1bGVkPT09PT09PT09JylcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZU9icygpe1xyXG4gICAgICAgIGlmIChHYW1lU3RhdGUuaW5zdGFuY2UuZ2V0R2FtZVN0YXRlKCkgPT0gJ0dhbWVPdmVyJyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PXVuc2NoZWR1bGVkPT09PT09PT09JylcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZ2VuZXJhdGVPYnMpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCc9PT09PT09PXVuc2NoZWR1bGVkPT09PT09PT09JylcclxuICAgICAgICAgICAgbGV0IG9icyA9IGNjLmluc3RhbnRpYXRlKHRoaXMub2JzUHJlKVxyXG4gICAgICAgICAgICBvYnMuc2V0UGFyZW50KGNjLmRpcmVjdG9yLmdldFNjZW5lKCkpXHJcbiAgICAgICAgICAgIG9icy55ID0gdGhpcy5ub2RlLnk7XHJcbiAgICAgICAgICAgIG9icy54ID0gTWF0aC5yYW5kb20oKSAqIDEwODAgKyAyMFxyXG4gICAgICAgICAgICBvYnMuZ2V0Q29tcG9uZW50KE9ic3RhY2xlKS5zZXRTcGVlZCgxNjAwKVxyXG4gICAgICAgICAgICBPYnN0YWNsZXNQb29sLmluc3RhbmNlLmFkZE9icyhvYnMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==
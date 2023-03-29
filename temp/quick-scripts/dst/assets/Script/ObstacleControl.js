
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvT2JzdGFjbGVDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFvQztBQUNwQyx1Q0FBa0M7QUFDbEMsaURBQTRDO0FBRXRDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBc0NDO1FBbkNHLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFHdEIsWUFBTSxHQUFjLElBQUksQ0FBQzs7UUE2QnpCLGdCQUFnQjtRQUVoQixJQUFJO0lBQ1IsQ0FBQztJQTlCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLCtCQUFLLEdBQUw7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUE7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNJLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksVUFBVSxFQUFDO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQTtZQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtTQUNwQzthQUFJO1lBQ0QsOENBQThDO1lBQzlDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3JDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1lBQ3JDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQTtZQUNqQyxHQUFHLENBQUMsWUFBWSxDQUFDLGtCQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDekMsdUJBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3JDO0lBR0wsQ0FBQztJQTlCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO3NEQUNDO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7bURBQ0s7SUFOUixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBc0NuQztJQUFELHNCQUFDO0NBdENELEFBc0NDLENBdEM0QyxFQUFFLENBQUMsU0FBUyxHQXNDeEQ7a0JBdENvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi9HYW1lU3RhdGVcIjtcbmltcG9ydCBPYnN0YWNsZSBmcm9tIFwiLi9PYnN0YWNsZVwiO1xuaW1wb3J0IE9ic3RhY2xlc1Bvb2wgZnJvbSBcIi4vT2JzdGFjbGVzUG9vbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic3RhY2xlQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgICBkZWx0YVRpbWU6IG51bWJlciA9IDI7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIG9ic1ByZTogY2MuUHJlZmFiID0gbnVsbDtcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuZ2VuZXJhdGVPYnMsc2VsZi5kZWx0YVRpbWUpIFxuICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT1zY2hlZHVsZWQ9PT09PT09PT0nKVxuICAgIH1cblxuICAgIGdlbmVyYXRlT2JzKCl7XG4gICAgICAgIGlmIChHYW1lU3RhdGUuaW5zdGFuY2UuZ2V0R2FtZVN0YXRlKCkgPT0gJ0dhbWVPdmVyJyl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT11bnNjaGVkdWxlZD09PT09PT09PScpXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5nZW5lcmF0ZU9icylcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnPT09PT09PT11bnNjaGVkdWxlZD09PT09PT09PScpXG4gICAgICAgICAgICBsZXQgb2JzID0gY2MuaW5zdGFudGlhdGUodGhpcy5vYnNQcmUpXG4gICAgICAgICAgICBvYnMuc2V0UGFyZW50KGNjLmRpcmVjdG9yLmdldFNjZW5lKCkpXG4gICAgICAgICAgICBvYnMueSA9IHRoaXMubm9kZS55O1xuICAgICAgICAgICAgb2JzLnggPSBNYXRoLnJhbmRvbSgpICogMTA4MCArIDIwXG4gICAgICAgICAgICBvYnMuZ2V0Q29tcG9uZW50KE9ic3RhY2xlKS5zZXRTcGVlZCgxNjAwKVxuICAgICAgICAgICAgT2JzdGFjbGVzUG9vbC5pbnN0YW5jZS5hZGRPYnMob2JzKVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge1xuXG4gICAgLy8gfVxufVxuIl19
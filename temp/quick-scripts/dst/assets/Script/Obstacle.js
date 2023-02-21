
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Obstacle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '538d4RkE7ZJGrfEoEh1grsW', 'Obstacle');
// Script/Obstacle.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Obstacle = /** @class */ (function (_super) {
    __extends(Obstacle, _super);
    function Obstacle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 800;
        _this.speedUp = 0;
        _this.isPassed = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Obstacle.prototype.start = function () {
        console.log('=======add obs======');
    };
    Obstacle.prototype.update = function (dt) {
        if (GameState_1.default.instance.getGameState() == 'GameOver')
            return;
        this.node.y -= (this.speed + this.speedUp) * dt;
        if (this.node.y < -1140) {
            // ObstaclesPool.instance.deleteObs(this.node)
            this.node.destroy();
        }
        if (this.node.y < -700 && this.isPassed == false) {
            GameState_1.default.instance.addScore();
            this.isPassed = true;
        }
    };
    Obstacle.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Obstacle.prototype.setSpeedUp = function (speedUp) {
        this.speedUp = speedUp;
    };
    Obstacle.prototype.setPassed = function (isPassed) {
        this.isPassed = isPassed;
    };
    Obstacle.prototype.onDestroy = function () {
        console.log('=======delete obs======');
    };
    __decorate([
        property(cc.Integer)
    ], Obstacle.prototype, "speed", void 0);
    __decorate([
        property(cc.Integer)
    ], Obstacle.prototype, "speedUp", void 0);
    Obstacle = __decorate([
        ccclass
    ], Obstacle);
    return Obstacle;
}(cc.Component));
exports.default = Obstacle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxPYnN0YWNsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix5Q0FBb0M7QUFHOUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrREM7UUEvQ0csV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUdwQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGNBQVEsR0FBRyxLQUFLLENBQUE7O0lBMENwQixDQUFDO0lBeENHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtJQUV2QyxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLG1CQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxJQUFJLFVBQVU7WUFDL0MsT0FBTTtRQUVWLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQy9DLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUM7WUFDcEIsOENBQThDO1lBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7U0FDdEI7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxFQUFDO1lBQzdDLG1CQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1NBQ3ZCO0lBQ0wsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztJQUVELDZCQUFVLEdBQVYsVUFBVyxPQUFPO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDMUIsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxRQUFRO1FBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7SUFDNUIsQ0FBQztJQUVTLDRCQUFTLEdBQW5CO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUE5Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsyQ0FDRDtJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzZDQUNEO0lBTkgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtENUI7SUFBRCxlQUFDO0NBbERELEFBa0RDLENBbERxQyxFQUFFLENBQUMsU0FBUyxHQWtEakQ7a0JBbERvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IEdhbWVTdGF0ZSBmcm9tIFwiLi9HYW1lU3RhdGVcIjtcclxuaW1wb3J0IE9ic3RhY2xlc1Bvb2wgZnJvbSBcIi4vT2JzdGFjbGVzUG9vbFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnN0YWNsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBzcGVlZDogbnVtYmVyID0gODAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxyXG4gICAgc3BlZWRVcDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBpc1Bhc3NlZCA9IGZhbHNlXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09YWRkIG9icz09PT09PScpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZiAoR2FtZVN0YXRlLmluc3RhbmNlLmdldEdhbWVTdGF0ZSgpID09ICdHYW1lT3ZlcicpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUueSAtPSAodGhpcy5zcGVlZCArIHRoaXMuc3BlZWRVcCkgKiBkdFxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueSA8IC0xMTQwKXtcclxuICAgICAgICAgICAgLy8gT2JzdGFjbGVzUG9vbC5pbnN0YW5jZS5kZWxldGVPYnModGhpcy5ub2RlKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ub2RlLnkgPCAtNzAwICYmIHRoaXMuaXNQYXNzZWQgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBHYW1lU3RhdGUuaW5zdGFuY2UuYWRkU2NvcmUoKVxyXG4gICAgICAgICAgICB0aGlzLmlzUGFzc2VkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRTcGVlZChzcGVlZCl7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkXHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3BlZWRVcChzcGVlZFVwKXtcclxuICAgICAgICB0aGlzLnNwZWVkVXAgPSBzcGVlZFVwXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFzc2VkKGlzUGFzc2VkKXtcclxuICAgICAgICB0aGlzLmlzUGFzc2VkID0gaXNQYXNzZWRcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09ZGVsZXRlIG9icz09PT09PScpXHJcbiAgICB9XHJcbn1cclxuIl19
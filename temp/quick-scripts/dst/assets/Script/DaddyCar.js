
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/DaddyCar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '295cd/FfMBK+Lwdt8MG77kZ', 'DaddyCar');
// Script/DaddyCar.ts

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
var GameLogic_1 = require("./GameLogic");
var GameState_1 = require("./GameState");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DaddyCar = /** @class */ (function (_super) {
    __extends(DaddyCar, _super);
    function DaddyCar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.count = 0;
        _this.power = 0;
        _this.backForce = 0.0;
        _this.gameLogic = null;
        return _this;
    }
    DaddyCar.prototype.start = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    DaddyCar.prototype.onCollisionEnter = function (other) {
        this.count += 1;
        this.gameLogic.getComponent(GameLogic_1.default).gameOver();
        console.log("=======collision =======" + this.count);
    };
    DaddyCar.prototype.update = function (dt) {
        if (GameState_1.default.instance.getGameState() == 'GameOver')
            return;
        if (this.power > 0)
            this.power -= this.backForce;
        if (this.power < 0)
            this.power += this.backForce;
        this.node.x += this.power;
        if (this.node.x > (1080 / 2 - this.node.width / 2))
            this.node.x = 1080 / 2 - this.node.width / 2;
        if (this.node.x < -1080 / 2 + this.node.width / 2)
            this.node.x = -1080 / 2 + this.node.width / 2;
    };
    DaddyCar.prototype.setPower = function (power) {
        this.power = power;
    };
    __decorate([
        property(cc.Float)
    ], DaddyCar.prototype, "backForce", void 0);
    __decorate([
        property(cc.Node)
    ], DaddyCar.prototype, "gameLogic", void 0);
    DaddyCar = __decorate([
        ccclass
    ], DaddyCar);
    return DaddyCar;
}(cc.Component));
exports.default = DaddyCar;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvRGFkZHlDYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYseUNBQW9DO0FBQ3BDLHlDQUFvQztBQUU5QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTZDQztRQTNDRyxXQUFLLEdBQUcsQ0FBQyxDQUFBO1FBRVQsV0FBSyxHQUFHLENBQUMsQ0FBQTtRQUdULGVBQVMsR0FBRyxHQUFHLENBQUE7UUFHZixlQUFTLEdBQVcsSUFBSSxDQUFBOztJQW1DNUIsQ0FBQztJQWpDRyx3QkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7SUFFcEQsQ0FBQztJQUVELG1DQUFnQixHQUFoQixVQUFpQixLQUFLO1FBQ2xCLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFBO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsbUJBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksbUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksVUFBVTtZQUMvQyxPQUFNO1FBRVYsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7WUFDZCxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUE7UUFFaEMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7WUFDZCxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUE7UUFFaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUV6QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7UUFDaEQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO0lBRXJELENBQUM7SUFFRCwyQkFBUSxHQUFSLFVBQVMsS0FBSztRQUNWLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3RCLENBQUM7SUFyQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDSjtJQUdmO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ007SUFWUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkM1QjtJQUFELGVBQUM7Q0E3Q0QsQUE2Q0MsQ0E3Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBNkNqRDtrQkE3Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEdhbWVMb2dpYyBmcm9tIFwiLi9HYW1lTG9naWNcIjtcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSBcIi4vR2FtZVN0YXRlXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFkZHlDYXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgY291bnQgPSAwXG4gICAgXG4gICAgcG93ZXIgPSAwXG5cbiAgICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gICAgYmFja0ZvcmNlID0gMC4wXG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBnYW1lTG9naWM6Y2MuTm9kZSA9IG51bGxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlXG5cbiAgICB9XG5cbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyKXtcbiAgICAgICAgdGhpcy5jb3VudCArPSAxXG4gICAgICAgIHRoaXMuZ2FtZUxvZ2ljLmdldENvbXBvbmVudChHYW1lTG9naWMpLmdhbWVPdmVyKClcbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09Y29sbGlzaW9uID09PT09PT1cIiArIHRoaXMuY291bnQpXG4gICAgfVxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBpZiAoR2FtZVN0YXRlLmluc3RhbmNlLmdldEdhbWVTdGF0ZSgpID09ICdHYW1lT3ZlcicpXG4gICAgICAgICAgICByZXR1cm5cblxuICAgICAgICBpZiAodGhpcy5wb3dlciA+IDAgKVxuICAgICAgICAgICAgdGhpcy5wb3dlciAtPSB0aGlzLmJhY2tGb3JjZVxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMucG93ZXIgPCAwKVxuICAgICAgICAgICAgdGhpcy5wb3dlciArPSB0aGlzLmJhY2tGb3JjZVxuXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMucG93ZXJcblxuICAgICAgICBpZiAodGhpcy5ub2RlLnggPiAoMTA4MCAvIDIgLSB0aGlzLm5vZGUud2lkdGggLyAyKSlcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gMTA4MCAvIDIgLSB0aGlzLm5vZGUud2lkdGggLyAyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA8IC0xMDgwIC8gMiArIHRoaXMubm9kZS53aWR0aCAvIDIpXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IC0xMDgwIC8gMiArIHRoaXMubm9kZS53aWR0aCAvIDJcblxuICAgIH1cblxuICAgIHNldFBvd2VyKHBvd2VyKXtcbiAgICAgICAgdGhpcy5wb3dlciA9IHBvd2VyXG4gICAgfVxufVxuIl19
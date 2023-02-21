
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxEYWRkeUNhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix5Q0FBb0M7QUFDcEMseUNBQW9DO0FBRTlCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNkNDO1FBM0NHLFdBQUssR0FBRyxDQUFDLENBQUE7UUFFVCxXQUFLLEdBQUcsQ0FBQyxDQUFBO1FBR1QsZUFBUyxHQUFHLEdBQUcsQ0FBQTtRQUdmLGVBQVMsR0FBVyxJQUFJLENBQUE7O0lBbUM1QixDQUFDO0lBakNHLHdCQUFLLEdBQUw7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtJQUVwRCxDQUFDO0lBRUQsbUNBQWdCLEdBQWhCLFVBQWlCLEtBQUs7UUFDbEIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUE7UUFDZixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDeEQsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxtQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxVQUFVO1lBQy9DLE9BQU07UUFFVixJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUNkLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUVoQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUNkLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUVoQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFBO1FBRXpCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNoRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUE7SUFFckQsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztJQXJDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNKO0lBR2Y7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDTTtJQVZQLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2QzVCO0lBQUQsZUFBQztDQTdDRCxBQTZDQyxDQTdDcUMsRUFBRSxDQUFDLFNBQVMsR0E2Q2pEO2tCQTdDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCBHYW1lTG9naWMgZnJvbSBcIi4vR2FtZUxvZ2ljXCI7XHJcbmltcG9ydCBHYW1lU3RhdGUgZnJvbSBcIi4vR2FtZVN0YXRlXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhZGR5Q2FyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb3VudCA9IDBcclxuICAgIFxyXG4gICAgcG93ZXIgPSAwXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkZsb2F0KVxyXG4gICAgYmFja0ZvcmNlID0gMC4wXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBnYW1lTG9naWM6Y2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIpe1xyXG4gICAgICAgIHRoaXMuY291bnQgKz0gMVxyXG4gICAgICAgIHRoaXMuZ2FtZUxvZ2ljLmdldENvbXBvbmVudChHYW1lTG9naWMpLmdhbWVPdmVyKClcclxuICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09PT1jb2xsaXNpb24gPT09PT09PVwiICsgdGhpcy5jb3VudClcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYgKEdhbWVTdGF0ZS5pbnN0YW5jZS5nZXRHYW1lU3RhdGUoKSA9PSAnR2FtZU92ZXInKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucG93ZXIgPiAwIClcclxuICAgICAgICAgICAgdGhpcy5wb3dlciAtPSB0aGlzLmJhY2tGb3JjZVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnBvd2VyIDwgMClcclxuICAgICAgICAgICAgdGhpcy5wb3dlciArPSB0aGlzLmJhY2tGb3JjZVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnBvd2VyXHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA+ICgxMDgwIC8gMiAtIHRoaXMubm9kZS53aWR0aCAvIDIpKVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IDEwODAgLyAyIC0gdGhpcy5ub2RlLndpZHRoIC8gMlxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUueCA8IC0xMDgwIC8gMiArIHRoaXMubm9kZS53aWR0aCAvIDIpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gLTEwODAgLyAyICsgdGhpcy5ub2RlLndpZHRoIC8gMlxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRQb3dlcihwb3dlcil7XHJcbiAgICAgICAgdGhpcy5wb3dlciA9IHBvd2VyXHJcbiAgICB9XHJcbn1cclxuIl19
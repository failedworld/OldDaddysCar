
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/HelloWorld.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7e2bA1PotJNYgyI/39KG+D', 'HelloWorld');
// Script/HelloWorld.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    label: {
      "default": null,
      type: cc.Label
    },
    // defaults, set visually when attaching this script to the Canvas
    text: 'Hello, World!'
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.label.string = this.text;
  },
  // called every frame
  update: function update(dt) {}
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxIZWxsb1dvcmxkLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGFiZWwiLCJ0eXBlIiwiTGFiZWwiLCJ0ZXh0Iiwib25Mb2FkIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0VBQ0wsV0FBU0QsRUFBRSxDQUFDRSxTQURQO0VBR0xDLFVBQVUsRUFBRTtJQUNSQyxLQUFLLEVBQUU7TUFDSCxXQUFTLElBRE47TUFFSEMsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0lBRk4sQ0FEQztJQUtSO0lBQ0FDLElBQUksRUFBRTtFQU5FLENBSFA7RUFZTDtFQUNBQyxNQUFNLEVBQUUsa0JBQVk7SUFDaEIsS0FBS0osS0FBTCxDQUFXSyxNQUFYLEdBQW9CLEtBQUtGLElBQXpCO0VBQ0gsQ0FmSTtFQWlCTDtFQUNBRyxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYyxDQUVyQjtBQXBCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBkZWZhdWx0cywgc2V0IHZpc3VhbGx5IHdoZW4gYXR0YWNoaW5nIHRoaXMgc2NyaXB0IHRvIHRoZSBDYW52YXNcclxuICAgICAgICB0ZXh0OiAnSGVsbG8sIFdvcmxkISdcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMudGV4dDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
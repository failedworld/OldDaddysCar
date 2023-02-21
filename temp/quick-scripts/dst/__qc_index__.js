
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/BgControl');
require('./assets/Script/DaddyCar');
require('./assets/Script/GameLogic');
require('./assets/Script/GameState');
require('./assets/Script/HelloWorld');
require('./assets/Script/LoginLogic');
require('./assets/Script/NetworkManager');
require('./assets/Script/Obstacle');
require('./assets/Script/ObstacleControl');
require('./assets/Script/ObstaclesPool');
require('./assets/Script/ShowScore');
require('./assets/Script/TouchControl');
require('./assets/migration/use_reversed_rotateBy');

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
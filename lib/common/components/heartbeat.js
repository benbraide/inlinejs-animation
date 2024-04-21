"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationHeartbeatElementCompact = exports.AnimationHeartbeatElement = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const heartbeat_1 = require("../actors/scene/heartbeat");
const scene_base_1 = require("./scene-base");
class AnimationHeartbeatElement extends scene_base_1.AnimationSceneBaseElement {
    constructor() {
        super();
    }
    CreateActor_() {
        return (0, heartbeat_1.CreateHeartbeatSceneAnimationActor)(this.factor, { x: this.x, y: this.y });
    }
}
exports.AnimationHeartbeatElement = AnimationHeartbeatElement;
function AnimationHeartbeatElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationHeartbeatElement, 'animation-heartbeat');
}
exports.AnimationHeartbeatElementCompact = AnimationHeartbeatElementCompact;

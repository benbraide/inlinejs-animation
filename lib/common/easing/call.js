"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallAnimationEase = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
function CallAnimationEase(handler, params) {
    if ((0, inlinejs_1.IsObject)(handler)) { //Details provided
        return handler.callback(params);
    }
    return ((typeof handler === 'function') ? handler(params) : handler.Handle(params));
}
exports.CallAnimationEase = CallAnimationEase;

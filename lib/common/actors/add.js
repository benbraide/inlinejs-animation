"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddAnimationActor = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
function AddAnimationActor(handler) {
    var _a, _b;
    let name = '', callback = null;
    if ((0, inlinejs_1.IsObject)(handler)) { //Details provided
        ({ name, callback } = handler);
        if (name && callback) {
            (_a = (0, inlinejs_1.GetGlobal)().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Add(callback, name);
        }
    }
    else { //Instance provided
        (_b = (0, inlinejs_1.GetGlobal)().GetConcept('animation')) === null || _b === void 0 ? void 0 : _b.GetActorCollection().Add(handler);
    }
}
exports.AddAnimationActor = AddAnimationActor;

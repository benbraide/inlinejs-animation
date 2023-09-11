"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationCollectElementCompact = exports.AnimationCollect = void 0;
const concurrent_1 = require("../actors/composite/concurrent");
const base_1 = require("./base");
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
class AnimationCollect extends base_1.AnimationElement {
    constructor() {
        super();
        this.actor_ = new concurrent_1.ConcurrentCompositeAnimationActor([]);
        this.DisableTemplate_();
    }
    GetName() {
        return '{ConcurrentAnimationElement}';
    }
    Handle(params) {
        this.actor_ && this.actor_.Handle(params);
    }
    HandleElementScopeCreated_(_a, postAttributesCallback) {
        var { scope } = _a, rest = __rest(_a, ["scope"]);
        super.HandleElementScopeCreated_(Object.assign({ scope }, rest), postAttributesCallback);
        scope.AddPostProcessCallback(() => {
            [...this.children].forEach(child => { var _a; return ('Handle' in child && typeof child['Handle'] === 'function' && ((_a = this.actor_) === null || _a === void 0 ? void 0 : _a.AddActor(child))); });
        });
        scope.AddTreeChangeCallback(({ added, removed }) => {
            removed.forEach(child => { var _a; return (_a = this.actor_) === null || _a === void 0 ? void 0 : _a.RemoveActor(child); });
            added.forEach(child => { var _a; return ('Handle' in child && typeof child['Handle'] === 'function' && ((_a = this.actor_) === null || _a === void 0 ? void 0 : _a.AddActor(child))); });
        });
        scope.AddUninitCallback(() => (this.actor_ = null));
    }
}
exports.AnimationCollect = AnimationCollect;
function AnimationCollectElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationCollect);
}
exports.AnimationCollectElementCompact = AnimationCollectElementCompact;

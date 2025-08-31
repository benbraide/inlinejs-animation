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
import { ConcurrentCompositeAnimationActor } from "../actors/composite/concurrent";
import { RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationBaseActorElement } from "./actor-base";
export class AnimationCollectElement extends AnimationBaseActorElement {
    constructor() {
        super();
        this.actor_ = new ConcurrentCompositeAnimationActor([]);
        this.DisableTemplate_();
    }
    Handle(params) {
        this.actor_ && this.actor_.Handle(params);
    }
    HandleElementScopeCreatedPostfix_(_a) {
        var { scope } = _a, rest = __rest(_a, ["scope"]);
        super.HandleElementScopeCreatedPostfix_(Object.assign({ scope }, rest));
        scope.AddTreeChangeCallback(() => this.RefreshCollection_());
    }
    HandleElementScopeDestroyed_(scope) {
        var _a;
        super.HandleElementScopeDestroyed_(scope);
        (_a = this.actor_) === null || _a === void 0 ? void 0 : _a.RemoveAll();
        this.actor_ = null;
    }
    HandlePostProcess_() {
        super.HandlePostProcess_();
        this.RefreshCollection_();
    }
    RefreshCollection_() {
        this.actor_ && this.actor_.RemoveAll();
        this.actor_ && [...this.children].forEach(child => ('Handle' in child && typeof child['Handle'] === 'function' && this.actor_.AddActor(child)));
    }
}
export function AnimationCollectElementCompact() {
    RegisterCustomElement(AnimationCollectElement, 'animation-collect');
}

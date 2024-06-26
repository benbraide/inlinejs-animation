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
import { RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationBaseEaseElement } from "./ease-base";
import { CompositeAnimationEase } from "../easing/composite";
export class CompositeEaseElement extends AnimationBaseEaseElement {
    constructor() {
        super();
        this.actor_ = new CompositeAnimationEase([]);
        this.DisableTemplate_();
    }
    Handle(params) {
        return (this.actor_ ? this.actor_.Handle(params) : params.fraction);
    }
    HandleElementScopeCreated_(_a, postAttributesCallback) {
        var { scope } = _a, rest = __rest(_a, ["scope"]);
        super.HandleElementScopeCreated_(Object.assign({ scope }, rest), postAttributesCallback);
        scope.AddPostProcessCallback(() => this.RefreshCollection_());
        scope.AddTreeChangeCallback(() => this.RefreshCollection_());
        scope.AddUninitCallback(() => (this.actor_ = null));
    }
    RefreshCollection_() {
        this.actor_ && this.actor_.RemoveAll();
        this.actor_ && [...this.children].forEach(child => ('Handle' in child && typeof child['Handle'] === 'function' && this.actor_.AddEase(child)));
    }
}
export function CompositeEaseElementCompact() {
    RegisterCustomElement(CompositeEaseElement, 'ease-composite');
}

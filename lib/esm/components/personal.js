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
import { AnimationBaseActorElement } from "./actor-base";
export class AnimationPersonalActorElement extends AnimationBaseActorElement {
    constructor() {
        super();
        this.actor_ = null;
    }
    Handle(params) {
        this.UpdateActor_();
        this.actor_ && ((typeof this.actor_ === 'function') ? this.actor_(params) : this.actor_.Handle(params));
    }
    HandleElementScopeCreated_(_a, postAttributesCallback) {
        var { scope } = _a, rest = __rest(_a, ["scope"]);
        super.HandleElementScopeCreated_(Object.assign({ scope }, rest), postAttributesCallback);
        scope.AddUninitCallback(() => (this.actor_ = null));
    }
    AttributeChanged_(name) {
        this.ShouldRefreshActor_(name) && (this.actor_ = null);
        super.AttributeChanged_(name);
    }
    ShouldRefreshActor_(name) {
        return this.instancePropertyNames_.includes(name);
    }
    UpdateActor_() {
        this.actor_ = (this.actor_ || this.CreateActor_());
    }
    CreateActor_() {
        return null;
    }
}

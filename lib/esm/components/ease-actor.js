var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { Property } from "@benbraide/inlinejs-element";
import { AnimationElement } from "./base";
import { ResolveEase } from "../utilities/resolve";
export class AnimationEaseActorElement extends AnimationElement {
    constructor() {
        super();
        this.actor = '';
    }
    IsAnimationActor() {
        return false;
    }
    IsAnimationEase() {
        return true;
    }
    Handle(params) {
        const actor = this.ResolveActor_();
        return ((actor && ((typeof actor === 'function') ? actor(params) : actor.Handle(params))) || 0);
    }
    HandleElementScopeCreated_(_a, postAttributesCallback) {
        var { scope } = _a, rest = __rest(_a, ["scope"]);
        super.HandleElementScopeCreated_(Object.assign({ scope }, rest), postAttributesCallback);
        scope.AddUninitCallback(() => (this.actor = ''));
    }
    ResolveActor_() {
        return ResolveEase(this, this.actor);
    }
}
__decorate([
    Property({ type: 'string', checkStoredObject: true })
], AnimationEaseActorElement.prototype, "actor", void 0);

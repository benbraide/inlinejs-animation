var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { EvaluateLater } from "@benbraide/inlinejs";
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationActorElement } from "./actor";
import { ResolveActorName, ResolveEase } from "../utilities/resolve";
export class Animation extends AnimationActorElement {
    constructor() {
        super();
        this.name_ = '';
        this.expression = '';
        this.ease = '';
        this.DisableTemplate_();
    }
    UpdateNameProperty(value) {
        this.name_ = ResolveActorName(this, this.name_, value);
    }
    GetName() {
        return (this.name_ || '{AnimationElement}');
    }
    Handle(params) {
        if (this.expression) {
            EvaluateLater({
                componentId: this.componentId_,
                contextElement: this,
                expression: this.expression,
                disableFunctionCall: false,
            })(undefined, [], params);
        }
        else {
            this.Handle_(params, ResolveEase(this, this.ease), this.IsTimeRelative());
        }
    }
    HandleFraction(fraction) {
        const actor = this.ResolveActor_();
        return ((actor && 'HandleFraction' in actor && typeof actor['HandleFraction'] === 'function') ? actor['HandleFraction'](fraction) : null);
    }
    IsTimeRelative() {
        const actor = this.ResolveActor_();
        return (actor && 'IsTimeRelative' in actor && typeof actor['IsTimeRelative'] === 'function' && actor['IsTimeRelative']());
    }
}
__decorate([
    Property({ type: 'string' })
], Animation.prototype, "UpdateNameProperty", null);
__decorate([
    Property({ type: 'string' })
], Animation.prototype, "expression", void 0);
__decorate([
    Property({ type: 'string', checkStoredObject: true })
], Animation.prototype, "ease", void 0);
export function AnimationElementCompact() {
    RegisterCustomElement(Animation);
}

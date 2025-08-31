var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Property } from "@benbraide/inlinejs-element";
import { ResolveActor } from "../utilities/resolve";
import { AnimationBaseActorElement } from "./actor-base";
export class AnimationActorElement extends AnimationBaseActorElement {
    constructor() {
        super();
        this.actor = '';
    }
    Handle(params) {
        this.Handle_(params, null);
    }
    HandleElementScopeDestroyed_(scope) {
        super.HandleElementScopeDestroyed_(scope);
        this.actor = '';
    }
    Handle_(params, ease, timeRelative) {
        const actor = this.ResolveActor_();
        if (!actor) {
            return;
        }
        if (ease) {
            const easeParams = {
                duration: params.duration,
                elapsed: params.elapsed,
                fraction: (timeRelative ? params.elapsedFraction : params.fraction),
            };
            const computedFraction = ((typeof ease === 'function') ? ease(easeParams) : ease.Handle(easeParams));
            let updatedParams = Object.assign({}, params);
            if (timeRelative) {
                updatedParams.elapsedFraction = computedFraction;
            }
            else {
                updatedParams.fraction = computedFraction;
            }
            ((typeof actor === 'function') ? actor(updatedParams) : actor.Handle(updatedParams));
        }
        else {
            ((typeof actor === 'function') ? actor(params) : actor.Handle(params));
        }
    }
    ResolveActor_() {
        return ResolveActor(this, this.actor);
    }
}
__decorate([
    Property({ type: 'string', checkStoredObject: true })
], AnimationActorElement.prototype, "actor", void 0);

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
import { JournalTry } from "@benbraide/inlinejs";
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationBaseActorElement } from "./actor-base";
export class AnimationSharedElement extends AnimationBaseActorElement {
    constructor() {
        super();
        this.timeRelative = false;
        this.DisableTemplate_();
    }
    Handle(_a) {
        var { fraction, elapsedFraction } = _a, rest = __rest(_a, ["fraction", "elapsedFraction"]);
        let actor = null, timeRelative = this.timeRelative;
        if (!timeRelative) {
            const info = this.FindNextActorAndRelativity_(fraction, elapsedFraction);
            if (info) {
                actor = info.actor;
                timeRelative = info.timeRelative;
                fraction = info.fraction;
                elapsedFraction = info.elapsedFraction;
            }
        }
        else {
            const info = this.FindNextActor_(elapsedFraction);
            if (info) {
                actor = info.actor;
                fraction = info.fraction;
            }
        }
        if (actor) {
            const params = Object.assign({ fraction, elapsedFraction }, rest);
            JournalTry(() => (actor && ((typeof actor === 'function') ? actor(params) : actor.Handle(params))));
        }
    }
    FindNextActor_(fraction) {
        for (let child of this.children) {
            if (!('HandleFraction' in child) && typeof child['HandleFraction'] !== 'function') {
                continue;
            }
            const result = child['HandleFraction'](fraction);
            if (result !== null) {
                return {
                    fraction: result,
                    actor: child,
                };
            }
        }
        return null;
    }
    FindNextActorAndRelativity_(fraction, elapsedFraction) {
        for (let child of this.children) {
            const timeRelative = ('IsTimeRelative' in child && typeof child['IsTimeRelative'] === 'function' && child['IsTimeRelative']());
            if (!('HandleFraction' in child) && typeof child['HandleFraction'] !== 'function') {
                continue;
            }
            const result = child['HandleFraction'](timeRelative ? elapsedFraction : fraction);
            if (result !== null) {
                return {
                    timeRelative,
                    fraction: (timeRelative ? fraction : result),
                    elapsedFraction: (timeRelative ? result : elapsedFraction),
                    actor: child,
                };
            }
        }
        return null;
    }
}
__decorate([
    Property({ type: 'boolean' })
], AnimationSharedElement.prototype, "timeRelative", void 0);
export function AnimationSharedElementCompact() {
    RegisterCustomElement(AnimationSharedElement, 'animation-shared');
}

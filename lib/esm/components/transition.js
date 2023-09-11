var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { DefaultTransitionDelay, DefaultTransitionDuration, DefaultTransitionRepeats, GetGlobal, JournalTry } from "@benbraide/inlinejs";
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { FindTransitionData } from "../utilities/find-data";
import { AnimationElement } from "./base";
import { ResolveActor, ResolveEase, ResolveNumeric } from "../utilities/resolve";
export class Transition extends AnimationElement {
    constructor() {
        super();
        this.data_ = null;
        this.extend_ = null;
        this.resetCallbacks_ = new Array();
        this.extend = '';
        this.actor = '';
        this.ease = '';
        this.duration = '';
        this.mode = 'both';
        this.repeats = '';
        this.delay = '';
        this.resetCallback_ = () => (this.data_ = null);
    }
    IsAnimationActor() {
        return false;
    }
    GetData() {
        return (this.data_ || (this.data_ = this.BuildData_()));
    }
    AttributeChanged_(name) {
        if (this.instancePropertyNames_.includes(name)) {
            this.data_ = null;
            this.resetCallbacks_.forEach(callback => JournalTry(callback));
            this.extend_ && (this.extend_ instanceof Transition) && this.extend_.RemoveResetCallback_(this.resetCallback_);
            this.extend_ = ((name === 'extend') ? null : this.extend_);
        }
        super.AttributeChanged_(name);
    }
    BuildData_() {
        let extendData = this.GetExtendedData_();
        return {
            actor: (ResolveActor(this, this.actor) || extendData.actor),
            ease: (ResolveEase(this, this.ease) || extendData.ease),
            duration: (ResolveNumeric(this.duration) || extendData.duration),
            repeats: (ResolveNumeric(this.repeats) || extendData.repeats),
            delay: (ResolveNumeric(this.delay) || extendData.delay),
            allowed: (this.mode || extendData.allowed),
        };
    }
    AddResetCallback_(callback) {
        this.resetCallbacks_.push(callback);
    }
    RemoveResetCallback_(callback) {
        this.resetCallbacks_ = this.resetCallbacks_.filter(cb => (cb !== callback));
    }
    GetExtendedData_() {
        if (!this.extend_) {
            if (this.extend && typeof this.extend === 'string') {
                const el = document.getElementById(this.extend);
                el && el instanceof Transition && (this.extend_ = el);
            }
            else if (this.extend && this.extend instanceof HTMLElement) {
                this.extend_ = this.extend;
            }
            this.extend_ && (this.extend_ instanceof Transition) && this.extend_.AddResetCallback_(this.resetCallback_);
        }
        if (!this.extend_) {
            return this.GetDefaultData_();
        }
        if (this.extend_ instanceof Transition) {
            return this.extend_.GetData();
        }
        return (FindTransitionData({
            componentId: this.componentId_,
            contextElement: this.extend_,
        }) || this.GetDefaultData_());
    }
    GetDefaultData_() {
        var _a, _b;
        return {
            actor: (((_a = GetGlobal().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Find('default')) || null),
            ease: (((_b = GetGlobal().GetConcept('animation')) === null || _b === void 0 ? void 0 : _b.GetEaseCollection().Find('default')) || null),
            duration: DefaultTransitionDuration,
            repeats: DefaultTransitionRepeats,
            delay: DefaultTransitionDelay,
            allowed: 'both',
        };
    }
}
__decorate([
    Property({ type: 'string', checkStoredObject: true })
], Transition.prototype, "extend", void 0);
__decorate([
    Property({ type: 'string', checkStoredObject: true })
], Transition.prototype, "actor", void 0);
__decorate([
    Property({ type: 'string', checkStoredObject: true })
], Transition.prototype, "ease", void 0);
__decorate([
    Property({ type: 'string' })
], Transition.prototype, "duration", void 0);
__decorate([
    Property({ type: 'string' })
], Transition.prototype, "mode", void 0);
__decorate([
    Property({ type: 'string' })
], Transition.prototype, "repeats", void 0);
__decorate([
    Property({ type: 'string' })
], Transition.prototype, "delay", void 0);
export function TransitionElementCompact() {
    RegisterCustomElement(Transition);
}

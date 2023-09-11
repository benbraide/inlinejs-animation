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
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { ApplyRangeAndTransform } from "../actors/scene/generic";
import { AnimationElement } from "./base";
export class AnimationSceneAct extends AnimationElement {
    constructor() {
        super();
        this.id_ = '';
        this.checkpoint = new Array();
        this.transform = '';
        this.unit = '';
        this.from = 0;
        this.to = 0;
    }
    HandleElementScopeCreated_(_a, postAttributesCallback) {
        var { scope } = _a, rest = __rest(_a, ["scope"]);
        super.HandleElementScopeCreated_(Object.assign({ scope }, rest), () => {
            this.AddToParent_();
            postAttributesCallback && postAttributesCallback();
        });
    }
    AddToParent_() {
        if (!this.parentElement) {
            return; //Invalid context
        }
        (this.id_ && ('RemoveSceneAct' in this.parentElement) && typeof this.parentElement['RemoveSceneAct'] === 'function') && this.parentElement['RemoveSceneAct'](this.id_);
        if (('AddSceneAct' in this.parentElement) || typeof this.parentElement['AddSceneAct'] !== 'function') {
            this.id_ = this.parentElement['AddSceneAct']({
                checkpoint: (this.checkpoint || []),
                actor: ({ target, fraction }) => ApplyRangeAndTransform(target, this.transform, fraction, this.from, this.to, this.unit),
            });
        }
    }
}
__decorate([
    Property({ type: 'array:number', checkStoredObject: true })
], AnimationSceneAct.prototype, "checkpoint", void 0);
__decorate([
    Property({ type: 'string' })
], AnimationSceneAct.prototype, "transform", void 0);
__decorate([
    Property({ type: 'string' })
], AnimationSceneAct.prototype, "unit", void 0);
__decorate([
    Property({ type: 'number' })
], AnimationSceneAct.prototype, "from", void 0);
__decorate([
    Property({ type: 'number' })
], AnimationSceneAct.prototype, "to", void 0);
export function AnimationSceneActElementCompact() {
    RegisterCustomElement(AnimationSceneAct);
}

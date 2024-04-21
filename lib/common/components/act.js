"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationSceneActElementCompact = exports.AnimationSceneActElement = void 0;
const inlinejs_element_1 = require("@benbraide/inlinejs-element");
const generic_1 = require("../actors/scene/generic");
const base_1 = require("./base");
class AnimationSceneActElement extends base_1.AnimationBaseElement {
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
        scope.AddUninitCallback(() => (this.parentElement && ('RemoveSceneAct' in this.parentElement) && typeof this.parentElement['RemoveSceneAct'] === 'function') && this.parentElement['RemoveSceneAct'](this));
    }
    AddToParent_() {
        if (!this.parentElement) {
            return; //Invalid context
        }
        (('RemoveSceneAct' in this.parentElement) && typeof this.parentElement['RemoveSceneAct'] === 'function') && this.parentElement['RemoveSceneAct'](this);
        if (('AddSceneAct' in this.parentElement) && typeof this.parentElement['AddSceneAct'] === 'function') {
            this.id_ = this.parentElement['AddSceneAct']({
                checkpoint: (this.checkpoint || []),
                actor: ({ target, fraction }) => (0, generic_1.ApplyRangeAndTransform)(target, this.transform, fraction, this.from, this.to, this.unit),
            });
        }
    }
}
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'array:number', checkStoredObject: true })
], AnimationSceneActElement.prototype, "checkpoint", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string' })
], AnimationSceneActElement.prototype, "transform", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'string' })
], AnimationSceneActElement.prototype, "unit", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'number' })
], AnimationSceneActElement.prototype, "from", void 0);
__decorate([
    (0, inlinejs_element_1.Property)({ type: 'number' })
], AnimationSceneActElement.prototype, "to", void 0);
exports.AnimationSceneActElement = AnimationSceneActElement;
function AnimationSceneActElementCompact() {
    (0, inlinejs_element_1.RegisterCustomElement)(AnimationSceneActElement, 'animation-scene-act');
}
exports.AnimationSceneActElementCompact = AnimationSceneActElementCompact;

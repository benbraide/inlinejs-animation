"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
    HandlePostAttributesProcessPostfix_() {
        super.HandlePostAttributesProcessPostfix_();
        this.AddToParent_();
    }
    HandleElementScopeDestroyed_(scope) {
        super.HandleElementScopeDestroyed_(scope);
        (this.parentElement && ('RemoveSceneAct' in this.parentElement) && typeof this.parentElement['RemoveSceneAct'] === 'function') && this.parentElement['RemoveSceneAct'](this);
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

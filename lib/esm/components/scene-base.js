var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Property } from "@benbraide/inlinejs-element";
import { AnimationPersonalActorElement } from "./personal";
export class AnimationSceneBaseElement extends AnimationPersonalActorElement {
    constructor() {
        super();
        this.factor = 0;
        this.unit = '';
        this.x = 'center';
        this.y = 'center';
    }
    GetName() {
        return '{AnimationSceneBaseElement}';
    }
}
__decorate([
    Property({ type: 'number' })
], AnimationSceneBaseElement.prototype, "factor", void 0);
__decorate([
    Property({ type: 'string' })
], AnimationSceneBaseElement.prototype, "unit", void 0);
__decorate([
    Property({ type: 'string', spread: 'origin' })
], AnimationSceneBaseElement.prototype, "x", void 0);
__decorate([
    Property({ type: 'string', spread: 'origin' })
], AnimationSceneBaseElement.prototype, "y", void 0);

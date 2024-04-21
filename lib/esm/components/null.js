import { RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationBaseActorElement } from "./actor-base";
export class AnimationNullElement extends AnimationBaseActorElement {
    constructor() {
        super();
    }
    Handle() { }
}
export function AnimationNullElementCompact() {
    RegisterCustomElement(AnimationNullElement, 'animation-null');
}

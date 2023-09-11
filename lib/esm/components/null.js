import { RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationElement } from "./base";
export class AnimationNull extends AnimationElement {
    constructor() {
        super();
    }
    GetName() {
        return '{AnimationNullElement}';
    }
    Handle() { }
}
export function AnimationNullElementCompact() {
    RegisterCustomElement(AnimationNull);
}

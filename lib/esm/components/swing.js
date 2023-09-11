import { RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationSceneBaseElement } from "./scene-base";
import { SwingAnimationCreator } from "../creators/swing";
export class AnimationSwing extends AnimationSceneBaseElement {
    constructor() {
        super();
        this.x = this.y = 'start';
    }
    CreateActor_() {
        return SwingAnimationCreator({
            factor: this.factor,
            unit: this.unit,
            origin: { x: this.x, y: this.y },
        });
    }
}
export function AnimationSwingElementCompact() {
    RegisterCustomElement(AnimationSwing);
}

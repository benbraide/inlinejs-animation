import { CustomElement } from "@benbraide/inlinejs-element";
export class AnimationElement extends CustomElement {
    constructor() {
        super({ isTemplate: true });
    }
    IsAnimationActor() {
        return true;
    }
    IsAnimationEase() {
        return false;
    }
    DisableTemplate_() {
        this.options_.isTemplate = false;
        this.options_.isHidden = true;
    }
}

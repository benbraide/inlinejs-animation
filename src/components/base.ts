import { CustomElement } from "@benbraide/inlinejs-element";

export class AnimationBaseElement extends CustomElement{
    public constructor(){
        super({ isTemplate: true });
    }

    public IsAnimationActor(){
        return true;
    }

    public IsAnimationEase(){
        return false;
    }
    
    protected DisableTemplate_(){
        this.options_.isTemplate = false;
        this.options_.isHidden = true;
    }
}

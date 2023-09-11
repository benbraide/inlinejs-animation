import { CustomElement } from "@benbraide/inlinejs-element";

export class AnimationElement extends CustomElement{
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

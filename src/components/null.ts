import { IAnimationActor } from "@benbraide/inlinejs";
import { RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationElement } from "./base";

export class AnimationNull extends AnimationElement implements IAnimationActor{
    public constructor(){
        super();
    }

    public GetName(){
        return '{AnimationNullElement}';
    }

    public Handle(){}
}

export function AnimationNullElementCompact(){
    RegisterCustomElement(AnimationNull);
}
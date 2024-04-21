import { RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationBaseActorElement } from "./actor-base";

export class AnimationNullElement extends AnimationBaseActorElement{
    public constructor(){
        super();
    }

    public Handle(){}
}

export function AnimationNullElementCompact(){
    RegisterCustomElement(AnimationNullElement, 'animation-null');
}
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { ComputeField, CreateTranslateAnimationCallback, TranslateAnimationActorAxisType } from "../actors/translate/generic";
import { AnimationPersonalActorElement } from "./personal";

export class AnimationTranslateElement extends AnimationPersonalActorElement{
    @Property({ type: 'string' })
    public axis: TranslateAnimationActorAxisType = 'both';

    @Property({ type: 'array', delimiter: ' ' })
    public unit = ['deg'];
    
    @Property({ type: 'array:number', delimiter: ' ' })
    public from = new Array<number>();

    @Property({ type: 'array:number', delimiter: ' ' })
    public to = new Array<number>();

    @Property({ type: 'array:number', delimiter: ' ' })
    public factor = [0];

    @Property({ type: 'array:number', delimiter: ' ' })
    public offset = [0];
    
    public constructor(){
        super();
    }

    protected CreateActor_(){
        return CreateTranslateAnimationCallback({
            axis: this.axis,
            unit: ComputeField(this.unit),
            from: ComputeField(this.from),
            to: ComputeField(this.to),
            factor: ComputeField(this.factor),
            offset: ComputeField(this.offset),
        });
    }
}

export function AnimationTranslateElementCompact(){
    RegisterCustomElement(AnimationTranslateElement, 'animation-translate');
}

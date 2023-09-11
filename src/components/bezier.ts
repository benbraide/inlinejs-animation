import { AnimationEaseCallbackType, IAnimationEase, IAnimationEaseParams } from "@benbraide/inlinejs";
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationElement } from "./base";
import { BezierAnimationEaseCreator } from "../creators/bezier";

export class EaseBezier extends AnimationElement implements IAnimationEase{
    protected actor_: AnimationEaseCallbackType | null = null;
    
    @Property({ type: 'number', spread: 'points' })
    public p1 = 0;

    @Property({ type: 'number', spread: 'points' })
    public p2 = 0;

    @Property({ type: 'number', spread: 'points' })
    public p3 = 0;

    @Property({ type: 'number', spread: 'points' })
    public p4 = 0;
    
    public constructor(){
        super();
    }

    public GetName(){
        return '{EaseBezierElement}';
    }

    public Handle(params: IAnimationEaseParams){
        this.actor_ = (this.actor_ || BezierAnimationEaseCreator([this.p1, this.p2, this.p3, this.p4]));
        return this.actor_(params);
    }
}

export function EaseBezierElementCompact(){
    RegisterCustomElement(EaseBezier);
}

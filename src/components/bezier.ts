import { AnimationEaseCallbackType, IAnimationEaseParams } from "@benbraide/inlinejs";
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { BezierAnimationEaseCreator } from "../creators/bezier";
import { AnimationBaseEaseElement } from "./ease-base";

export class EaseBezierElement extends AnimationBaseEaseElement{
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

    public Handle(params: IAnimationEaseParams){
        this.actor_ = (this.actor_ || BezierAnimationEaseCreator([this.p1, this.p2, this.p3, this.p4]));
        return this.actor_(params);
    }

    protected AttributeChanged_(name: string){
        this.instancePropertyNames_.includes(name) && (this.actor_ = null);
        super.AttributeChanged_(name);
    }
}

export function EaseBezierElementCompact(){
    RegisterCustomElement(EaseBezierElement, 'ease-bezier');
}

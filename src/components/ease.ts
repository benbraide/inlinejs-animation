import { EvaluateLater, IAnimationEaseParams } from "@benbraide/inlinejs";
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationEaseActorElement } from "./ease-actor";

export class EaseElement extends AnimationEaseActorElement{
    @Property({ type: 'string' })
    public expression = '';
    
    public constructor(){
        super();
        this.DisableTemplate_();
    }

    public Handle(params: IAnimationEaseParams){
        if (this.actor){
            return super.Handle(params);
        }

        if (!this.expression){
            return 0;
        }

        const evaluated = EvaluateLater({
            componentId: this.componentId_,
            contextElement: this,
            expression: this.expression,
            disableFunctionCall: false,
        })(undefined, [], params);

        return ((typeof evaluated === 'number') ? evaluated : 0);
    }
}

export function EaseElementCompact(){
    RegisterCustomElement(EaseElement, 'ease');
}

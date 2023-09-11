import { EvaluateLater, IAnimationEase, IAnimationEaseParams } from "@benbraide/inlinejs";
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationEaseActorElement } from "./ease-actor";
import { ResolveEaseName } from "../utilities/resolve";

export class Ease extends AnimationEaseActorElement implements IAnimationEase{
    protected name_ = '';
    
    @Property({ type: 'string' })
    public UpdateNameProperty(value: string){
        this.name_ = ResolveEaseName(this, this.name_, value);
    }

    @Property({ type: 'string' })
    public expression = '';
    
    public constructor(){
        super();
        this.DisableTemplate_();
    }

    public GetName(){
        return (this.name_ || '{AnimationEaseElement}');
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
    RegisterCustomElement(Ease);
}

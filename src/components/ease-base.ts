import { GetGlobal, IAnimationEase, IAnimationEaseParams, IAnimationConcept, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { Property } from "@benbraide/inlinejs-element";
import { AnimationBaseElement } from "./base";
import { ResolveEaseName } from "../utilities/resolve";

export class AnimationBaseEaseElement extends AnimationBaseElement implements IAnimationEase{
    protected name_ = '';
    
    @Property({ type: 'string' })
    public UpdateNameProperty(value: string){
        this.name_ = ResolveEaseName(this, this.name_, value);
    }

    public GetName(){
        return (this.name_ || '{AnimationBaseEaseElement}');
    }

    public Handle({ fraction }: IAnimationEaseParams){
        return fraction;
    }
    
    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined){
        super.HandleElementScopeCreated_({ scope, ...rest }, postAttributesCallback);
        scope.AddUninitCallback(() => this.name_ && GetGlobal().GetConcept<IAnimationConcept>('animation')?.GetEaseCollection().Remove(this.name_));
    }
}

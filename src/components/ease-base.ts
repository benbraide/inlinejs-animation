import { GetGlobal, IAnimationEase, IAnimationEaseParams, IAnimationConcept, IElementScopeCreatedCallbackParams, IElementScope } from "@benbraide/inlinejs";
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

    protected HandleElementScopeDestroyed_(scope: IElementScope): void {
        super.HandleElementScopeDestroyed_(scope);
        this.name_ && GetGlobal().GetConcept<IAnimationConcept>('animation')?.GetEaseCollection().Remove(this.name_);
    }
}

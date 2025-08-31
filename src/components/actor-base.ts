import { GetGlobal, IAnimationActor, IAnimationActorParams, IAnimationConcept, IElementScope } from "@benbraide/inlinejs";
import { Property } from "@benbraide/inlinejs-element";
import { AnimationBaseElement } from "./base";
import { ResolveActorName } from "../utilities/resolve";

export class AnimationBaseActorElement extends AnimationBaseElement implements IAnimationActor{
    protected name_ = '';
    
    @Property({ type: 'string' })
    public UpdateNameProperty(value: string){
        this.name_ = ResolveActorName(this, this.name_, value);
    }

    public GetName(){
        return (this.name_ || '{AnimationBaseActorElement}');
    }

    public Handle(params: IAnimationActorParams){}

    protected HandleElementScopeDestroyed_(scope: IElementScope): void {
        super.HandleElementScopeDestroyed_(scope);
        this.name_ && GetGlobal().GetConcept<IAnimationConcept>('animation')?.GetActorCollection().Remove(this.name_);
    }
}

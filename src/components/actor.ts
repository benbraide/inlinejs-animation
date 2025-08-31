import { Property } from "@benbraide/inlinejs-element";
import { AnimationActorCallbackType, AnimationEaseCallbackType, IAnimationActor, IAnimationActorParams, IAnimationEase, IAnimationEaseParams, IElementScope, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { ResolveActor } from "../utilities/resolve";
import { AnimationBaseActorElement } from "./actor-base";

export class AnimationActorElement extends AnimationBaseActorElement{
    @Property({ type: 'string', checkStoredObject: true })
    public actor: string | IAnimationActor | AnimationActorCallbackType = '';

    public constructor(){
        super();
    }

    public Handle(params: IAnimationActorParams){
        this.Handle_(params, null);
    }

    protected HandleElementScopeDestroyed_(scope: IElementScope): void {
        super.HandleElementScopeDestroyed_(scope);
        this.actor = '';
    }

    protected Handle_(params: IAnimationActorParams, ease: IAnimationEase | AnimationEaseCallbackType | null, timeRelative?: boolean){
        const actor = this.ResolveActor_();
        if (!actor){
            return;
        }
        
        if (ease){
            const easeParams: IAnimationEaseParams = {
                duration: params.duration,
                elapsed: params.elapsed,
                fraction: (timeRelative ? params.elapsedFraction : params.fraction),
            };
            
            const computedFraction = ((typeof ease === 'function') ? ease(easeParams) : ease.Handle(easeParams));
            let updatedParams: IAnimationActorParams = { ...params };

            if (timeRelative){
                updatedParams.elapsedFraction = computedFraction;
            }
            else{
                updatedParams.fraction = computedFraction;
            }

            ((typeof actor === 'function') ? actor(updatedParams) : actor.Handle(updatedParams));
        }
        else{
            ((typeof actor === 'function') ? actor(params) : actor.Handle(params));
        }
    }
    
    protected ResolveActor_(){
        return ResolveActor(this, this.actor);
    }
}

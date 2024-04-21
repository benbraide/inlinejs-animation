import { Property } from "@benbraide/inlinejs-element";
import { AnimationEaseCallbackType, IAnimationEase, IAnimationEaseParams, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { ResolveEase } from "../utilities/resolve";
import { AnimationBaseEaseElement } from "./ease-base";

export class AnimationEaseActorElement extends AnimationBaseEaseElement{
    @Property({ type: 'string', checkStoredObject: true })
    public actor: string | IAnimationEase | AnimationEaseCallbackType = '';

    public constructor(){
        super();
    }

    public IsAnimationActor(){
        return false;
    }

    public IsAnimationEase(){
        return true;
    }

    public Handle(params: IAnimationEaseParams){
        const actor = this.ResolveActor_();
        return ((actor && ((typeof actor === 'function') ? actor(params) : actor.Handle(params))) || 0);
    }

    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined){
        super.HandleElementScopeCreated_({ scope, ...rest }, postAttributesCallback);
        scope.AddUninitCallback(() => (this.actor = ''));
    }

    protected ResolveActor_(){
        return ResolveEase(this, this.actor);
    }
}

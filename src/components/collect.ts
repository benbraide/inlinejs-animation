import { IAnimationActor, IAnimationActorParams, IElementScope, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { ConcurrentCompositeAnimationActor } from "../actors/composite/concurrent";
import { RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationBaseActorElement } from "./actor-base";

export class AnimationCollectElement extends AnimationBaseActorElement{
    private actor_: ConcurrentCompositeAnimationActor | null = new ConcurrentCompositeAnimationActor([]);
    
    public constructor(){
        super();
        this.DisableTemplate_();
    }

    public Handle(params: IAnimationActorParams){
        this.actor_ && this.actor_.Handle(params);
    }

    protected HandleElementScopeCreatedPostfix_({ scope, ...rest }: IElementScopeCreatedCallbackParams): void {
        super.HandleElementScopeCreatedPostfix_({ scope, ...rest });
        scope.AddTreeChangeCallback(() => this.RefreshCollection_());
    }

    protected HandleElementScopeDestroyed_(scope: IElementScope): void {
        super.HandleElementScopeDestroyed_(scope);
        this.actor_?.RemoveAll();
        this.actor_ = null;
    }

    protected HandlePostProcess_(): void {
        super.HandlePostProcess_();
        this.RefreshCollection_();
    }

    protected RefreshCollection_(){
        this.actor_ && this.actor_.RemoveAll();
        this.actor_ && [...this.children].forEach(child => ('Handle' in child && typeof child['Handle'] === 'function' && this.actor_!.AddActor(child as unknown as IAnimationActor)));
    }
}

export function AnimationCollectElementCompact(){
    RegisterCustomElement(AnimationCollectElement, 'animation-collect');
}

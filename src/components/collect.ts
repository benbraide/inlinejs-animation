import { IAnimationActor, IAnimationActorParams, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
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

    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined){
        super.HandleElementScopeCreated_({ scope, ...rest }, postAttributesCallback);
        scope.AddPostProcessCallback(() => this.RefreshCollection_());
        scope.AddTreeChangeCallback(() => this.RefreshCollection_());
        scope.AddUninitCallback(() => (this.actor_ = null));
    }

    protected RefreshCollection_(){
        this.actor_ && this.actor_.RemoveAll();
        this.actor_ && [...this.children].forEach(child => ('Handle' in child && typeof child['Handle'] === 'function' && this.actor_!.AddActor(child as unknown as IAnimationActor)));
    }
}

export function AnimationCollectElementCompact(){
    RegisterCustomElement(AnimationCollectElement, 'animation-collect');
}

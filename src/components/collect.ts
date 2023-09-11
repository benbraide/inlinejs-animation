import { IAnimationActor, IAnimationActorParams, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { ConcurrentCompositeAnimationActor } from "../actors/composite/concurrent";
import { AnimationElement } from "./base";
import { RegisterCustomElement } from "@benbraide/inlinejs-element";

export class AnimationCollect extends AnimationElement implements IAnimationActor{
    private actor_: ConcurrentCompositeAnimationActor | null = new ConcurrentCompositeAnimationActor([]);
    
    public constructor(){
        super();
        this.DisableTemplate_();
    }

    public GetName(){
        return '{ConcurrentAnimationElement}';
    }

    public Handle(params: IAnimationActorParams){
        this.actor_ && this.actor_.Handle(params);
    }

    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined){
        super.HandleElementScopeCreated_({ scope, ...rest }, postAttributesCallback);

        scope.AddPostProcessCallback(() => {
            [...this.children].forEach(child => ('Handle' in child && typeof child['Handle'] === 'function' && this.actor_?.AddActor(child as unknown as IAnimationActor)));
        });

        scope.AddTreeChangeCallback(({ added, removed }) => {
            removed.forEach(child => this.actor_?.RemoveActor(child as unknown as IAnimationActor));
            added.forEach(child => ('Handle' in child && typeof child['Handle'] === 'function' && this.actor_?.AddActor(child as unknown as IAnimationActor)));
        });
        
        scope.AddUninitCallback(() => (this.actor_ = null));
    }
}

export function AnimationCollectElementCompact(){
    RegisterCustomElement(AnimationCollect);
}

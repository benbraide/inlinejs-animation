import { AnimationActorCallbackType, IAnimationActor, IAnimationActorParams, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { AnimationBaseActorElement } from "./actor-base";

export class AnimationPersonalActorElement extends AnimationBaseActorElement{
    protected actor_: IAnimationActor | AnimationActorCallbackType | null = null;

    public constructor(){
        super();
    }
    
    public Handle(params: IAnimationActorParams){
        this.UpdateActor_();
        this.actor_ && ((typeof this.actor_ === 'function') ? this.actor_(params) : this.actor_.Handle(params));
    }

    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined){
        super.HandleElementScopeCreated_({ scope, ...rest }, postAttributesCallback);
        scope.AddUninitCallback(() => (this.actor_ = null));
    }

    protected AttributeChanged_(name: string){
        this.ShouldRefreshActor_(name) && (this.actor_ = null);
        super.AttributeChanged_(name);
    }

    protected ShouldRefreshActor_(name: string){
        return this.instancePropertyNames_.includes(name);
    }

    protected UpdateActor_(){
        this.actor_ = (this.actor_ || this.CreateActor_());
    }

    protected CreateActor_(): IAnimationActor | AnimationActorCallbackType | null{
        return null;
    }
}

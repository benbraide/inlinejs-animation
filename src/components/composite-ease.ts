import { IAnimationEaseParams, IAnimationEase, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { RegisterCustomElement } from "@benbraide/inlinejs-element";
import { AnimationBaseEaseElement } from "./ease-base";
import { CompositeAnimationEase } from "../easing/composite";

export class CompositeEaseElement extends AnimationBaseEaseElement{
    private actor_: CompositeAnimationEase | null = new CompositeAnimationEase([]);
    
    public constructor(){
        super();
        this.DisableTemplate_();
    }

    public Handle(params: IAnimationEaseParams){
        return (this.actor_ ? this.actor_.Handle(params) : params.fraction);
    }

    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined){
        super.HandleElementScopeCreated_({ scope, ...rest }, postAttributesCallback);
        scope.AddPostProcessCallback(() => this.RefreshCollection_());
        scope.AddTreeChangeCallback(() => this.RefreshCollection_());
        scope.AddUninitCallback(() => (this.actor_ = null));
    }

    protected RefreshCollection_(){
        this.actor_ && this.actor_.RemoveAll();
        this.actor_ && [...this.children].forEach(child => ('Handle' in child && typeof child['Handle'] === 'function' && this.actor_!.AddEase(child as unknown as IAnimationEase)));
    }
}

export function CompositeEaseElementCompact(){
    RegisterCustomElement(CompositeEaseElement, 'ease-composite');
}

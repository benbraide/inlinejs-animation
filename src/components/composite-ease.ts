import { IAnimationEaseParams, IAnimationEase, IElementScopeCreatedCallbackParams, IElementScope } from "@benbraide/inlinejs";
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
        this.actor_ && [...this.children].forEach(child => ('Handle' in child && typeof child['Handle'] === 'function' && this.actor_!.AddEase(child as unknown as IAnimationEase)));
    }
}

export function CompositeEaseElementCompact(){
    RegisterCustomElement(CompositeEaseElement, 'ease-composite');
}

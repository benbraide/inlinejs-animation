import { IAnimationActor, IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { ISharedActorSlice } from "../actors/composite/shared";
import { AnimationActorElement } from "./actor";

export class AnimationSlice extends AnimationActorElement implements IAnimationActor{
    @Property({ type: 'number' })
    public from = 0;

    @Property({ type: 'number' })
    public to = 1;

    @Property({ type: 'boolean' })
    public timeRelative = false;
    
    public constructor(){
        super();
        this.DisableTemplate_();
    }

    public GetName(){
        return '{AnimationSliceElement}';
    }

    public HandleFraction(fraction: number){
        if ((this.from || 0) <= fraction && (this.to || 1) >= fraction){
            return ((fraction - (this.from || 0)) / ((this.to || 1) - (this.from || 0)));
        }
        return null;
    }

    public IsTimeRelative(){
        return this.timeRelative;
    }

    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined){
        super.HandleElementScopeCreated_({ scope, ...rest }, () => {
            this.AddToParent_();
            postAttributesCallback && postAttributesCallback();
        });
    }

    protected AddToParent_(){
        if (this.parentElement && ('AddSlice' in this.parentElement) && typeof this.parentElement['AddSlice'] === 'function'){
            (this.parentElement['AddSlice'] as any)(<ISharedActorSlice>{
                actor: this,
                slice: { from: this.from, to: this.to },
            });
        }
    }
}

export function AnimationSliceElementCompact(){
    RegisterCustomElement(AnimationSlice);
}

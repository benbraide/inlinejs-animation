import { IElementScopeCreatedCallbackParams } from "@benbraide/inlinejs";
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { ApplyRangeAndTransform } from "../actors/scene/generic";
import { AnimationBaseElement } from "./base";

export class AnimationSceneActElement extends AnimationBaseElement{
    private id_ = '';
    
    @Property({ type: 'array:number', checkStoredObject: true })
    public checkpoint = new Array<number>();

    @Property({ type: 'string' })
    public transform = '';

    @Property({ type: 'string' })
    public unit = '';

    @Property({ type: 'number' })
    public from = 0;

    @Property({ type: 'number' })
    public to = 0;
    
    public constructor(){
        super();
    }

    protected HandleElementScopeCreated_({ scope, ...rest }: IElementScopeCreatedCallbackParams, postAttributesCallback?: (() => void) | undefined){
        super.HandleElementScopeCreated_({ scope, ...rest }, () => {
            this.AddToParent_();
            postAttributesCallback && postAttributesCallback();
        });

        scope.AddUninitCallback(() => (this.parentElement && ('RemoveSceneAct' in this.parentElement) && typeof this.parentElement['RemoveSceneAct'] === 'function') && (this.parentElement['RemoveSceneAct'] as any)(this));
    }

    private AddToParent_(){
        if (!this.parentElement){
            return;//Invalid context
        }

        (('RemoveSceneAct' in this.parentElement) && typeof this.parentElement['RemoveSceneAct'] === 'function') && (this.parentElement['RemoveSceneAct'] as any)(this);
        if (('AddSceneAct' in this.parentElement) && typeof this.parentElement['AddSceneAct'] === 'function'){
            this.id_ = (this.parentElement['AddSceneAct'] as any)({
                checkpoint: (this.checkpoint || []),
                actor: ({ target, fraction }) => ApplyRangeAndTransform(target, this.transform, fraction, this.from, this.to, this.unit),
            });
        }
    }
}

export function AnimationSceneActElementCompact(){
    RegisterCustomElement(AnimationSceneActElement, 'animation-scene-act');
}
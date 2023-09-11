import { IAnimationActor } from "@benbraide/inlinejs";
import { Property, RegisterCustomElement } from "@benbraide/inlinejs-element";
import { CreateSceneAnimationCallback, ISceneAnimationFrame, SceneAnimatorActorOriginType } from "../actors/scene/generic";
import { AnimationPersonalActorElement } from "./personal";

interface IAnimationSceneAct{
    id: string;
    act: ISceneAnimationFrame;
}

export class AnimationScene extends AnimationPersonalActorElement implements IAnimationActor{
    private acts_ = new Array<IAnimationSceneAct>();
    private idOffset_ = -1;

    @Property({ type: 'string', spread: 'origin' })
    public x: SceneAnimatorActorOriginType = 'center';

    @Property({ type: 'string', spread: 'origin' })
    public y: SceneAnimatorActorOriginType = 'center';
    
    public constructor(){
        super();
        this.DisableTemplate_();
    }

    public GetName(){
        return '{AnimationSceneElement}';
    }

    public AddSceneAct(act: ISceneAnimationFrame){
        const id = `scene-act-${++this.idOffset_}`;
        this.acts_.push({ id, act });
        return id;
    }

    public RemoveSceneAct(id: string){
        this.acts_ = this.acts_.filter(info => (info.id !== id));
    }

    protected CreateActor_(){
        return CreateSceneAnimationCallback({
            frames: this.acts_.map(info => info.act),
            origin: { x: (this.x || 'center'), y: (this.y || 'center') },
        });
    }
}

export function AnimationSceneElementCompact(){
    RegisterCustomElement(AnimationScene);
}
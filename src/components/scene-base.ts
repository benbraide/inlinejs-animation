import { Property } from "@benbraide/inlinejs-element";
import { AnimationPersonalActorElement } from "./personal";
import { SceneAnimatorActorOriginType } from "../actors/scene/generic";

export class AnimationSceneBaseElement extends AnimationPersonalActorElement{
    @Property({ type: 'number' })
    public factor = 0;

    @Property({ type: 'string' })
    public unit = '';

    @Property({ type: 'string', spread: 'origin' })
    public x: SceneAnimatorActorOriginType = 'center';

    @Property({ type: 'string', spread: 'origin' })
    public y: SceneAnimatorActorOriginType = 'center';
    
    public constructor(){
        super();
    }
}

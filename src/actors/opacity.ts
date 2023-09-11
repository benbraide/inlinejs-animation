import { AddAnimationActor } from "./add";
import { CreateAnimationActorCallback } from "./callback";

export const OpacityAnimationActor = CreateAnimationActorCallback('opacity', ({ fraction, target, stage, restore }) => {
    target.style.opacity = fraction.toString();
    restore && (stage === 'end') && target.style.removeProperty('opacity');
});

export function OpacityAnimationActorCompact(){
    AddAnimationActor(OpacityAnimationActor);
}

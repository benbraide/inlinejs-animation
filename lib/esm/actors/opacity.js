import { AddAnimationActor } from "./add";
import { CreateAnimationActorCallback } from "./callback";
export const OpacityAnimationActor = CreateAnimationActorCallback('opacity', ({ fraction, target }) => (target.style.opacity = fraction.toString()));
export function OpacityAnimationActorCompact() {
    AddAnimationActor(OpacityAnimationActor);
}

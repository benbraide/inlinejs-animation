import { AddAnimationActor } from "../add";
import { CreateTranslateAnimationActor } from "./generic";
export const SlideLeftAnimationActor = CreateTranslateAnimationActor({ name: 'slideLeft', axis: 'x' });
export function SlideLeftAnimationActorCompact() {
    AddAnimationActor(SlideLeftAnimationActor);
}

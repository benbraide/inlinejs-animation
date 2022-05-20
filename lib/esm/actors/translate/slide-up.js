import { AddAnimationActor } from "../add";
import { CreateTranslateAnimationActor } from "./generic";
export const SlideUpAnimationActor = CreateTranslateAnimationActor({ name: 'slideUp', axis: 'y' });
export function SlideUpAnimationActorCompact() {
    AddAnimationActor(SlideUpAnimationActor);
}

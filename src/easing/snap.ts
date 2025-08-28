import { AddAnimationEase } from "./add";
import { CreateAnimationEaseCallback } from "./callback";

export function CreateSnapEase(){
    let snappedValue = 0, endValue = 0;
    return CreateAnimationEaseCallback('snap', ({ fraction, elapsed }) => {
        elapsed == 0 && (snappedValue = fraction <= 0 ? 0 : 1);
        elapsed == 0 && (endValue = fraction <= 0 ? 1 : 0);
        return fraction == endValue ? endValue : snappedValue;
    });
}

export const SnapAnimationEase = CreateSnapEase();

export function SnapAnimationEaseCompact(){
    AddAnimationEase(SnapAnimationEase);
}

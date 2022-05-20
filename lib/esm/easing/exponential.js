import { AddAnimationEase } from "./add";
import { CreateAnimationEaseCallback } from "./callback";
export const ExponentialAnimationEase = CreateAnimationEaseCallback('exponential', ({ fraction }) => ((fraction == 1) ? fraction : (1 - Math.pow(2, (-10 * fraction)))));
export function ExponentialAnimationEaseCompact() {
    AddAnimationEase(ExponentialAnimationEase);
}
export const ExponentialInAnimationEase = CreateAnimationEaseCallback('exponentialIn', ({ fraction }) => ((fraction == 0) ? 0 : Math.pow(2, ((10 * fraction) - 10))));
export function ExponentialInAnimationEaseCompact() {
    AddAnimationEase(ExponentialInAnimationEase);
}
export const ExponentialOutAnimationEase = { name: `${ExponentialAnimationEase.name}Out`, callback: ExponentialAnimationEase.callback };
export function ExponentialOutAnimationEaseCompact() {
    AddAnimationEase(ExponentialOutAnimationEase);
}
export const ExponentialInOutAnimationEase = CreateAnimationEaseCallback('exponentialInOut', ({ fraction }) => ((fraction == 1) ? fraction : (1 - Math.pow(2, (-10 * fraction)))));
export function ExponentialInOutAnimationEaseCompact() {
    AddAnimationEase(ExponentialInOutAnimationEase);
}

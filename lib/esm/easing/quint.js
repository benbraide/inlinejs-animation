import { AddAnimationEase } from "./add";
import { CreateAnimationEaseCallback } from "./callback";
export const QuintAnimationEase = CreateAnimationEaseCallback('quint', ({ fraction }) => (1 - Math.pow((1 - fraction), 5)));
export function QuintAnimationEaseCompact() {
    AddAnimationEase(QuintAnimationEase);
}
export const QuintInAnimationEase = CreateAnimationEaseCallback('quintIn', ({ fraction }) => Math.pow((1 - fraction), 5));
export function QuintInAnimationEaseCompact() {
    AddAnimationEase(QuintInAnimationEase);
}
export const QuintOutAnimationEase = { name: `${QuintAnimationEase.name}Out`, callback: QuintAnimationEase.callback };
export function QuintOutAnimationEaseCompact() {
    AddAnimationEase(QuintOutAnimationEase);
}
export const QuintInOutAnimationEase = CreateAnimationEaseCallback('quintInOut', ({ fraction }) => {
    return ((fraction < 0.5) ? (16 * Math.pow(fraction, 5)) : (1 - (Math.pow(((-2 * fraction) + 2), 5) / 2)));
});
export function QuintInOutAnimationEaseCompact() {
    AddAnimationEase(QuintInOutAnimationEase);
}

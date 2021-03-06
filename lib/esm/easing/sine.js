import { AddAnimationEase } from "./add";
import { CreateAnimationEaseCallback } from "./callback";
export const SineAnimationEase = CreateAnimationEaseCallback('sine', ({ fraction }) => Math.sin((fraction * Math.PI) / 2));
export function SineAnimationEaseCompact() {
    AddAnimationEase(SineAnimationEase);
}
export const SineInAnimationEase = CreateAnimationEaseCallback('sineIn', ({ fraction }) => (1 - Math.cos((fraction * Math.PI) / 2)));
export function SineInAnimationEaseCompact() {
    AddAnimationEase(SineInAnimationEase);
}
export const SineOutAnimationEase = { name: `${SineAnimationEase.name}Out`, callback: SineAnimationEase.callback };
export function SineOutAnimationEaseCompact() {
    AddAnimationEase(SineOutAnimationEase);
}
export const SineInOutAnimationEase = CreateAnimationEaseCallback('sineInOut', ({ fraction }) => (-(Math.cos(Math.PI * fraction) - 1) / 2));
export function SineInOutAnimationEaseCompact() {
    AddAnimationEase(SineInOutAnimationEase);
}

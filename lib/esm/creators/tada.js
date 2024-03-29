import { ApplyRange, ApplyTransform, CreateSceneAnimationCallback } from "../actors/scene/generic";
export function TadaAnimationCreator({ factor = 3, fromFactor = 0.9, toFactor = 1.17, unit = 'deg', origin } = {}) {
    factor = (factor || 3);
    fromFactor = (fromFactor || 0.9);
    toFactor = (toFactor || 1.17);
    unit = (unit || 'deg');
    return CreateSceneAnimationCallback({
        frames: [
            { checkpoint: 0, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, 0, 0, null, 1, unit) },
            { checkpoint: 1, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, 0, factor, 1, fromFactor, unit, true) },
            { checkpoint: 10, actor: () => { } },
            { checkpoint: 20, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, -factor, factor, fromFactor, toFactor, unit) },
            { checkpoint: 30, actor: () => { } },
            { checkpoint: [40, 60, 80], actor: ({ target, fraction }) => ComputeAndApply(target, fraction, -factor, factor, null, toFactor, unit) },
            { checkpoint: [50, 70], actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, -factor, null, toFactor, unit) },
            { checkpoint: 90, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, factor, 0, toFactor, 1, unit) },
            { checkpoint: 100, actor: ({ target, fraction }) => ComputeAndApply(target, fraction, 0, 0, null, 1, unit) },
        ],
        origin,
    });
}
function ComputeAndApply(target, fraction, rotateFrom, rotateTo, fromFactor, toFactor, unit, pivot = false) {
    let scaleValue = ((fromFactor === null) ? toFactor : ApplyRange(fraction, fromFactor, toFactor));
    let rotateValue = ApplyRange(fraction, rotateFrom, rotateTo);
    let rotateTranslateValue = (pivot ? ApplyRange(fraction, 0, 1) : 1);
    target.style.transform = target.style.transform.replace(/[ ]*rotate([XYZ]|3d)?\(.+?\)/, '');
    target.style.transform += ` rotate3d(0,0,${rotateTranslateValue},${rotateValue}${unit})`;
    ApplyTransform(target, 'scale', `${scaleValue},${scaleValue}`);
}

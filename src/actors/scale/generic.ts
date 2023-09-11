import { CreateAnimationActorCallback } from "../callback";

export type ScaleAnimatorActorAxisType = 'x' | 'y' | 'xy' | 'both';
export type ScaleAnimatorActorOriginType = 'start' | 'center' | 'end';

export interface IScaleAnimatorActorOrigin{
    x: ScaleAnimatorActorOriginType;
    y: ScaleAnimatorActorOriginType;
}

export interface IScaleAnimationCallbackInfo{
    axis?: ScaleAnimatorActorAxisType;
    origin?: IScaleAnimatorActorOrigin;
    factor?: number;
    from?: number;
    to?: number;
    offset?: number;
}

export interface IScaleAnimatorActorInfo extends IScaleAnimationCallbackInfo{
    name: string;
}

export function CreateScaleAnimationCallback({ axis, origin, factor, from, to, offset }: IScaleAnimationCallbackInfo = {}){
    let translateOrigin = (value: ScaleAnimatorActorOriginType) => ((value !== 'center') ? ((value === 'end') ? '100%' : '0%') : '50%');
    let translatedOrigin = `${translateOrigin(origin?.x || 'center')} ${translateOrigin(origin?.y || 'center')}`;

    let computeDelta: (fraction: number) => number;
    if (typeof from === 'number' && typeof to === 'number'){
        let factor = (to - from);
        computeDelta = fraction => (from + (factor * fraction));
    }
    else{//Use factor
        let validFactor = ((factor && factor > 0) ? factor : 1);
        computeDelta = fraction => ((validFactor != 1) ? ((validFactor < 1) ? (1 - (validFactor * (1 - fraction))) : (((validFactor - 1) - ((validFactor - 1) * fraction)) + 1)) : fraction);
    }
    
    return ({ fraction, target, stage }) => {
        if (stage === 'start'){
            target.style.transformOrigin = translatedOrigin;
        }

        let delta = computeDelta(fraction), x: number, y: number;
        if (axis === 'x'){
            x = delta;
            y = (offset || 1);
        }
        else if (axis === 'y'){
            x = (offset || 1);
            y = delta;
        }
        else{
            x = y = delta;
        }

        let value = `scale(${x}, ${y})`;

        target.style.transform = target.style.transform.replace(/[ ]*scale[XY]?\(.+?\)/g, '');
        target.style.transform += ` ${value}`;
    };
}

export function CreateScaleAnimationActor({ name, ...rest }: IScaleAnimatorActorInfo){
    return CreateAnimationActorCallback(name, CreateScaleAnimationCallback(rest));
}

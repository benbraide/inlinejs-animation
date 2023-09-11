import { CreateAnimationActorCallback } from "../callback";

export type RotateAnimationActorAxisType = 'x' | 'y' | 'z' | 'xy' | 'xz' | 'yz' | 'xyz' | 'all';
export type RotateAnimatorActorOriginType = 'start' | 'center' | 'end';

export interface IRotateAnimatorActorOrigin{
    x: RotateAnimatorActorOriginType;
    y: RotateAnimatorActorOriginType;
}

export interface IRotateAnimationCallbackInfo{
    axis?: RotateAnimationActorAxisType;
    origin?: IRotateAnimatorActorOrigin;
    factor?: number;
    from?: number;
    to?: number;
    unit?: string;
}

export interface IRotateAnimationActorInfo extends IRotateAnimationCallbackInfo{
    name: string;
}

export const DefaultRotateAnimationActorFactor = 360;
export const DefaultRotateAnimationActorUnit = 'deg';

export function CreateRotateAnimationCallback({ axis = 'z', origin, factor, from, to, unit }: IRotateAnimationCallbackInfo = {}){
    let translateOrigin = (value: RotateAnimatorActorOriginType) => ((value !== 'center') ? ((value === 'end') ? '100%' : '0%') : '50%');
    let translatedOrigin = `${translateOrigin(origin?.x || 'center')} ${translateOrigin(origin?.y || 'center')}`;
    let validUnit = (unit || DefaultRotateAnimationActorUnit), computeDelta: (fraction: number) => number;

    if (typeof from === 'number' && typeof to === 'number'){
        let factor = (to - from);
        computeDelta = fraction => (from + (factor * fraction));
    }
    else{//Use factor
        let validFactor = (factor || DefaultRotateAnimationActorFactor);
        computeDelta = fraction => ((validFactor < 0) ? (validFactor + (-validFactor * fraction)) : (validFactor - (validFactor * fraction)));
    }
    
    return ({ fraction, target, stage }) => {
        if (stage === 'start'){
            target.style.transformOrigin = translatedOrigin;
        }
        
        let delta = computeDelta(fraction), axisList = {
            x: ((axis === 'x' || axis === 'xy' || axis === 'xz' || axis === 'xyz' || axis === 'all') ? 1 : 0),
            y: ((axis === 'y' || axis === 'xy' || axis === 'yz' || axis === 'xyz' || axis === 'all') ? 1 : 0),
            z: ((!axis || axis === 'z' || axis === 'xz' || axis === 'yz' || axis === 'xyz' || axis === 'all') ? 1 : 0),
        };

        target.style.transform = target.style.transform.replace(/[ ]*rotate([XYZ]|3d)?\(.+?\)/g, '');
        target.style.transform += ` rotate3d(${axisList.x},${axisList.y},${axisList.z},${delta}${validUnit})`;
    };
}

export function CreateRotateAnimationActor({ name, ...rest }: IRotateAnimationActorInfo){
    return CreateAnimationActorCallback(name, CreateRotateAnimationCallback(rest));
}

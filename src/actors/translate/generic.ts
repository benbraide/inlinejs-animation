import { CreateAnimationActorCallback } from "../callback";

export type TranslateAnimationActorAxisType = 'x' | 'y' | 'both';

export interface ITranslateAnimationCallbackInfo{
    axis?: TranslateAnimationActorAxisType;
    factor?: number | [number, number];
    from?: number | [number, number];
    to?: number | [number, number];
    offset?: number | [number, number];
    unit?: string | [string, string];
}

export interface ITranslateAnimationActorInfo extends ITranslateAnimationCallbackInfo{
    name: string;
}

export const DefaultTranslateAnimationActorFactor = 9999;
export const DefaultTranslateAnimationActorUnit = 'px';

function GetEntry(index: number, value?: number | [number, number]){
    return ((!value || typeof value === 'number') ? (value || 0) : (value[index] || 0));
}

function GetStringEntry(index: number, value?: string | [string, string]){
    return ((!value || typeof value === 'string') ? (value || '') : (value[index] || ''));
}

export function ComputeField<T>(field?: Array<T>): T | [T, T] | undefined{
    if (!field || field.length == 0){
        return undefined;
    }

    return ((field.length == 1) ? field[0] : [field[0], field[1]]);
}

export function CreateTranslateAnimationCallback({ axis, factor, from, to, offset, unit }: ITranslateAnimationCallbackInfo = {}){
    let computeDelta: (fraction: number) => [number, number], computeFactor = (factor: number, fraction: number) => {
        return ((factor < 0) ? (factor + (-factor * fraction)) : (factor - (factor * fraction)));
    };

    const xOffset = GetEntry(0, offset), yOffset = GetEntry(1, offset);
    const xUnit = (GetStringEntry(0, unit) || DefaultTranslateAnimationActorUnit), yUnit = (GetStringEntry(1, unit) || DefaultTranslateAnimationActorUnit);

    if (Array.isArray(from) && Array.isArray(to)){
        const xFrom = GetEntry(0, from), xTo = GetEntry(0, to), yFrom = GetEntry(1, from), yTo = GetEntry(1, to);
        const computedFactor = [(xTo - xFrom), (yTo - yFrom)];
        computeDelta = (fraction) => {
            const computed = [(xFrom + (computedFactor[0] * fraction)), (yFrom + (computedFactor[1] * fraction))];
            return [((axis === 'y') ? xOffset : computed[0]), ((axis === 'x') ? yOffset : computed[1])];
        };
    }
    else if (typeof from === 'number' && typeof to === 'number'){
        const computedFactor = (to - from);
        computeDelta = (fraction) => {
            const computed = (from + (computedFactor * fraction));
            return [((axis === 'y') ? xOffset : computed), ((axis === 'x') ? yOffset : computed)];
        };
    }
    else if (Array.isArray(factor)){
        const validFactors = [(factor[0] || DefaultTranslateAnimationActorFactor), (factor[1] || DefaultTranslateAnimationActorFactor)];
        computeDelta = (fraction) => {
            return [
                ((axis === 'y') ? xOffset : computeFactor(validFactors[0], fraction)),
                ((axis === 'x') ? xOffset : computeFactor(validFactors[1], fraction)),
            ];
        };
    }
    else{//Use factor
        const validFactor = (factor || DefaultTranslateAnimationActorFactor);
        computeDelta = (fraction) => {
            const computed = computeFactor(validFactor, fraction);
            return [((axis === 'y') ? xOffset : computed), ((axis === 'x') ? yOffset : computed)];
        };
    }
    
    return ({ fraction, target }) => {
        const delta = computeDelta(fraction), value = `translate(${delta[0]}${xUnit}, ${delta[1]}${yUnit})`;

        target.style.transform = target.style.transform.replace(/[ ]*translate[XY]?\(.+?\)/g, '');
        target.style.transform += ` ${value}`;
    };
}

export function CreateTranslateAnimationActor({ name, ...rest }: ITranslateAnimationActorInfo){
    return CreateAnimationActorCallback(name, CreateTranslateAnimationCallback(rest));
}

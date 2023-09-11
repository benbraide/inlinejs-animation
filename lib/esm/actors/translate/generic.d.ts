export declare type TranslateAnimationActorAxisType = 'x' | 'y' | 'both';
export interface ITranslateAnimationCallbackInfo {
    axis?: TranslateAnimationActorAxisType;
    factor?: number | [number, number];
    from?: number | [number, number];
    to?: number | [number, number];
    offset?: number | [number, number];
    unit?: string | [string, string];
}
export interface ITranslateAnimationActorInfo extends ITranslateAnimationCallbackInfo {
    name: string;
}
export declare const DefaultTranslateAnimationActorFactor = 9999;
export declare const DefaultTranslateAnimationActorUnit = "px";
export declare function ComputeField<T>(field?: Array<T>): T | [T, T] | undefined;
export declare function CreateTranslateAnimationCallback({ axis, factor, from, to, offset, unit }?: ITranslateAnimationCallbackInfo): ({ fraction, target }: {
    fraction: any;
    target: any;
}) => void;
export declare function CreateTranslateAnimationActor({ name, ...rest }: ITranslateAnimationActorInfo): import("@benbraide/inlinejs").IAnimationActorCallbackDetails;

export declare type ScaleAnimatorActorAxisType = 'x' | 'y' | 'xy' | 'both';
export declare type ScaleAnimatorActorOriginType = 'start' | 'center' | 'end';
export interface IScaleAnimatorActorOrigin {
    x: ScaleAnimatorActorOriginType;
    y: ScaleAnimatorActorOriginType;
}
export interface IScaleAnimationCallbackInfo {
    axis?: ScaleAnimatorActorAxisType;
    origin?: IScaleAnimatorActorOrigin;
    factor?: number;
    from?: number;
    to?: number;
    offset?: number;
}
export interface IScaleAnimatorActorInfo extends IScaleAnimationCallbackInfo {
    name: string;
}
export declare function CreateScaleAnimationCallback({ axis, origin, factor, from, to, offset }?: IScaleAnimationCallbackInfo): ({ fraction, target, stage }: {
    fraction: any;
    target: any;
    stage: any;
}) => void;
export declare function CreateScaleAnimationActor({ name, ...rest }: IScaleAnimatorActorInfo): import("@benbraide/inlinejs").IAnimationActorCallbackDetails;

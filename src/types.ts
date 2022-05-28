import { IAnimationTransition, IComponent } from "@benbraide/inlinejs";

export interface IAnimationTransitionExtended extends IAnimationTransition{
    target?: HTMLElement;
}

export interface IFindTransitionDataParams{
    componentId: string;
    component?: IComponent;
    contextElement: HTMLElement;
}
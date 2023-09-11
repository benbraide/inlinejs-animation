import {
    GetGlobal,
    AddMagicHandler,
    CreateMagicHandlerCallback,
    BuildGetterProxyOptions,
    CreateInplaceProxy,
    AnimationActorCallbackType,
    IAnimationActor,
    IAnimationConcept,
    AnimationEaseCallbackType,
    IAnimationEaseParams
} from "@benbraide/inlinejs";

import { ApplyRange, ApplyRangeAndTransform, ApplyTransform, FormatValue } from "../actors/scene/generic";
import { CallAnimationEase } from "../easing/call";
import { ConcurrentCompositeAnimationActor } from "../actors/composite/concurrent";
import { ISharedActorSlice, SharedCompositeAnimationActor } from "../actors/composite/shared";

interface ISharedActorSliceInfo{
    actor: string | IAnimationActor | AnimationActorCallbackType;
    slice?: number;
}

function CreateAnimationProxy(){
    let storedConcept: IAnimationConcept | null = null, getConcept = () => (storedConcept || (storedConcept =  GetGlobal().GetConcept<IAnimationConcept>('animation')));

    const methods = {
        collect: (...actors: (string | IAnimationActor | AnimationActorCallbackType)[]): IAnimationActor => {
            let validActors = actors.map(actor => ((typeof actor === 'string') ? getConcept()?.GetActorCollection().Find(actor) : actor)).filter(actor => !!actor);
            return new ConcurrentCompositeAnimationActor(<Array<IAnimationActor | AnimationActorCallbackType>>validActors);
        },
        shared: (...actors: (string | IAnimationActor | AnimationActorCallbackType | ISharedActorSliceInfo)[]): IAnimationActor => {
            let validActors = actors.map((info) => {
                if (typeof info === 'string'){
                    return <ISharedActorSlice>{ actor: getConcept()?.GetActorCollection().Find(info), slice: { from: 0, to: 1 } };
                }
                
                if ('slice' in info){
                    return <ISharedActorSlice>{
                        actor: ((typeof info.actor === 'string') ? getConcept()?.GetActorCollection().Find(info.actor) : info.actor),
                        slice: info.slice,
                    }
                }
                
                return <ISharedActorSlice>{ actor: info, slice: { from: 0, to: 1 } };
            }).filter(info => !!info.actor);
            
            return new SharedCompositeAnimationActor(validActors);
        },
        invert: (ease: string | AnimationEaseCallbackType) => {
            let validEase = ((typeof ease === 'string') ? getConcept()?.GetEaseCollection().Find(ease) : ease);
            return ({ fraction, ...rest }: IAnimationEaseParams) => (validEase ? (1 - CallAnimationEase(validEase, { fraction, ...rest })) : fraction);
        },
        applySceneRange: ApplyRange,
        applySceneTransform: ApplyTransform,
        applySceneRangeAndTransform: ApplyRangeAndTransform,
        formatSceneValue: FormatValue,
        getConcept,
    };

    const groups = {
        creators: CreateInplaceProxy(BuildGetterProxyOptions({
            getter: (prop) => (prop && getConcept()?.GetCreatorCollection().Find(prop)),
        })),
        actors: CreateInplaceProxy(BuildGetterProxyOptions({
            getter: (prop) => (prop && getConcept()?.GetActorCollection().Find(prop)),
        })),
        eases: CreateInplaceProxy(BuildGetterProxyOptions({
            getter: (prop) => (prop && getConcept()?.GetEaseCollection().Find(prop)),
        })),
        numerics: CreateInplaceProxy(BuildGetterProxyOptions({
            getter: (prop) => (prop && getConcept()?.GetNamedNumericCollection().Find(prop)),
        })),
    };

    return CreateInplaceProxy(BuildGetterProxyOptions({
        getter: (prop) => {
            if (!prop){
                return;
            }

            if (groups.hasOwnProperty(prop)){
                return groups[prop];
            }

            if (methods.hasOwnProperty(prop)){
                return methods[prop];
            }

            let concept = getConcept();
            if (!concept){
                return;
            }

            let creator = concept.GetCreatorCollection().Find(prop);
            if (creator){
                return creator;
            }

            let actor = concept.GetActorCollection().Find(prop);
            if (actor){
                return actor;
            }

            let ease = concept.GetEaseCollection().Find(prop);
            if (ease){
                return ease;
            }

            let numeric = concept.GetNamedNumericCollection().Find(prop);
            if (numeric !== null){
                return numeric;
            }
        },
        lookup: [...Object.keys(groups), ...Object.keys(methods)],
    }));
}

const AnimationProxy = CreateAnimationProxy();

export const AnimationMagicHandler = CreateMagicHandlerCallback('animation', () => AnimationProxy);

export function AnimationMagicHandlerCompact(){
    AddMagicHandler(AnimationMagicHandler);
}

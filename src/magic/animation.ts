import {
    GetGlobal,
    AddMagicHandler,
    CreateMagicHandlerCallback,
    BuildGetterProxyOptions,
    CreateInplaceProxy,
    AnimationActorCallbackType,
    IAnimationActor,
    IAnimationActorParams,
    IAnimationConcept,
    AnimationEaseCallbackType,
    IAnimationEaseParams
} from "@benbraide/inlinejs";

import { ApplyRange, ApplyRangeAndTransform, ApplyTransform, FormatValue } from "../actors/scene/generic";
import { CallAnimationEase } from "../easing/call";

let NamedAnimationDurations = {
    crawl: 2000,
    slower: 1000,
    slow: 750,
    normal: 500,
    fast: 300,
    faster: 200,
    swift: 100,
};

let NamedAnimationConstants = {
    infinite: -1,
};

function CreateAnimationProxy(){
    let storedConcept: IAnimationConcept | null = null, getConcept = () => (storedConcept || (storedConcept =  GetGlobal().GetConcept<IAnimationConcept>('animation')));
    let callActor = (actor: AnimationActorCallbackType | IAnimationActor, params: IAnimationActorParams) => ((typeof actor === 'function') ? actor(params) : actor.Handle(params));

    const methods = {
        collect: (...actors: (string | AnimationActorCallbackType)[]): AnimationActorCallbackType => {
            let validActors = actors.map(actor => ((typeof actor === 'string') ? getConcept()?.GetActorCollection().Find(actor) : actor)).filter(actor => !!actor);
            return (params) => validActors.forEach(actor => callActor(actor!, params));
        },
        invert: (ease: string | AnimationEaseCallbackType) => {
            let validEase = ((typeof ease === 'string') ? getConcept()?.GetEaseCollection().Find(ease) : ease);
            return ({ fraction, ...rest }: IAnimationEaseParams) => (validEase ? (1 - CallAnimationEase(validEase, { fraction, ...rest })) : fraction);
        },
        applySceneRange: ApplyRange,
        applySceneTransform: ApplyTransform,
        applySceneRangeAndTransform: ApplyRangeAndTransform,
        formatSceneValue: FormatValue,
        setNameDuration: (name: string, value: number) => {
            NamedAnimationDurations[name] = value;
        },
        removeNameDuration: (name: string) => {
            delete NamedAnimationDurations[name];
        },
        setNameConstant: (name: string, value: number) => {
            NamedAnimationConstants[name] = value;
        },
        removeNameConstant: (name: string) => {
            delete NamedAnimationConstants[name];
        },
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
        durations: CreateInplaceProxy(BuildGetterProxyOptions({
            getter: (prop) => (prop && NamedAnimationDurations.hasOwnProperty(prop) && NamedAnimationDurations[prop]),
        })),
        constants: CreateInplaceProxy(BuildGetterProxyOptions({
            getter: (prop) => (prop && NamedAnimationConstants.hasOwnProperty(prop) && NamedAnimationConstants[prop]),
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

            if (NamedAnimationDurations.hasOwnProperty(prop)){
                return NamedAnimationDurations[prop];
            }

            if (NamedAnimationConstants.hasOwnProperty(prop)){
                return NamedAnimationConstants[prop];
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

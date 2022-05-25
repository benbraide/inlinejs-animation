import {
    GetGlobal,
    AddMagicHandler,
    CreateMagicHandlerCallback,
    BuildGetterProxyOptions,
    CreateInplaceProxy,
    AnimationActorCallbackType,
    IAnimationActor,
    IAnimationActorParams,
    IAnimationConcept
} from "@benbraide/inlinejs";

import { ApplyRange, ApplyRangeAndTransform, ApplyTransform, FormatValue } from "../actors/scene/generic";

const NamedAnimationDurations = {
    crawl: 2000,
    slower: 1000,
    slow: 750,
    normal: 500,
    fast: 300,
    faster: 200,
    swift: 100,
};

const NamedAnimationConstants = {
    infinite: -1,
};

function CreateAnimationProxy(){
    let callActor = (actor: AnimationActorCallbackType | IAnimationActor, params: IAnimationActorParams) => ((typeof actor === 'function') ? actor(params) : actor.Handle(params));
    let storedConcept: IAnimationConcept | null = null, methods = {
        collect: (...actors: (string | AnimationActorCallbackType)[]): AnimationActorCallbackType => {
            let concept = (storedConcept ||(storedConcept =  GetGlobal().GetConcept<IAnimationConcept>('animation')));
            let validActors = actors.map(actor => ((typeof actor === 'string') ? concept?.GetActorCollection().Find(actor) : actor)).filter(actor => !!actor);
            return (params) => validActors.forEach(actor => callActor(actor!, params));
        },
        applySceneRange: ApplyRange,
        applySceneTransform: ApplyTransform,
        applySceneRangeAndTransform: ApplyRangeAndTransform,
        formatSceneValue: FormatValue,
    };

    return CreateInplaceProxy(BuildGetterProxyOptions({
        getter: (prop) => {
            if(!prop){
                return;
            }

            let concept = (storedConcept ||(storedConcept =  GetGlobal().GetConcept<IAnimationConcept>('animation')));
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

            if (methods.hasOwnProperty(prop)){
                return methods[prop];
            }
        },
        lookup: [...Object.keys(methods)],
    }));
}

const AnimationProxy = CreateAnimationProxy();

export const AnimationMagicHandler = CreateMagicHandlerCallback('animation', () => AnimationProxy);

export function AnimationMagicHandlerCompact(){
    AddMagicHandler(AnimationMagicHandler);
}

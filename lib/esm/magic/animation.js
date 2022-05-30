var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { GetGlobal, AddMagicHandler, CreateMagicHandlerCallback, BuildGetterProxyOptions, CreateInplaceProxy } from "@benbraide/inlinejs";
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
function CreateAnimationProxy() {
    let storedConcept = null, getConcept = () => (storedConcept || (storedConcept = GetGlobal().GetConcept('animation')));
    let callActor = (actor, params) => ((typeof actor === 'function') ? actor(params) : actor.Handle(params));
    const methods = {
        collect: (...actors) => {
            let validActors = actors.map(actor => { var _a; return ((typeof actor === 'string') ? (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Find(actor) : actor); }).filter(actor => !!actor);
            return (params) => validActors.forEach(actor => callActor(actor, params));
        },
        invert: (ease) => {
            var _a;
            let validEase = ((typeof ease === 'string') ? (_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetEaseCollection().Find(ease) : ease);
            return (_a) => {
                var { fraction } = _a, rest = __rest(_a, ["fraction"]);
                return (validEase ? (1 - CallAnimationEase(validEase, Object.assign({ fraction }, rest))) : fraction);
            };
        },
        applySceneRange: ApplyRange,
        applySceneTransform: ApplyTransform,
        applySceneRangeAndTransform: ApplyRangeAndTransform,
        formatSceneValue: FormatValue,
        setNameDuration: (name, value) => {
            NamedAnimationDurations[name] = value;
        },
        removeNameDuration: (name) => {
            delete NamedAnimationDurations[name];
        },
        setNameConstant: (name, value) => {
            NamedAnimationConstants[name] = value;
        },
        removeNameConstant: (name) => {
            delete NamedAnimationConstants[name];
        },
        getConcept,
    };
    const groups = {
        creators: CreateInplaceProxy(BuildGetterProxyOptions({
            getter: (prop) => { var _a; return (prop && ((_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetCreatorCollection().Find(prop))); },
        })),
        actors: CreateInplaceProxy(BuildGetterProxyOptions({
            getter: (prop) => { var _a; return (prop && ((_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Find(prop))); },
        })),
        eases: CreateInplaceProxy(BuildGetterProxyOptions({
            getter: (prop) => { var _a; return (prop && ((_a = getConcept()) === null || _a === void 0 ? void 0 : _a.GetEaseCollection().Find(prop))); },
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
            if (!prop) {
                return;
            }
            if (groups.hasOwnProperty(prop)) {
                return groups[prop];
            }
            if (methods.hasOwnProperty(prop)) {
                return methods[prop];
            }
            let concept = getConcept();
            if (!concept) {
                return;
            }
            let creator = concept.GetCreatorCollection().Find(prop);
            if (creator) {
                return creator;
            }
            let actor = concept.GetActorCollection().Find(prop);
            if (actor) {
                return actor;
            }
            let ease = concept.GetEaseCollection().Find(prop);
            if (ease) {
                return ease;
            }
            if (NamedAnimationDurations.hasOwnProperty(prop)) {
                return NamedAnimationDurations[prop];
            }
            if (NamedAnimationConstants.hasOwnProperty(prop)) {
                return NamedAnimationConstants[prop];
            }
        },
        lookup: [...Object.keys(groups), ...Object.keys(methods)],
    }));
}
const AnimationProxy = CreateAnimationProxy();
export const AnimationMagicHandler = CreateMagicHandlerCallback('animation', () => AnimationProxy);
export function AnimationMagicHandlerCompact() {
    AddMagicHandler(AnimationMagicHandler);
}

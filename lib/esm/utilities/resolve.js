import { GetGlobal } from "@benbraide/inlinejs";
export function ResolveActorName(el, name, value) {
    if (name === value) {
        return value;
    }
    const concept = GetGlobal().GetConcept('animation');
    if (concept) {
        name && concept.GetActorCollection().Remove(name);
        value && concept.GetActorCollection().Add(el, value);
    }
    return value;
}
export function ResolveEaseName(el, name, value) {
    if (name === value) {
        return value;
    }
    const concept = GetGlobal().GetConcept('animation');
    if (concept) {
        name && concept.GetEaseCollection().Remove(name);
        value && concept.GetEaseCollection().Add(el, value);
    }
    return value;
}
export function ResolveActor(el, value) {
    var _a;
    const actor = ((typeof value === 'string') ? (((_a = GetGlobal().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetActorCollection().Find(value)) || null) : value);
    if (actor || el.IsTemplate()) {
        return actor;
    }
    for (let child of el.children) {
        if ('IsAnimationActor' in child && typeof child['IsAnimationActor'] === 'function' && child['IsAnimationActor']()) {
            return child;
        }
    }
    return null;
}
export function ResolveEase(el, value) {
    var _a;
    const actor = ((typeof value === 'string') ? (((_a = GetGlobal().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetEaseCollection().Find(value)) || null) : value);
    if (actor || el.IsTemplate()) {
        return actor;
    }
    for (let child of el.children) {
        if ('IsAnimationEase' in child && typeof child['IsAnimationEase'] === 'function' && child['IsAnimationEase']()) {
            return child;
        }
    }
    return null;
}
export function ResolveNumeric(value) {
    var _a;
    const numeric = (_a = GetGlobal().GetConcept('animation')) === null || _a === void 0 ? void 0 : _a.GetNamedNumericCollection().Find(value);
    if (typeof numeric === 'number') {
        return numeric;
    }
    if (/^\d+ms$/.test(value)) { //Milliseconds
        return parseInt(value.substring(0, (value.length - 2)));
    }
    if (/^\d+(\.\d+)?s$/.test(value)) { //Seconds
        return Math.floor(parseInt(value.substring(0, (value.length - 1))) * 1000);
    }
    return Math.floor(parseInt(value) || 0);
}

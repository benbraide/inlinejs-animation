import { FindComponentById, GetGlobal, } from "@benbraide/inlinejs";
export function FindTransitionData({ componentId, component, contextElement }) {
    var _a, _b;
    let data = (_b = (_a = (component || FindComponentById(componentId))) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.GetData('transition');
    return ((!data || GetGlobal().IsNothing(data)) ? null : data);
}

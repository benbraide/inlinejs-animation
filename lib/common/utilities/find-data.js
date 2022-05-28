"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindTransitionData = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
function FindTransitionData({ componentId, component, contextElement }) {
    var _a, _b;
    let data = (_b = (_a = (component || (0, inlinejs_1.FindComponentById)(componentId))) === null || _a === void 0 ? void 0 : _a.FindElementScope(contextElement)) === null || _b === void 0 ? void 0 : _b.GetData('transition');
    return ((!data || (0, inlinejs_1.GetGlobal)().IsNothing(data)) ? null : data);
}
exports.FindTransitionData = FindTransitionData;

export class AnimationNameNumericCollection {
    constructor() {
        this.values_ = {};
    }
    Add(name, value) {
        this.values_[name] = value;
    }
    Remove(name) {
        delete this.values_[name];
    }
    Find(name) {
        return (this.values_.hasOwnProperty(name) ? this.values_[name] : null);
    }
}

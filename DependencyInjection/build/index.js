var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _user;
class Employee {
    constructor(user) {
        _user.set(this, void 0);
        __classPrivateFieldSet(this, _user, user);
    }
}
_user = new WeakMap();
const empl = new Employee('Sam');

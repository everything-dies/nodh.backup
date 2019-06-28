"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isFunction = _interopRequireDefault(require("lodash/isFunction"));

var _isString = _interopRequireDefault(require("lodash/isString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const deflate = object => Array.isArray(object) ? [] : {};

const replace = (object, path = []) => ({
  with: replacement => {
    const entries = object ? Object.entries(object) : [];
    const skip = !(0, _isFunction.default)(replacement) || (0, _isString.default)(object) || !entries.length;

    const dig = (current, [key, value]) => {
      const deep = !!Object.keys(value).length;
      const location = path.concat(key);
      const next = deep ? replace(value, location).with(replacement) : replacement(location, value);
      return Array.isArray(current) ? current.concat(next) : Object.assign(current, {
        [key]: next
      });
    };

    return skip ? object : entries.reduce(dig, deflate(object));
  }
});

var _default = replace;
exports.default = _default;
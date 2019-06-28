"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = (path, value) => Array.isArray(path) && path.reverse().reduce((stack, fragment) => ({
  [fragment]: stack
}), {
  $set: value
});

exports.default = _default;
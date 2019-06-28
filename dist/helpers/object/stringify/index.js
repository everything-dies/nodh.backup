"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lowerCase = _interopRequireDefault(require("lodash/lowerCase"));

var _isString = _interopRequireDefault(require("lodash/isString"));

var _isDate = _interopRequireDefault(require("lodash/isDate"));

var _isFunction = _interopRequireDefault(require("lodash/isFunction"));

var _isArrayBuffer = _interopRequireDefault(require("lodash/isArrayBuffer"));

var _isTypedArray = _interopRequireDefault(require("lodash/isTypedArray"));

var _isMap = _interopRequireDefault(require("lodash/isMap"));

var _isWeakMap = _interopRequireDefault(require("lodash/isWeakMap"));

var _isSet = _interopRequireDefault(require("lodash/isSet"));

var _isWeakSet = _interopRequireDefault(require("lodash/isWeakSet"));

var _isElement = _interopRequireDefault(require("lodash/isElement"));

var _isRegExp = _interopRequireDefault(require("lodash/isRegExp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const normalize = object => String(object).replace(/\s+/g, ' ');

const stringify = object => normalize(JSON.stringify(object, null, 2));

const cast = object => {
  switch (true) {
    case (0, _isArrayBuffer.default)(object):
      return 'ArrayBuffer()';

    case (0, _isTypedArray.default)(object):
      return 'Uint8Array()';

    case (0, _isMap.default)(object):
      return 'Map()';

    case (0, _isWeakMap.default)(object):
      return 'WeakMap()';

    case (0, _isSet.default)(object):
      return 'Set()';

    case (0, _isWeakSet.default)(object):
      return 'WeakSet()';

    default:
      return normalize(object);
  }
};

var _default = (params = []) => !Array.isArray(params) ? '' : params.map(param => {
  switch (true) {
    case (0, _isString.default)(param):
      return `"${normalize(param)}"`;

    case (0, _isDate.default)(param):
      return `Date(${param.toString()})`;

    case (0, _isFunction.default)(param):
      return `Function(${param.name})`;

    case (0, _isElement.default)(param):
      return `Element(<${(0, _lowerCase.default)(param.tagName)}>)`;

    case (0, _isRegExp.default)(param):
      return `RegExp(${normalize(param)})`;

    case !!param && !!Object.keys(param).length:
      return stringify(param);

    default:
      return cast(param);
  }
}).join(', ');

exports.default = _default;
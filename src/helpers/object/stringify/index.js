import lowerCase from 'lodash/lowerCase';
import isString from 'lodash/isString';
import isDate from 'lodash/isDate';
import isFunction from 'lodash/isFunction';
import isArrayBuffer from 'lodash/isArrayBuffer';
import isTypedArray from 'lodash/isTypedArray';
import isMap from 'lodash/isMap';
import isWeakMap from 'lodash/isWeakMap';
import isSet from 'lodash/isSet';
import isWeakSet from 'lodash/isWeakSet';
import isElement from 'lodash/isElement';
import isRegExp from 'lodash/isRegExp';

const normalize = object => String(object).replace(/\s+/g, ' ');

const stringify = object => normalize(JSON.stringify(object, null, 2));

const cast = object => {
  switch (true) {
    case isArrayBuffer(object):
      return 'ArrayBuffer()';
    case isTypedArray(object):
      return 'Uint8Array()';
    case isMap(object):
      return 'Map()';
    case isWeakMap(object):
      return 'WeakMap()';
    case isSet(object):
      return 'Set()';
    case isWeakSet(object):
      return 'WeakSet()';
    default:
      return normalize(object);
  }
};

export default (params = []) =>
  !Array.isArray(params)
    ? ''
    : params
        .map(param => {
          switch (true) {
            case isString(param):
              return `"${normalize(param)}"`;
            case isDate(param):
              return `Date(${param.toString()})`;
            case isFunction(param):
              return `Function(${param.name})`;
            case isElement(param):
              return `Element(<${lowerCase(param.tagName)}>)`;
            case isRegExp(param):
              return `RegExp(${normalize(param)})`;
            case !!param && !!Object.keys(param).length:
              return stringify(param);
            default:
              return cast(param);
          }
        })
        .join(', ');

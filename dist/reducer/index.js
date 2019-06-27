"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getInitialState = void 0;

var _get = _interopRequireDefault(require("lodash/get"));

var _attempt = _interopRequireDefault(require("lodash/attempt"));

var _constant = _interopRequireDefault(require("../constant"));

var _mutation = _interopRequireDefault(require("../mutation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getInitialState = () => ({
  persisted: {},
  volatile: {}
});

exports.getInitialState = getInitialState;

var _default = (state = getInitialState(), {
  type,
  path,
  mutation
}) => {
  switch (true) {
    case String(type).startsWith(_constant.default):
      return (0, _attempt.default)((0, _mutation.default)({
        path,
        value: mutation((0, _get.default)(state, path))
      }), state);

    default:
      return state;
  }
};

exports.default = _default;
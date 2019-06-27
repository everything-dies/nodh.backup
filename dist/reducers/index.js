"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getInitialState = void 0;

var _index = require("constants/index");

const getInitialState = () => ({
  persisted: {},
  volatile: {}
});

exports.getInitialState = getInitialState;

var _default = (state = getInitialState(), {
  type
}) => {
  switch (true) {
    case String(type).startsWith(_index.NODH):
      return state;

    default:
      return state;
  }
};

exports.default = _default;
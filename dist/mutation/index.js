"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

var _unfold = _interopRequireDefault(require("../helpers/immutability-helper/unfold"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = ({
  path,
  value
}) => state => (0, _immutabilityHelper.default)(state, (0, _unfold.default)(path, value));

exports.default = _default;
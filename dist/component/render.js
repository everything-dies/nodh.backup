"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _react2 = require("redux-persist/integration/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Provider = ({
  context,
  store,
  persistor,
  children
}) => _react.default.createElement(_reactRedux.Provider, {
  context: context,
  store: store
}, _react.default.createElement(_react2.PersistGate, {
  persistor: persistor,
  loading: "Loading..."
}, children));

Provider.propTypes = {
  context: (0, _propTypes.shape)({
    Consumer: _propTypes.elementType.isRequired,
    Provider: _propTypes.elementType.isRequired
  }).isRequired,
  store: (0, _propTypes.shape)({
    subscribe: _propTypes.func.isRequired,
    dispatch: _propTypes.func.isRequired,
    getState: _propTypes.func.isRequired
  }).isRequired,
  persistor: (0, _propTypes.shape)({
    pause: _propTypes.func.isRequired,
    persist: _propTypes.func.isRequired,
    purge: _propTypes.func.isRequired,
    flush: _propTypes.func.isRequired,
    dispatch: _propTypes.func.isRequired,
    getState: _propTypes.func.isRequired,
    subscribe: _propTypes.func.isRequired
  }).isRequired,
  children: _propTypes.node.isRequired
};
var _default = Provider;
exports.default = _default;
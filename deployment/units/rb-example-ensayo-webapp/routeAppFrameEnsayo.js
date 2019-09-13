"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _reactCodeSplitting = _interopRequireDefault(require("react-code-splitting"));
var _reactRelay = require("react-relay");
var _react = _interopRequireDefault(require("react"));
var _Route = _interopRequireDefault(require("found/lib/Route"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function () {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};if (obj != null) {var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}

const EnsayoInPaceEditList = (props) =>
_react.default.createElement(_reactCodeSplitting.default, { load: Promise.resolve().then(() => _interopRequireWildcard(require('./components/EnsayoInPaceEditList'))), componentProps: props });

const EnsayoInPaceEditScreen = (props) =>
_react.default.createElement(_reactCodeSplitting.default, { load: Promise.resolve().then(() => _interopRequireWildcard(require('./components/EnsayoInPaceEditScreen'))), componentProps: props });

const EnsayoPublicList = (props) =>
_react.default.createElement(_reactCodeSplitting.default, { load: Promise.resolve().then(() => _interopRequireWildcard(require('./components/EnsayoPublicList'))), componentProps: props });

const EnsayoPublicItem = (props) =>
_react.default.createElement(_reactCodeSplitting.default, { load: Promise.resolve().then(() => _interopRequireWildcard(require('./components/EnsayoPublicItem'))), componentProps: props });var _default =



_react.default.createElement(_Route.default, { key: "ensayo", path: "ensayo" },
_react.default.createElement(_Route.default, {
  path: "/",
  Component: EnsayoPublicList,
  query: function () {return require("./__generated__/routeAppFrameEnsayo_EnsayoPublicList_Query.graphql");} }),







_react.default.createElement(_Route.default, { path: "item" },
_react.default.createElement(_Route.default, {
  path: ":id",
  Component: EnsayoPublicItem,
  query: function () {return require("./__generated__/routeAppFrameEnsayo_EnsayoPublicItem_Query.graphql");} })),








_react.default.createElement(_Route.default, {
  path: "in-place-edit",
  Component: EnsayoInPaceEditScreen,
  query: function () {return require("./__generated__/routeAppFrameEnsayo_EnsayoInPaceEditScreen_Query.graphql");} },







_react.default.createElement(_Route.default, {
  Component: EnsayoInPaceEditList,
  query: function () {return require("./__generated__/routeAppFrameEnsayo_EnsayoInPaceEditList_Query.graphql");} })));exports.default = _default;
//# sourceMappingURL=routeAppFrameEnsayo.js.map
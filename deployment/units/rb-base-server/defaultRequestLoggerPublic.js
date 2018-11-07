"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = defaultrequestLoggerPublic;

var _debug = require("../_configuration/debug");
var _matchInDepth = _interopRequireDefault(require("../rb-base-universal/matchInDepth"));
var _log = _interopRequireDefault(require("../rb-base-server/log"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //  weak

function defaultrequestLoggerPublic(requestAndResponse) {
  let logLevel = null;

  // TODO: [2 Crossroads][server] Audit errors for Public and decide which ones to log. For instasnce, 401 is a bad idea.
  // // If there is an error, log it as an error
  // if( requestAndResponse.response.indexOf( '"errors": [' ) > 0 )
  //   logLevel = 'error'
  // Otherwise, if it is a trace, log it as info
  //else
  if ((0, _matchInDepth.default)(requestAndResponse, _debug.debugWriteToLogServerRequestPublic)) logLevel = 'info';

  if (logLevel) _log.default.log({ level: logLevel, message: 'Public request', details: requestAndResponse });
}
//# sourceMappingURL=defaultRequestLoggerPublic.js.map
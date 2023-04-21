"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _songController = require("../controllers/songController");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var trendRouter = _express["default"].Router();
trendRouter.get('/', _songController.trendCountry);
trendRouter.get('/:country/:countryId', _songController.countryTrend);
var _default = trendRouter;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _authControllers = require("../controllers/authControllers");
var _apiController = require("../controllers/apiController");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var apiRouter = _express["default"].Router();
apiRouter.get('/songs/:id', _apiController.songController);
apiRouter.get('/album-to-play/:artistId', _apiController.albumToPlay);
apiRouter.get('/user', _authControllers.loggedUser);
apiRouter.post('/favourite/', _apiController.favouriteSong);
apiRouter.get('/is-favourite/:songID', _apiController.songIsLiked);
apiRouter.post('/add-to-playlist/', _apiController.addToPlaylist);
var _default = apiRouter;
exports["default"] = _default;
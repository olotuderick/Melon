"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _songController = require("../controllers/songController");
var _authControllers = require("../controllers/authControllers");
var _apiController = require("../controllers/apiController");
var _middlewares = require("../middlewares");
var _Controller = require("../controllers/404Controller");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var rootRouter = _express["default"].Router();
rootRouter.route('/authentication').get(_middlewares.alreadyLoggedIn, _authControllers.getAuthentication).post(_authControllers.postAuthentication);
rootRouter.route('/login').get(_middlewares.alreadyLoggedIn, _authControllers.getLogin).post(_authControllers.postLogin);
rootRouter.get('/', _middlewares.getUser, _songController.home);
rootRouter.get('/404', _Controller.controller404);
rootRouter.get('/search', _middlewares.getUser, _authControllers.search);
rootRouter.get('/main-body', _authControllers.mainBody);
rootRouter.get('/favourites', _middlewares.getUser, _songController.favouritesController);
rootRouter.get('/playlist/:playlistId', _middlewares.getUser, _songController.userPlaylist);
rootRouter.get('/albums/:albumId', _middlewares.getUser, _songController.album);
rootRouter.get('/artist/:artistId', _middlewares.getUser, _songController.artistPlaylist);
rootRouter.get('/logout', _authControllers.logout);
rootRouter.get('/api/songs/:id', _apiController.songController);
rootRouter.get('/api/album-to-play/:artistId', _apiController.albumToPlay);
/* rootRouter.get('/playing/:songID', fullScreenPlayer) */
rootRouter.get('/api/user', _authControllers.loggedUser);
var _default = rootRouter;
exports["default"] = _default;
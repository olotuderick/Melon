"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _songController = require("../controllers/songController");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var libraryRouter = _express["default"].Router();
libraryRouter.get('/', _songController.libraryHome);
libraryRouter.get('/main-playlist', _songController.mainPlaylist);
libraryRouter.get('/main-artist-playlist', _songController.mainArtistPlaylist);
libraryRouter.get('/main-user-playlist', _songController.userCreatedPlaylist);
libraryRouter.get('/:playlistId', _songController.apiPlaylist);
var _default = libraryRouter;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Playlists = exports.Favourites = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var favouriteSongsSchema = new _mongoose["default"].Schema({
  likedSong: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Song'
  }
});
var Favourites = _mongoose["default"].model('Favourite', favouriteSongsSchema);
exports.Favourites = Favourites;
var playlistSchema = new _mongoose["default"].Schema({
  playlistOwner: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'UserSchema'
  },
  playlistName: {
    type: String,
    required: true,
    trim: true
  },
  playlistImage: {
    type: String
  },
  dateCreated: {
    type: String,
    required: true
  },
  savedSongs: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: 'Song'
  }]
});
var Playlists = _mongoose["default"].model('Playlist', playlistSchema);
exports.Playlists = Playlists;
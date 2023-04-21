"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var songSchema = new _mongoose["default"].Schema({
  songId: {
    type: String,
    required: true
  },
  songName: {
    type: String,
    required: true
  },
  artistId: {
    type: String,
    required: true
  },
  songArtist: {
    type: String,
    required: true
  },
  albumId: {
    type: String,
    required: true
  },
  songAlbum: {
    type: String,
    required: true
  },
  songPreview: {
    type: String,
    required: true
  },
  songDuration: {
    type: String,
    required: true
  },
  coverSmall: {
    type: String
  },
  coverBig: {
    type: String
  }
});
var Song = _mongoose["default"].model("Song", songSchema);
var _default = Song;
exports["default"] = _default;
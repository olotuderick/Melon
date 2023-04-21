import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  songId: {type: String, required: true},
  songName: {type: String, required: true},
  artistId: {type: String, required: true},
  songArtist: {type: String, required: true},
  albumId: {type: String, required: true},
  songAlbum: {type: String, required: true},
  songPreview: {type: String, required: true},
  songDuration: {type: String, required: true},
  coverSmall: {type: String},
  coverBig: {type: String}
});

const Song = mongoose.model("Song", songSchema);

export default Song;

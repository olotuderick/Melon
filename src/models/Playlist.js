import mongoose from 'mongoose'

const favouriteSongsSchema = new mongoose.Schema({
  likedSong: { type: mongoose.Schema.Types.ObjectId, ref: 'Song' },
})
export const Favourites = mongoose.model('Favourite', favouriteSongsSchema)

const playlistSchema = new mongoose.Schema({
  playlistOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema' },
  playlistName: { type: String, required: true, trim: true },
  playlistImage: { type: String },
  dateCreated: { type: String, required: true },
  savedSongs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
})
export const Playlists = mongoose.model('Playlist', playlistSchema)

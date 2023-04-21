import { async } from 'regenerator-runtime'
import { Favourites, Playlists } from '../models/Playlist'
import Song from '../models/Song'
import { getUserPlaylists } from '../middlewares'

export const songController = async (req, res) => {
  const id = req.params.id
  const response = await fetch(`https://api.deezer.com/track/${id}`)
  // console.log(response, 'Response')
  const data = await response.json()
  // console.log(data, 'data')
  req.session.playing = data
  req.session.trackId = data.id
  // console.log(req.session.playing, "This is not globally")
  res.json(data)
}

export const albumToPlay = async (req, res) => {
  const { artistId } = req.params
  const artistApi = await fetch(
    `https://api.deezer.com/artist/${artistId}/top?limit=100`
  )
  const artistJson = await artistApi.json()
  res.json(artistJson.data)
}

export const favouriteSong = async (req, res) => {
  const {
    songId,
    songName,
    artistId,
    albumId,
    songAlbum,
    songArtist,
    songPreview,
    songDuration,
    coverSmall,
    coverBig,
    removeFromFav,
  } = req.body
  const favourites = res.locals.favourites
  if (removeFromFav) {
    const songToDelete = await favourites.find(
      (song) => String(song.likedSong.songId) === String(songId)
    )
    await Favourites.findByIdAndDelete(songToDelete._id)
    return res.json({
      removed: true,
      removedSongId: songId,
      songName: songToDelete.likedSong.songName,
    })
  }
  if (favourites && favourites.length !== 0) {
    const songExistsInFav = await favourites.find(
      (song) => String(song.likedSong.songId) === String(songId)
    )
    if (songExistsInFav) {
      await Favourites.findByIdAndDelete(songExistsInFav._id)
      return res.status('201').json({ msg: 'Song Already Exists' })
    }
    const songExists = await Song.findOne({ songId })
    console.log(songExists)
    if (songExists) {
      console.log('Song Already Created')
      await Favourites.create({
        likedSong: songExists._id,
      })
      return res.status('201').json(req.body)
    }
    const createdSong = await Song.create({
      songId,
      songName,
      artistId,
      albumId,
      songAlbum,
      songArtist,
      songPreview,
      songDuration,
      coverSmall,
      coverBig,
    })
    await Favourites.create({
      likedSong: createdSong._id,
    })

    return res.status('201').json(req.body)
  } else {
    const createdSong = await Song.create({
      songId,
      songName,
      songArtist,
      artistId,
      albumId,
      songAlbum,
      songPreview,
      songDuration,
      coverSmall,
      coverBig,
    })
    await Favourites.create({
      likedSong: createdSong._id,
    })
    return res.status('201').json(req.body)
  }
}

export const songIsLiked = async (req, res) => {
  const { songID } = req.params
  const favourites = res.locals.favourites
  if (favourites && favourites.length !== 0) {
    const songExists = await favourites.find(
      (song) => String(song.likedSong.songId) === String(songID)
    )
    if (songExists) {
      const { likedSong } = songExists
      return res.json({ exists: true, likedSong })
    } else {
      return res.json({ exists: false })
    }
  } else {
    res.json({ exists: false })
  }
}

export const addToPlaylist = async (req, res) => {
  console.log('Playlist...')
  const { playlistId, playlistName, addedSong } = req.body
  console.log('Req Body...', playlistId, playlistName, addedSong)
  const user = res.locals.user
  const allPlaylist = res.locals.userPlaylists

  if (playlistName) {
    console.log('All Playlists', allPlaylist)
    const playlistAlreadyExists = await allPlaylist.find(
      (playlist) => String(playlist.playlistName) === String(playlistName)
    )
    console.log(playlistAlreadyExists)
    if (playlistAlreadyExists) {
      console.log('This playlist is already created')
      return res.status('400').json({ msg: 'This playlist is already created' })
    }
  }

  //Create Empty Playlist
  if (playlistName && !playlistId && !addedSong.songId) {
    console.log('Create Empty Playlist')
    const createdPlaylist = await Playlists.create({
      playlistOwner: user._id,
      playlistName: playlistName,
      playlistImage: '',
      dateCreated: Date.now(),
    })
    return res.json({ playlistMongoId: createdPlaylist._id, playlistName })
  }

  console.log('addedSong', addedSong)
  const songExists = await Song.findOne({ songId: addedSong.songId })
  console.log('songExists', songExists)
  //Add Songs to a playlist that is already created
  if (playlistId && !playlistName) {
    const choosenPlaylist = await Playlists.findById(playlistId).populate(
      'savedSongs'
    )
    console.log('choosenPlaylist', choosenPlaylist)
    //If the song is already saved in the database
    if (songExists) {
      const songExistsInPlaylist = await choosenPlaylist.savedSongs.find(
        (song) => String(song.songId) === String(songExists.songId)
      )
      console.log('songExistsInPlaylist', songExistsInPlaylist)
      if (songExistsInPlaylist) {
        return res
          .status('400')
          .json({ msg: 'This song already exists in this playlist' })
      }
      //Check If the song saved in the database is already in this playlist
      if (songExistsInPlaylist) {
        console.log('Song Exists in Playlist')
        return res.status('201').json(req.body)
      } else {
        choosenPlaylist.savedSongs.push(songExists._id)
        choosenPlaylist.save()
        return res.status('201').json(req.body)
      }
    }
    //If the song is not saved in the satabase
    else {
      const createdSong = await Song.create({
        songId: addedSong.songId,
        songName: addedSong.songName,
        artistId: addedSong.artistId,
        albumId: addedSong.albumId,
        songAlbum: addedSong.songAlbum,
        songArtist: addedSong.songArtist,
        songPreview: addedSong.songPreview,
        songDuration: addedSong.songDuration,
        coverSmall: addedSong.coverSmall,
        coverBig: addedSong.coverBig,
      })
      choosenPlaylist.savedSongs.push(createdSong._id)
      choosenPlaylist.save()
      return res.status('201').json(req.body)
    }
  }

  //Add a song to a playlist that a user is creating at the same time
  //Check if the song is already saved in the database
  if (songExists) {
    const createdPlaylist = await Playlists.create({
      playlistOwner: user._id,
      playlistName: playlistName,
      playlistImage: '',
      dateCreated: Date.now(),
      savedSongs: songExists._id,
    })
    return res
      .status('201')
      .json({ playlistMongoId: createdPlaylist._id, playlistName, addedSong })
  } else {
    const createdSong = await Song.create({
      songId: addedSong.songId,
      songName: addedSong.songName,
      artistId: addedSong.artistId,
      albumId: addedSong.albumId,
      songAlbum: addedSong.songAlbum,
      songArtist: addedSong.songArtist,
      songPreview: addedSong.songPreview,
      songDuration: addedSong.songDuration,
      coverSmall: addedSong.coverSmall,
      coverBig: addedSong.coverBig,
    })
    const createdPlaylist = await Playlists.create({
      playlistOwner: user._id,
      playlistName: playlistName,
      playlistImage: '',
      dateCreated: Date.now(),
      savedSongs: createdSong._id,
    })
    return res
      .status('201')
      .json({ playlistMongoId: createdPlaylist._id, playlistName, addedSong })
  }
}

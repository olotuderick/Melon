import { async } from 'regenerator-runtime'
import User from './models/User'
import { Favourites, Playlists } from './models/Playlist'
export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn)
  res.locals.siteName = 'Melon'
  res.locals.loggedInUser = req.session.user || {}
  next()
}

export let ApiJson
export const fetchApi = async (req, res) => {
  const api = await fetch('https://api.deezer.com/editorial/0/charts?limit=20')
  ApiJson = await api.json()
  console.log('Fetched Api')
}
fetchApi()

// get User data locally
export const getUser = async (req, res, next) => {
  // console.log(req.session, 'username')
  const user = await User.findOne({ username: req.session.userName })
  if (!user) {
    return res.redirect('/login')
  } else {
    res.locals.user = user
    next()
  }
}

export const getUserPlaylists = async (req, res, next) => {
  const favourites = await Favourites.find().populate('likedSong')
  res.locals.favourites = favourites

  const userPlaylists = await Playlists.find()
    .populate('playlistOwner')
    .populate('savedSongs')
  
  res.locals.userPlaylists = userPlaylists
  next()
}

export const alreadyLoggedIn = async (req, res, next) => {
  const user = await User.findOne({ username: req.session.userName })
  if (user) {
    return res.redirect('/')
  } else {
    next()
  }
}
// get current playing track
export const currentlyPlaying = async (req, res, next) => {
  console.log(req.session.trackId, 'TrackId')
  if (req.session.trackId) {
    const response = await fetch(
      `http://localhost:4000/api/songs/${req.session.trackID}`
    )
    const data = await response.json()
    const countryTrack = data
    res.locals.playing = countryTrack
  } else {
    res.locals.playing = null
  }
  next()
}

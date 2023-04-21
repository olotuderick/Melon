import express from 'express'
import {
  libraryHome,
  apiPlaylist,
  mainPlaylist,
  mainArtistPlaylist,
  userCreatedPlaylist
} from '../controllers/songController'

const libraryRouter = express.Router()
libraryRouter.get('/', libraryHome)
libraryRouter.get('/main-playlist', mainPlaylist)
libraryRouter.get('/main-artist-playlist', mainArtistPlaylist)
libraryRouter.get('/main-user-playlist', userCreatedPlaylist)

libraryRouter.get('/:playlistId', apiPlaylist)

export default libraryRouter

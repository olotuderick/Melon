import express from 'express'
import { loggedUser } from '../controllers/authControllers'
import {
  addToPlaylist,
  albumToPlay,
  favouriteSong,
  songController,
  songIsLiked,
} from '../controllers/apiController'
const apiRouter = express.Router()

apiRouter.get('/songs/:id', songController)
apiRouter.get('/album-to-play/:artistId', albumToPlay)
apiRouter.get('/user', loggedUser)
apiRouter.post('/favourite/', favouriteSong)
apiRouter.get('/is-favourite/:songID', songIsLiked)
apiRouter.post('/add-to-playlist/', addToPlaylist)

export default apiRouter

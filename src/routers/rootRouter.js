import express from 'express'
import {
  album,
  artistPlaylist,
  favouritesController,
  home,
  userPlaylist,
} from '../controllers/songController'
import {
  getAuthentication,
  getLogin,
  mainBody,
  postAuthentication,
  postLogin,
  loggedUser,
  search,
  logout,
} from '../controllers/authControllers'
import { songController, albumToPlay } from '../controllers/apiController'
import { alreadyLoggedIn, getUser } from '../middlewares'
import { controller404 } from '../controllers/404Controller'

const rootRouter = express.Router()

rootRouter
  .route('/authentication')
  .get(alreadyLoggedIn, getAuthentication)
  .post(postAuthentication)
rootRouter.route('/login').get(alreadyLoggedIn, getLogin).post(postLogin)
rootRouter.get('/', getUser, home)
rootRouter.get('/404', controller404)

rootRouter.get('/search', getUser, search)
rootRouter.get('/main-body', mainBody)

rootRouter.get('/favourites', getUser, favouritesController)
rootRouter.get('/playlist/:playlistId', getUser, userPlaylist)
rootRouter.get('/albums/:albumId', getUser, album)
rootRouter.get('/artist/:artistId', getUser, artistPlaylist)
rootRouter.get('/logout', logout)

rootRouter.get('/api/songs/:id', songController)
rootRouter.get('/api/album-to-play/:artistId', albumToPlay)
/* rootRouter.get('/playing/:songID', fullScreenPlayer) */
rootRouter.get('/api/user', loggedUser)

export default rootRouter

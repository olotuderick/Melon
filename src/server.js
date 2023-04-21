import express from 'express'
import morgan from 'morgan'
import session from 'express-session'
import flash from 'express-flash'
import MongoStore from 'connect-mongo'
import { localsMiddleware, getUser, getUserPlaylists } from './middlewares'
import rootRouter from './routers/rootRouter'
import libraryRouter from './routers/libraryRouter'
import User from './models/User'
import trendRouter from './routers/trendRouter'
import apiRouter from './routers/apiRouter'

const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const app = express()
const logger = morgan('dev')

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '942417949950-f74ir38dbm1ssgtpgi7ul5i7hme4rhcl.apps.googleusercontent.com',
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      scope: ['profile', 'email'],
    },
    async function (accessToken, refreshToken, profile, cb) {
      const profileUrl = encodeURI(profile.photos[0].value)
      const userExists = await User.findOne({ username: profile.displayName })
      if (!userExists) {
        await User.create({
          firstname: profile.name.givenName,
          lastname: profile.name.familyName,
          email: 'No email temporary',
          password: ' ',
          username: profile.displayName,
          avatarUrl: profileUrl,
        })
      }
      return cb(null, profile)
    }
  )
)
passport.serializeUser((user, done) => {
  done(null, user.id)
})
//
app.use(passport.initialize())

app.set('view engine', 'pug')
app.set('views', process.cwd() + '/src/views')
app.use(logger)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
)
app.use(flash())
// Middlewares
app.use(localsMiddleware)
// app.use(currentlyPlaying)

// Routes
app.use('/uploads', express.static('uploads'))
app.use('/static', express.static('assets'))

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }))

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  async function (req, res) {
    req.session.userName = req.user.displayName
    res.redirect('/')
  }
)

app.use('/', getUserPlaylists, rootRouter)
app.use('/library', getUser, getUserPlaylists, libraryRouter)
app.use('/trend', getUser, getUserPlaylists, trendRouter)
app.use('/api', getUser, getUserPlaylists, apiRouter)

export default app

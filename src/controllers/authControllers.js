import { async } from 'regenerator-runtime'
import User from '../models/User'
import bcrypt from 'bcrypt'
import store from 'store'
import { ApiJson, fetchApi } from '../middlewares'

export const mainBody = async (req, res) => {
  return res.render('main-body', { pageTitle: 'Home' })
}

// export const search = async (req, res) => {
//   if (!ApiJson) {
//     await fetchApi()
//   }
//   let searchData
//   const { keyword } = req.query
//   if (!keyword == '') {
//     const songApi = await fetch(`https://api.deezer.com/search?q=${keyword}`)
//       .then((res) => res.json())
//       .then((data) => {
//         searchData = data
//       })
//   }
//   console.log(searchData, "hak")
//   const user = res.locals.user

//   return res.render('music/search', {
//     pageTitle: 'Search',
//     searchPlaylist: ApiJson.playlists.data,
//     searchArtist: ApiJson.artists.data,
//     searchTracks: ApiJson.tracks.data,
//     searchPodcast: ApiJson.podcasts.data,
//     searchAlbums: ApiJson,
//     searchEverything: searchData.data,
//     user,
//   })
// }

export const search = async (req, res) => {
  if (!ApiJson) {
    await fetchApi()
  }
  let searchData
  const { keyword } = req.query
  const songApi = await fetch(`https://api.deezer.com/search?q=${keyword}`)
    .then((res) => res.json())
    .then((data) => {
      searchData = data
    })
  console.log(searchData)
  const user = res.locals.user

  return res.render('music/search', {
    pageTitle: 'Search',
    searchPlaylist: ApiJson.playlists.data,
    searchArtist: ApiJson.artists.data,
    searchTracks: ApiJson.tracks.data,
    searchPodcast: ApiJson.podcasts.data,
    searchAlbums: ApiJson,
    searchEverything: searchData.data,
    likedSongs: res.locals.favourites,
    user,
  })
}
const userData = {
  firstName: null,
  lastName: null,
  email: null,
  gender: null,
  password: null,
  username: null,
  avatarUrl: null,
}
let displayForm = 'FirstForm'
export const getAuthentication = async (req, res) => {
  store.get('newUser')
  displayForm = 'FirstForm'
  return res.render('authentication/auth', {
    pageTitle: 'Authentication',
    displayForm,
  })
}

export const postAuthentication = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    passwordConfirmation,
    username,
  } = req.body

  if ((firstName, lastName, email)) {
    const emailExists = await User.findOne({ email })
    if (emailExists) {
      return res.render('authentication/auth', {
        pageTitle: 'Authentication',
        displayForm: 'FirstForm',
        firstName,
        lastName,
        email,
        emailErr: 'This e-mail is already used in another account',
      })
    }
    userData.firstName = firstName
    userData.lastName = lastName
    userData.email = email
    displayForm = 'PasswordForm'
    store.set('newUser', userData)
    return res.render('authentication/auth', {
      pageTitle: 'Authentication',
      displayForm,
    })
  }
  if ((password, passwordConfirmation)) {
    if (String(password) !== String(passwordConfirmation)) {
      displayForm = 'PasswordForm'
      return res.render('authentication/auth', {
        pageTitle: 'Authentication',
        displayForm,
        password,
        passwordConfirmation,
        passwordErr: 'Unmatched Passwords',
      })
    }
    userData.password = password
    displayForm = 'FinalForm'
    store.set('newUser', userData)
    return res.render('authentication/auth', {
      pageTitle: 'Authentication',
      displayForm,
    })
  }

  if (username) {
    const userNameExists = await User.findOne({ username })
    if (userNameExists) {
      return res.render('authentication/auth', {
        pageTitle: 'Authentication',
        displayForm: 'FinalForm',
        username,
        usernameErr: 'This username is already in use',
      })
    }

    const newUser = store.get('newUser')
    const createUser = await User.create({
      firstname: newUser.firstName,
      lastname: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
      username,
      avatarUrl: '',
    })
    console.log(newUser.username)
    const user = await User.findOne({ email: newUser.email })
    req.session.userName = user.username

    displayForm = 'CompletedSignUp'
    store.set('newUser', {})
    return res.redirect('/')
  }
}

export const getLogin = (req, res) => {
  return res.render('authentication/login', { pageTitle: 'Login' })
}

export const postLogin = async (req, res) => {
  const { username, password } = req.body
  const userExists = await User.findOne({ username })
  if (!userExists) {
    return res.render('authentication/login', {
      pageTitle: 'Login',
      usernameErr: 'This username does not exist',
      username,
      password,
    })
  }
  const passwordMatch = await bcrypt.compare(password, userExists.password)
  if (!passwordMatch) {
    return res.render('authentication/login', {
      pageTitle: 'Login',
      passwordErr: 'Incorrect Password!',
      username,
      password,
    })
  }
  req.session.userName = userExists.username
  return res.redirect('/')
}

export const loggedUser = async (req, res) => {
  const user = await User.findOne({ username: req.session.userName })
  res.json(user)
}

export const logout = async (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err)
    } else {
      res.redirect('/login')
    }
  })
}

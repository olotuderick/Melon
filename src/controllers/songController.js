import { async } from 'regenerator-runtime'
import Song from '../models/Song'
import User from '../models/User'
import fetch from 'node-fetch'
import request from 'request'
import { ApiJson, fetchApi } from '../middlewares'
import { Playlists } from '../models/Playlist'

export const home = async (req, res) => {
  const user = res.locals.user
  if (!ApiJson) {
    await fetchApi()
  }
  return res.render('home', {
    pageTitle: 'Home',
    userPlaylists: res.locals.userPlaylists,
    likedSongs: res.locals.favourites,
    user,
    userPlaylists: res.locals.userPlaylists,
    playlists: ApiJson.playlists.data,
    trendingArtists: ApiJson.artists.data,
    trendingSongs: ApiJson.tracks.data,
  })
}

export const libraryHome = async (req, res) => {
  if (!ApiJson) {
    await fetchApi()
  }

  console.log(ApiJson.albums.data[0].cover_medium)
  console.log('userPlaylists', res.locals.userPlaylists)
  return res.render('library/library', {
    pageTitle: 'Library',
    userPlaylists: res.locals.userPlaylists,
    likedSongs: res.locals.favourites,
    libraryPlaylists: ApiJson,
    /* playlists, */
    // albumPlaylists: ApiJson.albums.data[0],
    // mainArtistPlaylist: ApiJson,
    mainArtistPlaylist: ApiJson.artists.data[0],
    apiPlaylists: ApiJson.playlists.data,
    trendingSongs: ApiJson.tracks.data,
  })
}

export const apiPlaylist = async (req, res) => {
  const { playlistId } = req.params
  if (!ApiJson) {
    await fetchApi()
  }

  const selectedPlaylist = ApiJson.playlists.data.find(
    (playlist) => String(playlist.id) === String(playlistId)
  )
  const playlistApi = await fetch(
    `https://api.deezer.com/playlist/${playlistId}/tracks`
  )
  const playlistJson = await playlistApi.json()

  if (!playlistJson || playlistJson.error) {
    return res.status(400).render('404', {
      pageTitle: '404 Page',
      message: 'This Playlist does not exist',
      linkUrl: '/library',
      linkText: 'My Library',
    })
  }

  const user = res.locals.user
  return res.render('library/playlist', {
    selected: selectedPlaylist,
    songType: 'apiPlaylist',
    pageTitle: selectedPlaylist.title,
    allSongs: playlistJson.data,
    user,
    userPlaylists: res.locals.userPlaylists,
    likedSongs: res.locals.favourites,
  })
}

export const favouritesController = (req, res) => {
  const favSongs = res.locals.favourites
  const user = res.locals.user
  console.log(favSongs)
  return res.render('library/playlist', {
    songType: 'favourites',
    pageTitle: 'Favourites',
    user,
    userPlaylists: res.locals.userPlaylists,
    allSongs: favSongs,
  })
}

export const userPlaylist = async (req, res) => {
  const user = res.locals.user
  const { playlistId } = req.params
  console.log(playlistId)
  const selectedPlaylist = await Playlists.findById(playlistId).populate(
    'savedSongs'
  )
  return res.render('library/playlist', {
    songType: 'UserPlaylist',
    pageTitle: selectedPlaylist.playlistName,
    user,
    userPlaylists: res.locals.userPlaylists,
    likedSongs: res.locals.favourites,
    allSongs: selectedPlaylist.savedSongs,
  })
}

export const album = async (req, res) => {
  const { albumId } = req.params
  const albumApi = await fetch(`https://api.deezer.com/album/${albumId}`)
  const albumJson = await albumApi.json()
  console.log(albumJson)
  if (!albumJson || albumJson.error) {
    return res.status(400).render('404', {
      pageTitle: '404 Page',
      message: 'This album does not exist',
      linkUrl: '/library',
      linkText: 'My Library',
    })
  }
  const user = res.locals.user
  return res.render('library/playlist', {
    songType: 'album',
    pageTitle: `Album: ${albumJson.title}`,
    selected: albumJson,
    allSongs: albumJson.tracks.data,
    user,
    userPlaylists: res.locals.userPlaylists,
    likedSongs: res.locals.favourites,
  })
}

export const artistPlaylist = async (req, res) => {
  const { artistId } = req.params
  const artistInfoApi = await fetch(`https://api.deezer.com/artist/${artistId}`)
  const artistInfo = await artistInfoApi.json()
  // const playing = req.locals.playing
  // console.log(playing, 'Playing song')
  const artistApi = await fetch(
    `https://api.deezer.com/artist/${artistId}/top?limit=100`
  )
  const artistJson = await artistApi.json()
  if (artistJson.data.length === 0) {
    return res.status(400).render('404', {
      pageTitle: '404 Page',
      message: 'This artist does not exist',
      linkUrl: '/',
      linkText: 'GO HOME',
    })
  }

  const user = res.locals.user
  // res.json(artistJson.data)
  return res.render('library/playlist', {
    songType: 'artist',
    pageTitle: artistInfo.name,
    allSongs: artistJson.data,
    selected: artistInfo,
    user,
    userPlaylists: res.locals.userPlaylists,
    likedSongs: res.locals.favourites,
    // playing,
  })
}

export const trendCountry = async (req, res) => {
  const countries = [
    {
      name: 'USA',
      country_code: 'US',
      image:
        'https://images.unsplash.com/photo-1628510118714-d2124aea4b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fEFtZXJpY2ElMjBmbGFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Korea',
      country_code: 'KR',
      image:
        'https://plus.unsplash.com/premium_photo-1670689707736-19975a244910?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c291dGglMjBrb3JlYSUyMGZsYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Tanzania',
      country_code: 'TZ',
      image:
        'https://plus.unsplash.com/premium_photo-1670689707669-95ebe595273d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGFuemFuaWElMjBmbGFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Russia',
      country_code: 'RU',
      image:
        'https://images.unsplash.com/photo-1563451201592-10dd888363ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVzc2lhJTIwZmxhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'South Africa',
      country_code: 'ZA',
      image:
        'https://images.unsplash.com/photo-1619428752198-44bc70f4b27f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c291dGglMjBhZnJpY2ElMjBmbGFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Nigeria',
      country_code: 'NG',
      image:
        'https://plus.unsplash.com/premium_photo-1670552850936-660c3c27bec5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnZXJpYSUyMGZsYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'France',
      country_code: 'FR',
      image:
        'https://images.unsplash.com/photo-1626784008755-539a5985f872?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJhbmNlJTIwZmxhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Canada',
      country_code: 'CA',
      image:
        'https://images.unsplash.com/photo-1551885836-30cdab32f279?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fENhbmFkYSUyMGZsYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Italy',
      country_code: 'IT',
      image:
        'https://images.unsplash.com/photo-1556958540-2378bacb6f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8SXRhbHklMjBmbGFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Spain',
      country_code: 'ES',
      image:
        'https://plus.unsplash.com/premium_photo-1670689707718-354bb3ccc200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3BhaW4lMjBmbGFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Japan',
      country_code: 'JP',
      image:
        'https://plus.unsplash.com/premium_photo-1670689708070-7cd860ad81a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8amFwYW4lMjBmbGFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Mexico',
      country_code: 'MX',
      image:
        'https://plus.unsplash.com/premium_photo-1670782712208-22ff3bc04a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWV4aWNvJTIwZmxhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'British',
      country_code: 'GB',
      image:
        'https://images.unsplash.com/photo-1605807357143-edd7bbfb1067?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJyaXRpc2glMjBmbGFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Australia',
      country_code: 'AU',
      image:
        'https://plus.unsplash.com/premium_photo-1670552850988-47ac2788b9b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF1c3RyYWxpYSUyMGZsYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Sweden',
      country_code: 'SE',
      image:
        'https://plus.unsplash.com/premium_photo-1670782711933-21a434e8195b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3dlZGVuJTIwZmxhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Poland',
      country_code: 'PL',
      image:
        'https://plus.unsplash.com/premium_photo-1670782711936-8e082231b066?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9sYW5kJTIwZmxhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
  ]

  const tracksByCountry = []

  countries.forEach((country) => {
    const url = `https://api.deezer.com/chart/0/tracks?limit=10&index=0&country=${country.country_code}`

    request(url, { json: true }, (err, apiRes, body) => {
      if (err) {
        console.error(err)
        return
      }

      tracksByCountry.push({
        country: country.name,
        code: country.country_code,
        photo: country.image,
        // tracks: body.data,
      })
      console.log(tracksByCountry[0])

      if (tracksByCountry.length === countries.length) {
        res.render('trends/country-trend', {
          pageTitle: 'Trends',
          tracksByCountry: tracksByCountry,
        })
      }
    })
  })
  // return res.render('trends/country-trend', { pageTitle: 'Trends' })
}

export const countryTrend = async (req, res) => {
  const { country, countryId } = req.params


  const countryCode = countryId

  const url = `https://api.deezer.com/chart/0/tracks?limit=10&index=0&country=${countryCode}`
  const user = res.locals.user

  request(url, { json: true }, (err, apiRes, body) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(body.data)

    res.render('trends/trend', {
      songType:'countryTrends',
      name: country,
      country: countryCode,
      tracks: body.data,
      pageTitle: country,
      user,
      userPlaylists: res.locals.userPlaylists,
      likedSongs: res.locals.favourites,
    })
  })
}

export const mainArtistPlaylist = async (req, res) => {
  if (!ApiJson) {
    await fetchApi()
  }
  console.log(ApiJson)
  console.log(res.locals.userPlaylists)
  return res.render('phone-screens/main-playlist', {
    songType: 'mainArtistPlaylist',
    pageTitle: 'Playlist',
    libraryPlaylists: ApiJson,
    mainArtistPlaylist: ApiJson.artists.data,
    userPlaylists: res.locals.userPlaylists,
    likedSongs: res.locals.favourites,
  })
}

export const mainPlaylist = async (req, res) => {
  if (!ApiJson) {
    await fetchApi()
  }
  return res.render('phone-screens/main-playlist', {
    pageTitle: 'Playlist',
    songType: 'mainPlaylist',
    libraryPlaylists: ApiJson,
    apiPlaylists: ApiJson.playlists.data,
    userPlaylists: res.locals.userPlaylists,
    mainArtistPlaylist: ApiJson.artists.data,
    likedSongs: res.locals.favourites,
  })
}

export const userCreatedPlaylist = async (req, res) => {
  if (!ApiJson) {
    await fetchApi()
  }
  console.log(res.locals.userPlaylists)
  return res.render('phone-screens/main-playlist', {
    pageTitle: 'Created Playlist',
    songType: 'createdPlaylist',
    libraryPlaylists: ApiJson,
    apiPlaylists: ApiJson.playlists.data,
    userPlaylists: res.locals.userPlaylists,
    likedSongs: res.locals.favourites,
  })
}

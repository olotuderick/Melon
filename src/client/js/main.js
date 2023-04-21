import { async } from 'regenerator-runtime'
import '../scss/styles.scss'

const isLoading = document.getElementById('is-loading-message')

const popupMessage = document.getElementById('response-messages')
function showFlashMessage(passedMsg) {
  popupMessage.innerText = passedMsg
  popupMessage.className = 'show-flash-message'
  setTimeout(() => {
    popupMessage.className = 'hide-flash-message'
    setTimeout(() => {
      popupMessage.style.display = 'none'
    }, 1000)
  }, 10000)
}

// async function setUserInfo() {}
document.addEventListener('click', function (event) {
  if (event.target.matches('.dropdown-toggle')) {
    var dropdown = event.target.closest('.dropdown')
    dropdown.classList.toggle('open')
    event.stopPropagation()
  } else if (!event.target.closest('.dropdown-menu')) {
    var dropdowns = document.querySelectorAll('.dropdown')
    dropdowns.forEach(function (dropdown) {
      dropdown.classList.remove('open')
    })
  }
})

//phone-menu-bar
const phoneScreenAside = document.querySelectorAll('#phone-screen-aside')
const showPhoneAsideBtn = document.querySelectorAll('#menu-icon')
const hidePhoneAsideBtn = document.querySelectorAll('#hide-phone-screen-aside')

// console.log(phoneScreenAside)
showPhoneAsideBtn.forEach((showBtn) => {
  showBtn.addEventListener('click', () => {
    // console.log('Open Main Menu')
    phoneScreenAside.forEach((phoneAside) => {
      phoneAside.style.display = 'flex'
    })
  })
})

hidePhoneAsideBtn.forEach((hideBtn) => {
  hideBtn.addEventListener('click', () => {
    // console.log('Close Main Menu')
    phoneScreenAside.forEach((phoneAside) => {
      phoneAside.style.display = 'none'
    })
  })
})

//main screen
const MainScreen = document.querySelectorAll('.normal-screen')
const musicDetails = document.querySelectorAll('.music-details')
//full screen
const FullScreenPlayer = document.getElementById(
  'full-screen-player-main-container'
)
const fullScreenCurrentlyPlayingImg = document.querySelector(
  '.currently-playing-cover-image'
)
const PhoneBluredImage = document.getElementById(
  'phone-full-screen-blured-image'
)
const fullScreenPlayerSongName = document.querySelector(
  '.full-screen-player-song-name'
)
const fullScreenPlayerArtist = document.querySelector(
  '.full-screen-player-artist'
)
const minimizeBtn = document.getElementById('go-to-main-screen')

if (FullScreenPlayer) {
  FullScreenPlayer.style.backgroundImage = 'url(/uploads/images/dj-mixer.png)'
  fullScreenCurrentlyPlayingImg.src = '/uploads/images/dj-mixer.png'
  PhoneBluredImage.style.backgroundImage = 'url(/uploads/images/dj-mixer.png)'

  musicDetails.forEach((detailDiv) => {
    detailDiv.addEventListener('click', () => {
      // console.log('Show Full Screen')
      MainScreen.forEach((screen) => {
        screen.style.display = 'none'
      })
      FullScreenPlayer.style.display = 'flex'
    })
  })
  minimizeBtn.addEventListener('click', () => {
    // console.log('Hide Full Screen')
    MainScreen.forEach((screen) => {
      screen.style.display = 'flex'
    })
    FullScreenPlayer.style.display = 'none'
  })
}

const favouriteIcon = document.querySelectorAll('#favourite-song-icon')
favouriteIcon.forEach(async (favIcon) => {
  const { likedSong } = await getFavourite(
    JSON.parse(favIcon.dataset.songObj).id ||
      JSON.parse(favIcon.dataset.songObj).songId
  )
  if (likedSong) {
    if (
      String(likedSong.songId) ===
      String(
        JSON.parse(favIcon.dataset.songObj).id ||
          JSON.parse(favIcon.dataset.songObj).songId
      )
    ) {
      favIcon.src = '/uploads/icons/heart-fill.svg'
    } else {
      favIcon.src = '/uploads/icons/heart.svg'
    }
  }

  favIcon.addEventListener('click', async () => {
    const data = JSON.parse(favIcon.dataset.songObj)
    const songInfo = {
      songId: data.id || data.songId,
      songName: data.title || data.songName,
      artistId: data.artist?.id || data.artistId,
      songArtist: data.artist?.name || data.songArtist,
      albumId: data.album?.id || data.albumId,
      songAlbum: data.album?.title || data.songAlbum,
      songPreview: data.preview || data.songPreview,
      songDuration: data.duration || data.songDuration,
      coverSmall: data.album?.cover_small || data.coverSmall,
      coverBig: data.album?.cover_big || data.coverBig,
    }
    const response = await fetch(`/api/favourite/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(songInfo),
    })
    const song = await response.json()
    // console.log(song)
    if (song) {
      if (String(song.songId) === String(data.id || data.songId)) {
        favIcon.src = '/uploads/icons/heart-fill.svg'
        showFlashMessage(
          `"${
            data.title || data.songName
          }" was succesfully added to "Favourites"`
        )
      } else if (String(song.songId) !== String(data.id || data.songId)) {
        favIcon.src = '/uploads/icons/heart.svg'
        showFlashMessage(
          `"${data.title || data.songName}" was removed from "Favourites"`
        )
      }
    }
  })
})

const removeFavIcon = document.querySelectorAll('#remove-from-favourite')
removeFavIcon.forEach((removeIcon) => {
  removeIcon.addEventListener('click', async () => {
    const response = await fetch(`/api/favourite/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        songId: removeIcon.dataset.songId,
        removeFromFav: true,
      }),
    })
    const song = await response.json()
    const { parentElement: songTrack } = removeIcon.parentElement
    songTrack.style.display = 'none'
    // console.log(song)
    showFlashMessage(`"${song.songName}" was removed from "Favourites"`)
  })
})

const countryVisit = document.querySelectorAll('.visit-country')
const countryPhoto = document.querySelector('.country-photo')
const userProfilePhoto = document.getElementById('profile-photo')
const tracks = document.querySelectorAll('.track')
const songDuration = document.querySelectorAll('#song-duration')
const playingSongName = document.querySelectorAll('.playing-music-name')
const playingSongArtist = document.querySelectorAll('.playing-music-artist')
const playingSongCover = document.querySelectorAll('.playing-music-cover')
const playingSongProgressInput = document.querySelectorAll('.song-progress')
const playingSongCurrentTime = document.querySelectorAll(
  '.playing-current-time'
)

const playingSongTotalTime = document.querySelectorAll('.playing-total-time')
const phonePlayButton = document.getElementById('play-button')
const phonePlayIcon = document.querySelector('.play-icon')
const audioElement = document.getElementById('audioElement')
const playButton = document.querySelectorAll('#toogle-play-song')
const playIcon = document.querySelectorAll('#play-song-icon')
const nextButton = document.querySelectorAll('#next-control')
const prevButton = document.querySelectorAll('#prev-control')
const muteButton = document.querySelectorAll('#toogle-mute')
const shuffleIcon = document.getElementById('toogle-shuffle')
const repeatButton = document.querySelectorAll('#repeat-song')
const repearIcon = document.querySelectorAll('#repeat-song-icon')
var volumeSlider = document.querySelectorAll('#volumeSlider')
const open = document.querySelectorAll('#openBtn')
const close = document.querySelectorAll('#close')
const backgroundOverlay = document.querySelectorAll('#background')

const phonePlayer = document.querySelectorAll('.phone-player')
phonePlayer.forEach((player) => {
  player.style.display = 'none'
})

let mute = false
var previousCurrentTime = 29
let currentIndex = 0
// console.log(volumeSlider)
let volume
volumeSlider.forEach((volumeSlide) => {
  volume = volumeSlide?.value || 0.3 // This variable holds current volume before mute so the user will get the previous volume before muted
})
let que = []
let repeat = false

// console.log(nextButton)
// console.log(prevButton)
// Format all seconds duration to minutes:seconds
songDuration.forEach((span) => {
  const seconds = parseInt(span.textContent)
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  const formattedTime = `${minutes}:${remainingSeconds
    .toString()
    .padStart(2, '0')}`
  span.textContent = formattedTime
})

// Format time to minutes:seconds
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(remainingSeconds).padStart(2, '0')
  return `${formattedMinutes}:${formattedSeconds}`
}

// Play song when
tracks.forEach(async (track) => {
  const tracksObject = await getTrackData(track.dataset.trackId)

  const songExistInQue = que.find(
    (song) => String(song.id) === String(track.dataset.trackId)
  )
  if (!songExistInQue) {
    que.push(tracksObject)
  }
  track.addEventListener('click', async () => {
    const trackId = track.dataset.trackId
    // console.log(trackId, '')
    const trackData = await getTrackData(trackId)
    const previewUrl = trackData.preview
    phonePlayer.forEach((player) => {
      player.style.display = 'flex'
    })
    playingSongName.forEach((name) => (name.innerText = trackData.title))
    playingSongArtist.forEach(
      (artist) => (artist.innerText = trackData.artist.name)
    )
    playingSongCover.forEach((cover) => (cover.src = trackData.album.cover))
    if (FullScreenPlayer) {
      fullScreenPlayerSongName.innerText = trackData.title
      fullScreenPlayerArtist.innerText = trackData.artist.name
      fullScreenCurrentlyPlayingImg.src = trackData.album.cover
      FullScreenPlayer.style.backgroundImage = `url(${trackData.album.cover_xl})`
      PhoneBluredImage.style.backgroundImage = `url(${trackData.album.cover})`
    }
    // console.log(audioElement.duration)

    if (audioElement) {
      audioElement.pause()
    }
    if (audioElement) {
      audioElement.src = previewUrl
    }
    if (audioElement.paused) {
      audioElement.play()
    }
    playIcon.forEach((icon) => {
      icon.src = '/uploads/icons/play.svg'
    })

    // phonePlayIcon.src = '/uploads/icons/pause-colored.svg'
  })
})
// phonePlayer.classList.add('show-player')

audioElement.addEventListener('loadedmetadata', function () {
  const formattedTime = formatTime(audioElement.duration)
  playingSongTotalTime.forEach((totalTime) => {
    totalTime.innerText = formattedTime
  })
  audioElement.volume = 0.1
})
if (countryPhoto) {
  countryVisit.forEach((country) => {
    country.addEventListener('click', () => {
      const photo = country.dataset.countryPhoto
      localStorage.setItem('country', photo)
    })
  })
  countryPhoto.addEventListener('load', () => {
    const photo = localStorage.getItem('country')
    countryPhoto.src = photo
  })
}

// Sync music input range with the current time of the audi playing
audioElement.addEventListener('timeupdate', () => {
  const formattedTime = formatTime(audioElement.currentTime)
  playingSongCurrentTime.forEach((currentTime) => {
    currentTime.innerText = formattedTime
  })
  playingSongProgressInput.forEach((progressInput) => {
    progressInput.value = audioElement.currentTime
  })
  // Check if the song was stopped
  setInterval(function () {
    var currentCurrentTime = audioElement.currentTime
    if (currentCurrentTime >= previousCurrentTime) {
      playIcon.forEach((icon) => {
        icon.src = '/uploads/icons/play-icon.svg'
      })
    }
  }, 1000)
})

// Play songs from the que when user clicks play button without selecting a specific song
function playSong(index, nextOrPrev) {
  // console.log(que[index].title, ':', que[index].artist.name)
  if (!audioElement.src || nextOrPrev) {
    if (index >= 0 && index < que.length) {
      playingSongName.forEach((name) => (name.innerText = que[index].title))
      playingSongArtist.forEach(
        (artist) => (artist.innerText = que[index].artist.name)
      )
      playingSongCover.forEach((cover) => (cover.src = que[index].album.cover))
      if (FullScreenPlayer) {
        fullScreenPlayerSongName.innerText = que[index].title
        fullScreenPlayerArtist.innerText = que[index].artist.name
        FullScreenPlayer.style.backgroundImage = `url(${que[index].album.cover_xl})`

        fullScreenCurrentlyPlayingImg.src = que[index].album.cover
        PhoneBluredImage.style.backgroundImage = `url(${que[index].album.cover})`
      }
      // console.log(audioElement.duration)
      audioElement.src = que[index].preview
      if (!audioElement.paused) {
        audioElement.pause()
      } else {
        audioElement.play()
      }
    }
  }
  /*  if (audioElement.paused) {
    audioElement.play()
  } */
}

// Repeat track
repeatButton.forEach((button) => {
  button.addEventListener('click', () => {
    // console.log('repeat')
    if (!repeat) {
      repearIcon.forEach((icon) => (icon.src = '/uploads/icons/repeat.svg'))
      repeat = true
    } else {
      repearIcon.forEach((icon) => (icon.src = '/uploads/icons/no-repeat.svg'))
      repeat = false
    }
  })
})
// Listen when the song ends
audioElement.addEventListener('ended', () => {
  currentIndex++
  if (currentIndex >= que.length - 1) {
    currentIndex = 0 // Reset index to play from the beginning
  }
  // console.log('Current Index', currentIndex)
  playSong(currentIndex, true)
  // if (!audioElement.paused) {
  //   audioElement.pause()
  // } else {
  //   audioElement.play()
  // }
  playIcon.forEach((icon) => {
    icon.src = '/uploads/icons/play.svg'
  })
  // if (phonePlayIcon) {
  //   phonePlayIcon.src = '/uploads/icons/pause-colored.svg'
  // }
})

// Toogle play song
playButton.forEach((playBTN) => {
  playBTN.addEventListener('click', () => {
    playSong(currentIndex)
    if (audioElement.paused) {
      audioElement.play()
      // phonePlayIcon.src = '/uploads/icons/pause-colored.svg'
      playIcon.forEach((icon) => {
        icon.src = '/uploads/icons/play.svg'
      })
    } else {
      audioElement.pause()
      playIcon.forEach((icon) => {
        icon.src = '/uploads/icons/play-icon.svg'
      })
      // phonePlayIcon.src = '/uploads/icons/pause-colored.svg'
    }
  })
})

// Phone play toogle button

/* phonePlayButton.addEventListener('click', () => {
  if (audioElement.paused) {
    phonePlayIcon.src = '/uploads/icons/pause-colored.svg'
    playIcon.forEach((icon) => {
      icon.src = '/uploads/icons/play.svg'
    })
    audioElement.play()
  } else {
    phonePlayIcon.src = '/uploads/icons/play-icon-colored.svg'
    playIcon.forEach((icon) => {
      icon.src = '/uploads/icons/play-icon.svg'
    })
    audioElement.pause()
  }
}) */

// Pause when Space key is clicked
document.addEventListener('keydown', function (event) {
  if (event.code === 'Space') {
    event.preventDefault() // Prevent space key from scrolling the page
    if (audioElement.paused) {
      audioElement.play()
    } else {
      audioElement.pause()
    }
  }
})
// Play next song
nextButton.forEach((nextBtn) => {
  nextBtn.addEventListener('click', () => {
    // console.log('Next')
    // console.log(currentIndex, que.length - 1)
    audioElement.pause()
    if (currentIndex === que.length - 1) {
      currentIndex = 0
    } else {
      currentIndex = currentIndex + 1
    }
    // console.log('Current Song', currentIndex)
    playSong(currentIndex, true)
    // if (!audioElement.paused) {
    //   audioElement.pause()
    // } else {
    //   audioElement.play()
    // }
    playIcon.forEach((icon) => {
      icon.src = '/uploads/icons/play.svg'
    })
  })
})
// Play previous song
prevButton.forEach((prevBtn) => {
  prevBtn.addEventListener('click', () => {
    // console.log('Prev')
    // console.log(currentIndex)
    audioElement.pause()
    if (currentIndex === 0) {
      currentIndex = que.length - 1
    } else {
      currentIndex = currentIndex - 1
    }
    // console.log('Current Song', currentIndex)
    playSong(currentIndex, true)
    // if (!audioElement.paused) {
    //   audioElement.pause()
    // } else {
    //   audioElement.play()
    // }
    playIcon.forEach((icon) => {
      icon.src = '/uploads/icons/play.svg'
    })
  })
})

//controls shuffle
let shuffling = false
function shuffleFn() {
  que.sort(function () {
    return 0.5 - Math.random()
  })
  if (shuffling === true) {
    shuffling = 'true'
    shuffleIcon.src = '/uploads/icons/shuffle-on.svg'
    // console.log('shuffling')
  } else {
    shuffling = false
    shuffleIcon.src === '/uploads/icons/shuffle.svg'
    // console.log('not-shuffling')
  }
  // console.log('hello')
}

shuffleIcon.addEventListener('click', shuffleFn)

// Controls sound
volumeSlider.forEach((volumeSlide) => {
  volumeSlide.addEventListener('input', () => {
    var volumeValue = parseFloat(volumeSlide.value)
    if (mute) {
      mute = false
    }
    muteButton.forEach((muteBTN) => {
      muteBTN.src = '/uploads/icons/volume-up.svg'
    })
    if (volumeValue >= 0 && volumeValue <= 1) {
      audioElement.volume = volumeValue
      volume = volumeValue
    }
    if (volumeValue == 0) {
      mute = true
      muteButton.forEach((muteBTN) => {
        muteBTN.src = '/uploads/icons/no-volume.svg'
      })
    }
  })
})
// Toogle mute
muteButton.forEach((muteBTN) => {
  muteBTN.addEventListener('click', () => {
    if (!mute) {
      mute = true
      audioElement.volume = 0
      volumeSlider.forEach((volumeSlide) => {
        volumeSlide.value = 0
      })
      muteBTN.src = '/uploads/icons/no-volume.svg'
    } else {
      mute = false
      if (volume == 0) {
        audioElement.volume = 0.2
        volumeSlider.forEach((volumeSlide) => {
          volumeSlide.value = 0.2
        })
      } else {
        audioElement.volume = volume
        volumeSlider.forEach((volumeSlide) => {
          volumeSlide.value = volume
        })
      }
      muteBTN.src = '/uploads/icons/volume-up.svg'
    }
  })
})

// Control audio with music range

audioElement.addEventListener('loadedmetadata', function () {
  // Update audio current time when the range value changes
  playingSongProgressInput.forEach((progressInput) => {
    progressInput.addEventListener('input', function () {
      // console.log('Music Time Input')
      var currentTime = audioElement.duration * (progressInput.value / 100)
      audioElement.currentTime = currentTime
    })
  })

  // Update range value when audio current time changes
  audioElement.addEventListener('timeupdate', function () {
    var currentTimePercentage =
      (audioElement.currentTime / audioElement.duration) * 100
    playingSongProgressInput.forEach((progressInput) => {
      progressInput.value = currentTimePercentage
    })
  })
})

async function getTrackData(trackId) {
  const response = await fetch(`/api/songs/${trackId}`)
  const data = await response.json()
  return data
}

async function getFavourite(songID) {
  const response = await fetch(`/api/is-favourite/${songID}`)
  const data = await response.json()
  return data
}

// Fetch songs for  a playlist to add them in a que
const url = new URL(window.location.href)
if (url.pathname.startsWith('/artist')) {
  fetch(`/api/album-to-play/${url.pathname.split('/')[2]}`)
    .then((response) => response.json())
    .then((json) => {
      json.map((song) => que.push(song))
    })
    .then((json2) => console.log(que))
}

// Instagram
/* document
  .getElementById('instagram-share-btn')
  .addEventListener('click', function () {
    // Generate the shareable link to your landing page with relevant metadata
    var landingPageUrl = 'https://www.yourwebsite.com/landing-page'
    var musicTitle = 'Music Title'
    var musicThumbnailUrl = 'https://www.yourwebsite.com/music-thumbnail.jpg'
    var shareableLink =
      landingPageUrl +
      '?title=' +
      encodeURIComponent(musicTitle) +
      '&thumbnail=' +
      encodeURIComponent(musicThumbnailUrl)

    // Redirect user to Instagram with pre-filled shareable link as caption
    window.location.href =
      'https://www.instagram.com/share?url=' + encodeURIComponent(shareableLink)
  }) */

// Set user profile info
fetch('/api/user')
  .then((response) => response.json())
  .then((user) => {
    // console.log(user)
    if (user.avatarUrl && userProfilePhoto) {
      userProfilePhoto.src = user.avatarUrl
    } else if (userProfilePhoto) {
      userProfilePhoto.src =
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    }
  })

// Show playlist modal
const createPlayListBtn = document.getElementById('create-playlist-button')
const createPlaylistForm = document.getElementById('create-playlist-form')
const createPlaylistInput = document.querySelector(
  '#create-playlist-form input'
)
const modelPopupContainer = document.querySelector('.modal-options')
const modalPlaylist = document.querySelectorAll('.modal-option-one')

let clickedSong
function show(event) {
  document.body.classList.toggle('open')
  const { songObj } = event.target.dataset
  // console.log(songObj)
  if (songObj === 'empty-playlist') {
    createPlayListBtn.style.display = 'none'
    createPlaylistForm.style.display = 'flex'
    modelPopupContainer.style.opacity = 0.3
    modalPlaylist.forEach((playlist) => {
      playlist.style.cursor = 'default'
      playlist.removeEventListener('click', () => {})
    })
    clickedSong = undefined
  } else {
    createPlayListBtn.style.display = 'flex'
    createPlaylistForm.style.display = 'none'
    modelPopupContainer.style.opacity = 1
    modalPlaylist.forEach((playlist) => {
      playlist.style.cursor = 'pointer'
    })
    clickedSong = JSON.parse(songObj)
  }
}
open.forEach((button) => button.addEventListener('click', show))
close.forEach((button) => button.addEventListener('click', show))
backgroundOverlay.forEach((button) => button.addEventListener('click', show))

createPlaylistForm.style.display = 'none'
createPlayListBtn.addEventListener('click', () => {
  createPlayListBtn.style.display = 'none'
  createPlaylistForm.style.display = 'flex'
  // console.log('Create Playlist')
})

createPlaylistForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  const { value: inputValue } = createPlaylistInput
  if (inputValue === '') {
    return
  }
  const songAdded = {
    songId: clickedSong?.id || clickedSong?.songId,
    songName: clickedSong?.title || clickedSong?.songName,
    artistId: clickedSong?.artist?.id || clickedSong?.artistId,
    songArtist: clickedSong?.artist?.name || clickedSong?.songArtist,
    albumId: clickedSong?.album?.id || clickedSong?.albumId,
    songAlbum: clickedSong?.album?.title || clickedSong?.songAlbum,
    songPreview: clickedSong?.preview || clickedSong?.songPreview,
    songDuration: clickedSong?.duration || clickedSong?.songDuration,
    coverSmall: clickedSong?.album?.cover_small || clickedSong?.coverSmall,
    coverBig: clickedSong?.album?.cover_big || clickedSong?.coverBig,
  }
  const response = await fetch(`/api/add-to-playlist/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ playlistName: inputValue, addedSong: songAdded }),
  })
  const responseJson = await response.json()
  // console.log(responseJson)
  if (responseJson) {
    if (responseJson.msg) {
      showFlashMessage(responseJson.msg)
      modifyPageFun(playlistMongoId, createdPlaylistName)
      createPlaylistInput.value = ''
      return
    }
    document.body.classList.remove('open')
    const { playlistName: createdPlaylistName, playlistMongoId } = responseJson
    if (createdPlaylistName) {
      showFlashMessage('Your playlist was created successfully')
      modifyPageFun(playlistMongoId, createdPlaylistName)
    }
  }
  createPlaylistInput.value = ''
})
function modifyPageFun(playlistMongoId, createdPlaylistName) {
  //modify modal
  const li = document.createElement('li')
  li.className = 'modal-option-one'
  li.dataset.playlistId = playlistMongoId
  const img = document.createElement('img')
  img.src = '/uploads/icons/list-outlined.svg'
  const span = document.createElement('span')
  span.innerText = createdPlaylistName
  li.appendChild(img)
  li.appendChild(span)
  modelPopupContainer.appendChild(li)
  const noPlaylistText = modelPopupContainer.querySelector('h2')
  li.addEventListener('click', () => {
    addToPlaylistClick(li)
  })
  if (noPlaylistText) {
    noPlaylistText.style.display = 'none'
  }
  //modify aside
  const asidePlaylistsContainer = document.querySelector(
    '#aside-playlists-container'
  )
  const playlistLi = document.createElement('a')
  playlistLi.href = `/playlist/${playlistMongoId}`
  playlistLi.innerText = createdPlaylistName
  asidePlaylistsContainer.appendChild(playlistLi)
}

modalPlaylist.forEach((playlist) => {
  playlist.addEventListener('click', async () => {
    addToPlaylistClick(playlist)
    console.dir(playlist.innerText)
  })
})
async function addToPlaylistClick(clickedPlaylist) {
  // console.log('Playlist Clicked')
  console.dir(clickedPlaylist)
  const { playlistId } = clickedPlaylist.dataset
  const songAdded = {
    songId: clickedSong.id || clickedSong.songId,
    songName: clickedSong.title || clickedSong.songName,
    artistId: clickedSong.artist?.id || clickedSong.artistId,
    songArtist: clickedSong.artist?.name || clickedSong.songArtist,
    albumId: clickedSong.album?.id || clickedSong.albumId,
    songAlbum: clickedSong.album?.title || clickedSong.songAlbum,
    songPreview: clickedSong.preview || clickedSong.songPreview,
    songDuration: clickedSong.duration || clickedSong.songDuration,
    coverSmall: clickedSong.album?.cover_small || clickedSong.coverSmall,
    coverBig: clickedSong.album?.cover_big || clickedSong.coverBig,
  }
  const response = await fetch(`/api/add-to-playlist/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ playlistId, addedSong: songAdded }),
  })
  const responseJson = await response.json()
  // console.log(responseJson)
  if (responseJson) {
    if (responseJson.msg) {
      showFlashMessage(responseJson.msg)
      return
    }
    document.body.classList.remove('open')
    showFlashMessage(
      `"${songAdded.songName}" was successfully added to "${clickedPlaylist.innerText}"`
    )
  }
}

// Search
const recentTrack = document.querySelectorAll('#recent-search')
var existingData = JSON.parse(localStorage.getItem('myArray'))

// console.log('Search')
recentTrack.forEach((trackObj) => {
  const track = trackObj.dataset.trackSearchId
  trackObj.addEventListener('click', () => {
    existingData.push(track)
    localStorage.setItem('recent', JSON.stringify(existingData))
    // console.log(existingData)
  })
})

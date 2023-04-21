"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _regeneratorRuntime2 = require("regenerator-runtime");
require("../scss/styles.scss");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var isLoading = document.getElementById('is-loading-message');
var popupMessage = document.getElementById('response-messages');
function showFlashMessage(passedMsg) {
  popupMessage.innerText = passedMsg;
  popupMessage.className = 'show-flash-message';
  setTimeout(function () {
    popupMessage.className = 'hide-flash-message';
    setTimeout(function () {
      popupMessage.style.display = 'none';
    }, 1000);
  }, 10000);
}

// async function setUserInfo() {}
document.addEventListener('click', function (event) {
  if (event.target.matches('.dropdown-toggle')) {
    var dropdown = event.target.closest('.dropdown');
    dropdown.classList.toggle('open');
    event.stopPropagation();
  } else if (!event.target.closest('.dropdown-menu')) {
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function (dropdown) {
      dropdown.classList.remove('open');
    });
  }
});

//phone-menu-bar
var phoneScreenAside = document.querySelectorAll('#phone-screen-aside');
var showPhoneAsideBtn = document.querySelectorAll('#menu-icon');
var hidePhoneAsideBtn = document.querySelectorAll('#hide-phone-screen-aside');

// console.log(phoneScreenAside)
showPhoneAsideBtn.forEach(function (showBtn) {
  showBtn.addEventListener('click', function () {
    // console.log('Open Main Menu')
    phoneScreenAside.forEach(function (phoneAside) {
      phoneAside.style.display = 'flex';
    });
  });
});
hidePhoneAsideBtn.forEach(function (hideBtn) {
  hideBtn.addEventListener('click', function () {
    // console.log('Close Main Menu')
    phoneScreenAside.forEach(function (phoneAside) {
      phoneAside.style.display = 'none';
    });
  });
});

//main screen
var MainScreen = document.querySelectorAll('.normal-screen');
var musicDetails = document.querySelectorAll('.music-details');
//full screen
var FullScreenPlayer = document.getElementById('full-screen-player-main-container');
var fullScreenCurrentlyPlayingImg = document.querySelector('.currently-playing-cover-image');
var PhoneBluredImage = document.getElementById('phone-full-screen-blured-image');
var fullScreenPlayerSongName = document.querySelector('.full-screen-player-song-name');
var fullScreenPlayerArtist = document.querySelector('.full-screen-player-artist');
var minimizeBtn = document.getElementById('go-to-main-screen');
if (FullScreenPlayer) {
  FullScreenPlayer.style.backgroundImage = 'url(/uploads/images/dj-mixer.png)';
  fullScreenCurrentlyPlayingImg.src = '/uploads/images/dj-mixer.png';
  PhoneBluredImage.style.backgroundImage = 'url(/uploads/images/dj-mixer.png)';
  musicDetails.forEach(function (detailDiv) {
    detailDiv.addEventListener('click', function () {
      // console.log('Show Full Screen')
      MainScreen.forEach(function (screen) {
        screen.style.display = 'none';
      });
      FullScreenPlayer.style.display = 'flex';
    });
  });
  minimizeBtn.addEventListener('click', function () {
    // console.log('Hide Full Screen')
    MainScreen.forEach(function (screen) {
      screen.style.display = 'flex';
    });
    FullScreenPlayer.style.display = 'none';
  });
}
var favouriteIcon = document.querySelectorAll('#favourite-song-icon');
favouriteIcon.forEach( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(favIcon) {
    var _yield$getFavourite, likedSong;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return getFavourite(JSON.parse(favIcon.dataset.songObj).id || JSON.parse(favIcon.dataset.songObj).songId);
        case 2:
          _yield$getFavourite = _context2.sent;
          likedSong = _yield$getFavourite.likedSong;
          if (likedSong) {
            if (String(likedSong.songId) === String(JSON.parse(favIcon.dataset.songObj).id || JSON.parse(favIcon.dataset.songObj).songId)) {
              favIcon.src = '/uploads/icons/heart-fill.svg';
            } else {
              favIcon.src = '/uploads/icons/heart.svg';
            }
          }
          favIcon.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _data$artist, _data$artist2, _data$album, _data$album2, _data$album3, _data$album4;
            var data, songInfo, response, song;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  data = JSON.parse(favIcon.dataset.songObj);
                  songInfo = {
                    songId: data.id || data.songId,
                    songName: data.title || data.songName,
                    artistId: ((_data$artist = data.artist) === null || _data$artist === void 0 ? void 0 : _data$artist.id) || data.artistId,
                    songArtist: ((_data$artist2 = data.artist) === null || _data$artist2 === void 0 ? void 0 : _data$artist2.name) || data.songArtist,
                    albumId: ((_data$album = data.album) === null || _data$album === void 0 ? void 0 : _data$album.id) || data.albumId,
                    songAlbum: ((_data$album2 = data.album) === null || _data$album2 === void 0 ? void 0 : _data$album2.title) || data.songAlbum,
                    songPreview: data.preview || data.songPreview,
                    songDuration: data.duration || data.songDuration,
                    coverSmall: ((_data$album3 = data.album) === null || _data$album3 === void 0 ? void 0 : _data$album3.cover_small) || data.coverSmall,
                    coverBig: ((_data$album4 = data.album) === null || _data$album4 === void 0 ? void 0 : _data$album4.cover_big) || data.coverBig
                  };
                  _context.next = 4;
                  return fetch("/api/favourite/", {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(songInfo)
                  });
                case 4:
                  response = _context.sent;
                  _context.next = 7;
                  return response.json();
                case 7:
                  song = _context.sent;
                  // console.log(song)
                  if (song) {
                    if (String(song.songId) === String(data.id || data.songId)) {
                      favIcon.src = '/uploads/icons/heart-fill.svg';
                      showFlashMessage("\"".concat(data.title || data.songName, "\" was succesfully added to \"Favourites\""));
                    } else if (String(song.songId) !== String(data.id || data.songId)) {
                      favIcon.src = '/uploads/icons/heart.svg';
                      showFlashMessage("\"".concat(data.title || data.songName, "\" was removed from \"Favourites\""));
                    }
                  }
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          })));
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var removeFavIcon = document.querySelectorAll('#remove-from-favourite');
removeFavIcon.forEach(function (removeIcon) {
  removeIcon.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var response, song, songTrack;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return fetch("/api/favourite/", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              songId: removeIcon.dataset.songId,
              removeFromFav: true
            })
          });
        case 2:
          response = _context3.sent;
          _context3.next = 5;
          return response.json();
        case 5:
          song = _context3.sent;
          songTrack = removeIcon.parentElement.parentElement;
          songTrack.style.display = 'none';
          // console.log(song)
          showFlashMessage("\"".concat(song.songName, "\" was removed from \"Favourites\""));
        case 9:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
});
var countryVisit = document.querySelectorAll('.visit-country');
var countryPhoto = document.querySelector('.country-photo');
var userProfilePhoto = document.getElementById('profile-photo');
var tracks = document.querySelectorAll('.track');
var songDuration = document.querySelectorAll('#song-duration');
var playingSongName = document.querySelectorAll('.playing-music-name');
var playingSongArtist = document.querySelectorAll('.playing-music-artist');
var playingSongCover = document.querySelectorAll('.playing-music-cover');
var playingSongProgressInput = document.querySelectorAll('.song-progress');
var playingSongCurrentTime = document.querySelectorAll('.playing-current-time');
var playingSongTotalTime = document.querySelectorAll('.playing-total-time');
var phonePlayButton = document.getElementById('play-button');
var phonePlayIcon = document.querySelector('.play-icon');
var audioElement = document.getElementById('audioElement');
var playButton = document.querySelectorAll('#toogle-play-song');
var playIcon = document.querySelectorAll('#play-song-icon');
var nextButton = document.querySelectorAll('#next-control');
var prevButton = document.querySelectorAll('#prev-control');
var muteButton = document.querySelectorAll('#toogle-mute');
var shuffleIcon = document.getElementById('toogle-shuffle');
var repeatButton = document.querySelectorAll('#repeat-song');
var repearIcon = document.querySelectorAll('#repeat-song-icon');
var volumeSlider = document.querySelectorAll('#volumeSlider');
var open = document.querySelectorAll('#openBtn');
var close = document.querySelectorAll('#close');
var backgroundOverlay = document.querySelectorAll('#background');
var phonePlayer = document.querySelectorAll('.phone-player');
phonePlayer.forEach(function (player) {
  player.style.display = 'none';
});
var mute = false;
var previousCurrentTime = 29;
var currentIndex = 0;
// console.log(volumeSlider)
var volume;
volumeSlider.forEach(function (volumeSlide) {
  volume = (volumeSlide === null || volumeSlide === void 0 ? void 0 : volumeSlide.value) || 0.3; // This variable holds current volume before mute so the user will get the previous volume before muted
});

var que = [];
var repeat = false;

// console.log(nextButton)
// console.log(prevButton)
// Format all seconds duration to minutes:seconds
songDuration.forEach(function (span) {
  var seconds = parseInt(span.textContent);
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;
  var formattedTime = "".concat(minutes, ":").concat(remainingSeconds.toString().padStart(2, '0'));
  span.textContent = formattedTime;
});

// Format time to minutes:seconds
function formatTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = Math.floor(seconds % 60);
  var formattedMinutes = String(minutes).padStart(2, '0');
  var formattedSeconds = String(remainingSeconds).padStart(2, '0');
  return "".concat(formattedMinutes, ":").concat(formattedSeconds);
}

// Play song when
tracks.forEach( /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(track) {
    var tracksObject, songExistInQue;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return getTrackData(track.dataset.trackId);
        case 2:
          tracksObject = _context5.sent;
          songExistInQue = que.find(function (song) {
            return String(song.id) === String(track.dataset.trackId);
          });
          if (!songExistInQue) {
            que.push(tracksObject);
          }
          track.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var trackId, trackData, previewUrl;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  trackId = track.dataset.trackId; // console.log(trackId, '')
                  _context4.next = 3;
                  return getTrackData(trackId);
                case 3:
                  trackData = _context4.sent;
                  previewUrl = trackData.preview;
                  phonePlayer.forEach(function (player) {
                    player.style.display = 'flex';
                  });
                  playingSongName.forEach(function (name) {
                    return name.innerText = trackData.title;
                  });
                  playingSongArtist.forEach(function (artist) {
                    return artist.innerText = trackData.artist.name;
                  });
                  playingSongCover.forEach(function (cover) {
                    return cover.src = trackData.album.cover;
                  });
                  if (FullScreenPlayer) {
                    fullScreenPlayerSongName.innerText = trackData.title;
                    fullScreenPlayerArtist.innerText = trackData.artist.name;
                    fullScreenCurrentlyPlayingImg.src = trackData.album.cover;
                    FullScreenPlayer.style.backgroundImage = "url(".concat(trackData.album.cover_xl, ")");
                    PhoneBluredImage.style.backgroundImage = "url(".concat(trackData.album.cover, ")");
                  }
                  // console.log(audioElement.duration)

                  if (audioElement) {
                    audioElement.pause();
                  }
                  if (audioElement) {
                    audioElement.src = previewUrl;
                  }
                  if (audioElement.paused) {
                    audioElement.play();
                  }
                  playIcon.forEach(function (icon) {
                    icon.src = '/uploads/icons/play.svg';
                  });

                  // phonePlayIcon.src = '/uploads/icons/pause-colored.svg'
                case 14:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          })));
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x2) {
    return _ref4.apply(this, arguments);
  };
}());
// phonePlayer.classList.add('show-player')

audioElement.addEventListener('loadedmetadata', function () {
  var formattedTime = formatTime(audioElement.duration);
  playingSongTotalTime.forEach(function (totalTime) {
    totalTime.innerText = formattedTime;
  });
  audioElement.volume = 0.1;
});
if (countryPhoto) {
  countryVisit.forEach(function (country) {
    country.addEventListener('click', function () {
      var photo = country.dataset.countryPhoto;
      localStorage.setItem('country', photo);
    });
  });
  countryPhoto.addEventListener('load', function () {
    var photo = localStorage.getItem('country');
    countryPhoto.src = photo;
  });
}

// Sync music input range with the current time of the audi playing
audioElement.addEventListener('timeupdate', function () {
  var formattedTime = formatTime(audioElement.currentTime);
  playingSongCurrentTime.forEach(function (currentTime) {
    currentTime.innerText = formattedTime;
  });
  playingSongProgressInput.forEach(function (progressInput) {
    progressInput.value = audioElement.currentTime;
  });
  // Check if the song was stopped
  setInterval(function () {
    var currentCurrentTime = audioElement.currentTime;
    if (currentCurrentTime >= previousCurrentTime) {
      playIcon.forEach(function (icon) {
        icon.src = '/uploads/icons/play-icon.svg';
      });
    }
  }, 1000);
});

// Play songs from the que when user clicks play button without selecting a specific song
function playSong(index, nextOrPrev) {
  // console.log(que[index].title, ':', que[index].artist.name)
  if (!audioElement.src || nextOrPrev) {
    if (index >= 0 && index < que.length) {
      playingSongName.forEach(function (name) {
        return name.innerText = que[index].title;
      });
      playingSongArtist.forEach(function (artist) {
        return artist.innerText = que[index].artist.name;
      });
      playingSongCover.forEach(function (cover) {
        return cover.src = que[index].album.cover;
      });
      if (FullScreenPlayer) {
        fullScreenPlayerSongName.innerText = que[index].title;
        fullScreenPlayerArtist.innerText = que[index].artist.name;
        FullScreenPlayer.style.backgroundImage = "url(".concat(que[index].album.cover_xl, ")");
        fullScreenCurrentlyPlayingImg.src = que[index].album.cover;
        PhoneBluredImage.style.backgroundImage = "url(".concat(que[index].album.cover, ")");
      }
      // console.log(audioElement.duration)
      audioElement.src = que[index].preview;
      if (!audioElement.paused) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
    }
  }
  /*  if (audioElement.paused) {
    audioElement.play()
  } */
}

// Repeat track
repeatButton.forEach(function (button) {
  button.addEventListener('click', function () {
    // console.log('repeat')
    if (!repeat) {
      repearIcon.forEach(function (icon) {
        return icon.src = '/uploads/icons/repeat.svg';
      });
      repeat = true;
    } else {
      repearIcon.forEach(function (icon) {
        return icon.src = '/uploads/icons/no-repeat.svg';
      });
      repeat = false;
    }
  });
});
// Listen when the song ends
audioElement.addEventListener('ended', function () {
  currentIndex++;
  if (currentIndex >= que.length - 1) {
    currentIndex = 0; // Reset index to play from the beginning
  }
  // console.log('Current Index', currentIndex)
  playSong(currentIndex, true);
  // if (!audioElement.paused) {
  //   audioElement.pause()
  // } else {
  //   audioElement.play()
  // }
  playIcon.forEach(function (icon) {
    icon.src = '/uploads/icons/play.svg';
  });
  // if (phonePlayIcon) {
  //   phonePlayIcon.src = '/uploads/icons/pause-colored.svg'
  // }
});

// Toogle play song
playButton.forEach(function (playBTN) {
  playBTN.addEventListener('click', function () {
    playSong(currentIndex);
    if (audioElement.paused) {
      audioElement.play();
      // phonePlayIcon.src = '/uploads/icons/pause-colored.svg'
      playIcon.forEach(function (icon) {
        icon.src = '/uploads/icons/play.svg';
      });
    } else {
      audioElement.pause();
      playIcon.forEach(function (icon) {
        icon.src = '/uploads/icons/play-icon.svg';
      });
      // phonePlayIcon.src = '/uploads/icons/pause-colored.svg'
    }
  });
});

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
    event.preventDefault(); // Prevent space key from scrolling the page
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }
});
// Play next song
nextButton.forEach(function (nextBtn) {
  nextBtn.addEventListener('click', function () {
    // console.log('Next')
    // console.log(currentIndex, que.length - 1)
    audioElement.pause();
    if (currentIndex === que.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex = currentIndex + 1;
    }
    // console.log('Current Song', currentIndex)
    playSong(currentIndex, true);
    // if (!audioElement.paused) {
    //   audioElement.pause()
    // } else {
    //   audioElement.play()
    // }
    playIcon.forEach(function (icon) {
      icon.src = '/uploads/icons/play.svg';
    });
  });
});
// Play previous song
prevButton.forEach(function (prevBtn) {
  prevBtn.addEventListener('click', function () {
    // console.log('Prev')
    // console.log(currentIndex)
    audioElement.pause();
    if (currentIndex === 0) {
      currentIndex = que.length - 1;
    } else {
      currentIndex = currentIndex - 1;
    }
    // console.log('Current Song', currentIndex)
    playSong(currentIndex, true);
    // if (!audioElement.paused) {
    //   audioElement.pause()
    // } else {
    //   audioElement.play()
    // }
    playIcon.forEach(function (icon) {
      icon.src = '/uploads/icons/play.svg';
    });
  });
});

//controls shuffle
var shuffling = false;
function shuffleFn() {
  que.sort(function () {
    return 0.5 - Math.random();
  });
  if (shuffling === true) {
    shuffling = 'true';
    shuffleIcon.src = '/uploads/icons/shuffle-on.svg';
    // console.log('shuffling')
  } else {
    shuffling = false;
    shuffleIcon.src === '/uploads/icons/shuffle.svg';
    // console.log('not-shuffling')
  }
  // console.log('hello')
}

shuffleIcon.addEventListener('click', shuffleFn);

// Controls sound
volumeSlider.forEach(function (volumeSlide) {
  volumeSlide.addEventListener('input', function () {
    var volumeValue = parseFloat(volumeSlide.value);
    if (mute) {
      mute = false;
    }
    muteButton.forEach(function (muteBTN) {
      muteBTN.src = '/uploads/icons/volume-up.svg';
    });
    if (volumeValue >= 0 && volumeValue <= 1) {
      audioElement.volume = volumeValue;
      volume = volumeValue;
    }
    if (volumeValue == 0) {
      mute = true;
      muteButton.forEach(function (muteBTN) {
        muteBTN.src = '/uploads/icons/no-volume.svg';
      });
    }
  });
});
// Toogle mute
muteButton.forEach(function (muteBTN) {
  muteBTN.addEventListener('click', function () {
    if (!mute) {
      mute = true;
      audioElement.volume = 0;
      volumeSlider.forEach(function (volumeSlide) {
        volumeSlide.value = 0;
      });
      muteBTN.src = '/uploads/icons/no-volume.svg';
    } else {
      mute = false;
      if (volume == 0) {
        audioElement.volume = 0.2;
        volumeSlider.forEach(function (volumeSlide) {
          volumeSlide.value = 0.2;
        });
      } else {
        audioElement.volume = volume;
        volumeSlider.forEach(function (volumeSlide) {
          volumeSlide.value = volume;
        });
      }
      muteBTN.src = '/uploads/icons/volume-up.svg';
    }
  });
});

// Control audio with music range

audioElement.addEventListener('loadedmetadata', function () {
  // Update audio current time when the range value changes
  playingSongProgressInput.forEach(function (progressInput) {
    progressInput.addEventListener('input', function () {
      // console.log('Music Time Input')
      var currentTime = audioElement.duration * (progressInput.value / 100);
      audioElement.currentTime = currentTime;
    });
  });

  // Update range value when audio current time changes
  audioElement.addEventListener('timeupdate', function () {
    var currentTimePercentage = audioElement.currentTime / audioElement.duration * 100;
    playingSongProgressInput.forEach(function (progressInput) {
      progressInput.value = currentTimePercentage;
    });
  });
});
function getTrackData(_x3) {
  return _getTrackData.apply(this, arguments);
}
function _getTrackData() {
  _getTrackData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(trackId) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return fetch("/api/songs/".concat(trackId));
        case 2:
          response = _context8.sent;
          _context8.next = 5;
          return response.json();
        case 5:
          data = _context8.sent;
          return _context8.abrupt("return", data);
        case 7:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _getTrackData.apply(this, arguments);
}
function getFavourite(_x4) {
  return _getFavourite.apply(this, arguments);
} // Fetch songs for  a playlist to add them in a que
function _getFavourite() {
  _getFavourite = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(songID) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return fetch("/api/is-favourite/".concat(songID));
        case 2:
          response = _context9.sent;
          _context9.next = 5;
          return response.json();
        case 5:
          data = _context9.sent;
          return _context9.abrupt("return", data);
        case 7:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _getFavourite.apply(this, arguments);
}
var url = new URL(window.location.href);
if (url.pathname.startsWith('/artist')) {
  fetch("/api/album-to-play/".concat(url.pathname.split('/')[2])).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.map(function (song) {
      return que.push(song);
    });
  }).then(function (json2) {
    return console.log(que);
  });
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
fetch('/api/user').then(function (response) {
  return response.json();
}).then(function (user) {
  // console.log(user)
  if (user.avatarUrl && userProfilePhoto) {
    userProfilePhoto.src = user.avatarUrl;
  } else if (userProfilePhoto) {
    userProfilePhoto.src = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
  }
});

// Show playlist modal
var createPlayListBtn = document.getElementById('create-playlist-button');
var createPlaylistForm = document.getElementById('create-playlist-form');
var createPlaylistInput = document.querySelector('#create-playlist-form input');
var modelPopupContainer = document.querySelector('.modal-options');
var modalPlaylist = document.querySelectorAll('.modal-option-one');
var clickedSong;
function show(event) {
  document.body.classList.toggle('open');
  var songObj = event.target.dataset.songObj;
  // console.log(songObj)
  if (songObj === 'empty-playlist') {
    createPlayListBtn.style.display = 'none';
    createPlaylistForm.style.display = 'flex';
    modelPopupContainer.style.opacity = 0.3;
    modalPlaylist.forEach(function (playlist) {
      playlist.style.cursor = 'default';
      playlist.removeEventListener('click', function () {});
    });
    clickedSong = undefined;
  } else {
    createPlayListBtn.style.display = 'flex';
    createPlaylistForm.style.display = 'none';
    modelPopupContainer.style.opacity = 1;
    modalPlaylist.forEach(function (playlist) {
      playlist.style.cursor = 'pointer';
    });
    clickedSong = JSON.parse(songObj);
  }
}
open.forEach(function (button) {
  return button.addEventListener('click', show);
});
close.forEach(function (button) {
  return button.addEventListener('click', show);
});
backgroundOverlay.forEach(function (button) {
  return button.addEventListener('click', show);
});
createPlaylistForm.style.display = 'none';
createPlayListBtn.addEventListener('click', function () {
  createPlayListBtn.style.display = 'none';
  createPlaylistForm.style.display = 'flex';
  // console.log('Create Playlist')
});

createPlaylistForm.addEventListener('submit', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(event) {
    var _clickedSong, _clickedSong2, _clickedSong3, _clickedSong4, _clickedSong5, _clickedSong5$artist, _clickedSong6, _clickedSong7, _clickedSong7$artist, _clickedSong8, _clickedSong9, _clickedSong9$album, _clickedSong10, _clickedSong11, _clickedSong11$album, _clickedSong12, _clickedSong13, _clickedSong14, _clickedSong15, _clickedSong16, _clickedSong17, _clickedSong17$album, _clickedSong18, _clickedSong19, _clickedSong19$album, _clickedSong20;
    var inputValue, songAdded, response, responseJson, createdPlaylistName, playlistMongoId;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          event.preventDefault();
          inputValue = createPlaylistInput.value;
          if (!(inputValue === '')) {
            _context6.next = 4;
            break;
          }
          return _context6.abrupt("return");
        case 4:
          songAdded = {
            songId: ((_clickedSong = clickedSong) === null || _clickedSong === void 0 ? void 0 : _clickedSong.id) || ((_clickedSong2 = clickedSong) === null || _clickedSong2 === void 0 ? void 0 : _clickedSong2.songId),
            songName: ((_clickedSong3 = clickedSong) === null || _clickedSong3 === void 0 ? void 0 : _clickedSong3.title) || ((_clickedSong4 = clickedSong) === null || _clickedSong4 === void 0 ? void 0 : _clickedSong4.songName),
            artistId: ((_clickedSong5 = clickedSong) === null || _clickedSong5 === void 0 ? void 0 : (_clickedSong5$artist = _clickedSong5.artist) === null || _clickedSong5$artist === void 0 ? void 0 : _clickedSong5$artist.id) || ((_clickedSong6 = clickedSong) === null || _clickedSong6 === void 0 ? void 0 : _clickedSong6.artistId),
            songArtist: ((_clickedSong7 = clickedSong) === null || _clickedSong7 === void 0 ? void 0 : (_clickedSong7$artist = _clickedSong7.artist) === null || _clickedSong7$artist === void 0 ? void 0 : _clickedSong7$artist.name) || ((_clickedSong8 = clickedSong) === null || _clickedSong8 === void 0 ? void 0 : _clickedSong8.songArtist),
            albumId: ((_clickedSong9 = clickedSong) === null || _clickedSong9 === void 0 ? void 0 : (_clickedSong9$album = _clickedSong9.album) === null || _clickedSong9$album === void 0 ? void 0 : _clickedSong9$album.id) || ((_clickedSong10 = clickedSong) === null || _clickedSong10 === void 0 ? void 0 : _clickedSong10.albumId),
            songAlbum: ((_clickedSong11 = clickedSong) === null || _clickedSong11 === void 0 ? void 0 : (_clickedSong11$album = _clickedSong11.album) === null || _clickedSong11$album === void 0 ? void 0 : _clickedSong11$album.title) || ((_clickedSong12 = clickedSong) === null || _clickedSong12 === void 0 ? void 0 : _clickedSong12.songAlbum),
            songPreview: ((_clickedSong13 = clickedSong) === null || _clickedSong13 === void 0 ? void 0 : _clickedSong13.preview) || ((_clickedSong14 = clickedSong) === null || _clickedSong14 === void 0 ? void 0 : _clickedSong14.songPreview),
            songDuration: ((_clickedSong15 = clickedSong) === null || _clickedSong15 === void 0 ? void 0 : _clickedSong15.duration) || ((_clickedSong16 = clickedSong) === null || _clickedSong16 === void 0 ? void 0 : _clickedSong16.songDuration),
            coverSmall: ((_clickedSong17 = clickedSong) === null || _clickedSong17 === void 0 ? void 0 : (_clickedSong17$album = _clickedSong17.album) === null || _clickedSong17$album === void 0 ? void 0 : _clickedSong17$album.cover_small) || ((_clickedSong18 = clickedSong) === null || _clickedSong18 === void 0 ? void 0 : _clickedSong18.coverSmall),
            coverBig: ((_clickedSong19 = clickedSong) === null || _clickedSong19 === void 0 ? void 0 : (_clickedSong19$album = _clickedSong19.album) === null || _clickedSong19$album === void 0 ? void 0 : _clickedSong19$album.cover_big) || ((_clickedSong20 = clickedSong) === null || _clickedSong20 === void 0 ? void 0 : _clickedSong20.coverBig)
          };
          _context6.next = 7;
          return fetch("/api/add-to-playlist/", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              playlistName: inputValue,
              addedSong: songAdded
            })
          });
        case 7:
          response = _context6.sent;
          _context6.next = 10;
          return response.json();
        case 10:
          responseJson = _context6.sent;
          if (!responseJson) {
            _context6.next = 20;
            break;
          }
          if (!responseJson.msg) {
            _context6.next = 17;
            break;
          }
          showFlashMessage(responseJson.msg);
          modifyPageFun(playlistMongoId, createdPlaylistName);
          createPlaylistInput.value = '';
          return _context6.abrupt("return");
        case 17:
          document.body.classList.remove('open');
          createdPlaylistName = responseJson.playlistName, playlistMongoId = responseJson.playlistMongoId;
          if (createdPlaylistName) {
            showFlashMessage('Your playlist was created successfully');
            modifyPageFun(playlistMongoId, createdPlaylistName);
          }
        case 20:
          createPlaylistInput.value = '';
        case 21:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x5) {
    return _ref6.apply(this, arguments);
  };
}());
function modifyPageFun(playlistMongoId, createdPlaylistName) {
  //modify modal
  var li = document.createElement('li');
  li.className = 'modal-option-one';
  li.dataset.playlistId = playlistMongoId;
  var img = document.createElement('img');
  img.src = '/uploads/icons/list-outlined.svg';
  var span = document.createElement('span');
  span.innerText = createdPlaylistName;
  li.appendChild(img);
  li.appendChild(span);
  modelPopupContainer.appendChild(li);
  var noPlaylistText = modelPopupContainer.querySelector('h2');
  li.addEventListener('click', function () {
    addToPlaylistClick(li);
  });
  if (noPlaylistText) {
    noPlaylistText.style.display = 'none';
  }
  //modify aside
  var asidePlaylistsContainer = document.querySelector('#aside-playlists-container');
  var playlistLi = document.createElement('a');
  playlistLi.href = "/playlist/".concat(playlistMongoId);
  playlistLi.innerText = createdPlaylistName;
  asidePlaylistsContainer.appendChild(playlistLi);
}
modalPlaylist.forEach(function (playlist) {
  playlist.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          addToPlaylistClick(playlist);
          console.dir(playlist.innerText);
        case 2:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  })));
});
function addToPlaylistClick(_x6) {
  return _addToPlaylistClick.apply(this, arguments);
} // Search
function _addToPlaylistClick() {
  _addToPlaylistClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(clickedPlaylist) {
    var _clickedSong$artist, _clickedSong$artist2, _clickedSong$album, _clickedSong$album2, _clickedSong$album3, _clickedSong$album4;
    var playlistId, songAdded, response, responseJson;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          // console.log('Playlist Clicked')
          console.dir(clickedPlaylist);
          playlistId = clickedPlaylist.dataset.playlistId;
          songAdded = {
            songId: clickedSong.id || clickedSong.songId,
            songName: clickedSong.title || clickedSong.songName,
            artistId: ((_clickedSong$artist = clickedSong.artist) === null || _clickedSong$artist === void 0 ? void 0 : _clickedSong$artist.id) || clickedSong.artistId,
            songArtist: ((_clickedSong$artist2 = clickedSong.artist) === null || _clickedSong$artist2 === void 0 ? void 0 : _clickedSong$artist2.name) || clickedSong.songArtist,
            albumId: ((_clickedSong$album = clickedSong.album) === null || _clickedSong$album === void 0 ? void 0 : _clickedSong$album.id) || clickedSong.albumId,
            songAlbum: ((_clickedSong$album2 = clickedSong.album) === null || _clickedSong$album2 === void 0 ? void 0 : _clickedSong$album2.title) || clickedSong.songAlbum,
            songPreview: clickedSong.preview || clickedSong.songPreview,
            songDuration: clickedSong.duration || clickedSong.songDuration,
            coverSmall: ((_clickedSong$album3 = clickedSong.album) === null || _clickedSong$album3 === void 0 ? void 0 : _clickedSong$album3.cover_small) || clickedSong.coverSmall,
            coverBig: ((_clickedSong$album4 = clickedSong.album) === null || _clickedSong$album4 === void 0 ? void 0 : _clickedSong$album4.cover_big) || clickedSong.coverBig
          };
          _context10.next = 5;
          return fetch("/api/add-to-playlist/", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              playlistId: playlistId,
              addedSong: songAdded
            })
          });
        case 5:
          response = _context10.sent;
          _context10.next = 8;
          return response.json();
        case 8:
          responseJson = _context10.sent;
          if (!responseJson) {
            _context10.next = 15;
            break;
          }
          if (!responseJson.msg) {
            _context10.next = 13;
            break;
          }
          showFlashMessage(responseJson.msg);
          return _context10.abrupt("return");
        case 13:
          document.body.classList.remove('open');
          showFlashMessage("\"".concat(songAdded.songName, "\" was successfully added to \"").concat(clickedPlaylist.innerText, "\""));
        case 15:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _addToPlaylistClick.apply(this, arguments);
}
var recentTrack = document.querySelectorAll('#recent-search');
var existingData = JSON.parse(localStorage.getItem('myArray'));

// console.log('Search')
recentTrack.forEach(function (trackObj) {
  var track = trackObj.dataset.trackSearchId;
  trackObj.addEventListener('click', function () {
    existingData.push(track);
    localStorage.setItem('recent', JSON.stringify(existingData));
    // console.log(existingData)
  });
});
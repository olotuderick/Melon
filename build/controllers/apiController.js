"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.songIsLiked = exports.songController = exports.favouriteSong = exports.albumToPlay = exports.addToPlaylist = void 0;
var _regeneratorRuntime2 = require("regenerator-runtime");
var _Playlist = require("../models/Playlist");
var _Song = _interopRequireDefault(require("../models/Song"));
var _middlewares = require("../middlewares");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var songController = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var id, response, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          id = req.params.id;
          _context.next = 3;
          return fetch("https://api.deezer.com/track/".concat(id));
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          data = _context.sent;
          // console.log(data, 'data')
          req.session.playing = data;
          req.session.trackId = data.id;
          // console.log(req.session.playing, "This is not globally")
          res.json(data);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function songController(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.songController = songController;
var albumToPlay = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var artistId, artistApi, artistJson;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          artistId = req.params.artistId;
          _context2.next = 3;
          return fetch("https://api.deezer.com/artist/".concat(artistId, "/top?limit=100"));
        case 3:
          artistApi = _context2.sent;
          _context2.next = 6;
          return artistApi.json();
        case 6:
          artistJson = _context2.sent;
          res.json(artistJson.data);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function albumToPlay(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.albumToPlay = albumToPlay;
var favouriteSong = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$body, songId, songName, artistId, albumId, songAlbum, songArtist, songPreview, songDuration, coverSmall, coverBig, removeFromFav, favourites, songToDelete, songExistsInFav, songExists, createdSong, _createdSong;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, songId = _req$body.songId, songName = _req$body.songName, artistId = _req$body.artistId, albumId = _req$body.albumId, songAlbum = _req$body.songAlbum, songArtist = _req$body.songArtist, songPreview = _req$body.songPreview, songDuration = _req$body.songDuration, coverSmall = _req$body.coverSmall, coverBig = _req$body.coverBig, removeFromFav = _req$body.removeFromFav;
          favourites = res.locals.favourites;
          if (!removeFromFav) {
            _context3.next = 9;
            break;
          }
          _context3.next = 5;
          return favourites.find(function (song) {
            return String(song.likedSong.songId) === String(songId);
          });
        case 5:
          songToDelete = _context3.sent;
          _context3.next = 8;
          return _Playlist.Favourites.findByIdAndDelete(songToDelete._id);
        case 8:
          return _context3.abrupt("return", res.json({
            removed: true,
            removedSongId: songId,
            songName: songToDelete.likedSong.songName
          }));
        case 9:
          if (!(favourites && favourites.length !== 0)) {
            _context3.next = 34;
            break;
          }
          _context3.next = 12;
          return favourites.find(function (song) {
            return String(song.likedSong.songId) === String(songId);
          });
        case 12:
          songExistsInFav = _context3.sent;
          if (!songExistsInFav) {
            _context3.next = 17;
            break;
          }
          _context3.next = 16;
          return _Playlist.Favourites.findByIdAndDelete(songExistsInFav._id);
        case 16:
          return _context3.abrupt("return", res.status('201').json({
            msg: 'Song Already Exists'
          }));
        case 17:
          _context3.next = 19;
          return _Song["default"].findOne({
            songId: songId
          });
        case 19:
          songExists = _context3.sent;
          console.log(songExists);
          if (!songExists) {
            _context3.next = 26;
            break;
          }
          console.log('Song Already Created');
          _context3.next = 25;
          return _Playlist.Favourites.create({
            likedSong: songExists._id
          });
        case 25:
          return _context3.abrupt("return", res.status('201').json(req.body));
        case 26:
          _context3.next = 28;
          return _Song["default"].create({
            songId: songId,
            songName: songName,
            artistId: artistId,
            albumId: albumId,
            songAlbum: songAlbum,
            songArtist: songArtist,
            songPreview: songPreview,
            songDuration: songDuration,
            coverSmall: coverSmall,
            coverBig: coverBig
          });
        case 28:
          createdSong = _context3.sent;
          _context3.next = 31;
          return _Playlist.Favourites.create({
            likedSong: createdSong._id
          });
        case 31:
          return _context3.abrupt("return", res.status('201').json(req.body));
        case 34:
          _context3.next = 36;
          return _Song["default"].create({
            songId: songId,
            songName: songName,
            songArtist: songArtist,
            artistId: artistId,
            albumId: albumId,
            songAlbum: songAlbum,
            songPreview: songPreview,
            songDuration: songDuration,
            coverSmall: coverSmall,
            coverBig: coverBig
          });
        case 36:
          _createdSong = _context3.sent;
          _context3.next = 39;
          return _Playlist.Favourites.create({
            likedSong: _createdSong._id
          });
        case 39:
          return _context3.abrupt("return", res.status('201').json(req.body));
        case 40:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function favouriteSong(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.favouriteSong = favouriteSong;
var songIsLiked = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var songID, favourites, songExists, likedSong;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          songID = req.params.songID;
          favourites = res.locals.favourites;
          if (!(favourites && favourites.length !== 0)) {
            _context4.next = 14;
            break;
          }
          _context4.next = 5;
          return favourites.find(function (song) {
            return String(song.likedSong.songId) === String(songID);
          });
        case 5:
          songExists = _context4.sent;
          if (!songExists) {
            _context4.next = 11;
            break;
          }
          likedSong = songExists.likedSong;
          return _context4.abrupt("return", res.json({
            exists: true,
            likedSong: likedSong
          }));
        case 11:
          return _context4.abrupt("return", res.json({
            exists: false
          }));
        case 12:
          _context4.next = 15;
          break;
        case 14:
          res.json({
            exists: false
          });
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function songIsLiked(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.songIsLiked = songIsLiked;
var addToPlaylist = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body2, playlistId, playlistName, addedSong, user, allPlaylist, playlistAlreadyExists, createdPlaylist, songExists, choosenPlaylist, songExistsInPlaylist, createdSong, _createdPlaylist, _createdSong2, _createdPlaylist2;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          console.log('Playlist...');
          _req$body2 = req.body, playlistId = _req$body2.playlistId, playlistName = _req$body2.playlistName, addedSong = _req$body2.addedSong;
          console.log('Req Body...', playlistId, playlistName, addedSong);
          user = res.locals.user;
          allPlaylist = res.locals.userPlaylists;
          if (!playlistName) {
            _context5.next = 14;
            break;
          }
          console.log('All Playlists', allPlaylist);
          _context5.next = 9;
          return allPlaylist.find(function (playlist) {
            return String(playlist.playlistName) === String(playlistName);
          });
        case 9:
          playlistAlreadyExists = _context5.sent;
          console.log(playlistAlreadyExists);
          if (!playlistAlreadyExists) {
            _context5.next = 14;
            break;
          }
          console.log('This playlist is already created');
          return _context5.abrupt("return", res.status('400').json({
            msg: 'This playlist is already created'
          }));
        case 14:
          if (!(playlistName && !playlistId && !addedSong.songId)) {
            _context5.next = 20;
            break;
          }
          console.log('Create Empty Playlist');
          _context5.next = 18;
          return _Playlist.Playlists.create({
            playlistOwner: user._id,
            playlistName: playlistName,
            playlistImage: '',
            dateCreated: Date.now()
          });
        case 18:
          createdPlaylist = _context5.sent;
          return _context5.abrupt("return", res.json({
            playlistMongoId: createdPlaylist._id,
            playlistName: playlistName
          }));
        case 20:
          console.log('addedSong', addedSong);
          _context5.next = 23;
          return _Song["default"].findOne({
            songId: addedSong.songId
          });
        case 23:
          songExists = _context5.sent;
          console.log('songExists', songExists);
          //Add Songs to a playlist that is already created
          if (!(playlistId && !playlistName)) {
            _context5.next = 53;
            break;
          }
          _context5.next = 28;
          return _Playlist.Playlists.findById(playlistId).populate('savedSongs');
        case 28:
          choosenPlaylist = _context5.sent;
          console.log('choosenPlaylist', choosenPlaylist);
          //If the song is already saved in the database
          if (!songExists) {
            _context5.next = 47;
            break;
          }
          _context5.next = 33;
          return choosenPlaylist.savedSongs.find(function (song) {
            return String(song.songId) === String(songExists.songId);
          });
        case 33:
          songExistsInPlaylist = _context5.sent;
          console.log('songExistsInPlaylist', songExistsInPlaylist);
          if (!songExistsInPlaylist) {
            _context5.next = 37;
            break;
          }
          return _context5.abrupt("return", res.status('400').json({
            msg: 'This song already exists in this playlist'
          }));
        case 37:
          if (!songExistsInPlaylist) {
            _context5.next = 42;
            break;
          }
          console.log('Song Exists in Playlist');
          return _context5.abrupt("return", res.status('201').json(req.body));
        case 42:
          choosenPlaylist.savedSongs.push(songExists._id);
          choosenPlaylist.save();
          return _context5.abrupt("return", res.status('201').json(req.body));
        case 45:
          _context5.next = 53;
          break;
        case 47:
          _context5.next = 49;
          return _Song["default"].create({
            songId: addedSong.songId,
            songName: addedSong.songName,
            artistId: addedSong.artistId,
            albumId: addedSong.albumId,
            songAlbum: addedSong.songAlbum,
            songArtist: addedSong.songArtist,
            songPreview: addedSong.songPreview,
            songDuration: addedSong.songDuration,
            coverSmall: addedSong.coverSmall,
            coverBig: addedSong.coverBig
          });
        case 49:
          createdSong = _context5.sent;
          choosenPlaylist.savedSongs.push(createdSong._id);
          choosenPlaylist.save();
          return _context5.abrupt("return", res.status('201').json(req.body));
        case 53:
          if (!songExists) {
            _context5.next = 60;
            break;
          }
          _context5.next = 56;
          return _Playlist.Playlists.create({
            playlistOwner: user._id,
            playlistName: playlistName,
            playlistImage: '',
            dateCreated: Date.now(),
            savedSongs: songExists._id
          });
        case 56:
          _createdPlaylist = _context5.sent;
          return _context5.abrupt("return", res.status('201').json({
            playlistMongoId: _createdPlaylist._id,
            playlistName: playlistName,
            addedSong: addedSong
          }));
        case 60:
          _context5.next = 62;
          return _Song["default"].create({
            songId: addedSong.songId,
            songName: addedSong.songName,
            artistId: addedSong.artistId,
            albumId: addedSong.albumId,
            songAlbum: addedSong.songAlbum,
            songArtist: addedSong.songArtist,
            songPreview: addedSong.songPreview,
            songDuration: addedSong.songDuration,
            coverSmall: addedSong.coverSmall,
            coverBig: addedSong.coverBig
          });
        case 62:
          _createdSong2 = _context5.sent;
          _context5.next = 65;
          return _Playlist.Playlists.create({
            playlistOwner: user._id,
            playlistName: playlistName,
            playlistImage: '',
            dateCreated: Date.now(),
            savedSongs: _createdSong2._id
          });
        case 65:
          _createdPlaylist2 = _context5.sent;
          return _context5.abrupt("return", res.status('201').json({
            playlistMongoId: _createdPlaylist2._id,
            playlistName: playlistName,
            addedSong: addedSong
          }));
        case 67:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function addToPlaylist(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.addToPlaylist = addToPlaylist;
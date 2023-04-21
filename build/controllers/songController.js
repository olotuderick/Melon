"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userPlaylist = exports.userCreatedPlaylist = exports.trendCountry = exports.mainPlaylist = exports.mainArtistPlaylist = exports.libraryHome = exports.home = exports.favouritesController = exports.countryTrend = exports.artistPlaylist = exports.apiPlaylist = exports.album = void 0;
var _regeneratorRuntime2 = require("regenerator-runtime");
var _Song = _interopRequireDefault(require("../models/Song"));
var _User = _interopRequireDefault(require("../models/User"));
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var _request = _interopRequireDefault(require("request"));
var _middlewares = require("../middlewares");
var _Playlist = require("../models/Playlist");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var home = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _res$render;
    var user;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          user = res.locals.user;
          if (_middlewares.ApiJson) {
            _context.next = 4;
            break;
          }
          _context.next = 4;
          return (0, _middlewares.fetchApi)();
        case 4:
          return _context.abrupt("return", res.render('home', (_res$render = {
            pageTitle: 'Home',
            userPlaylists: res.locals.userPlaylists,
            likedSongs: res.locals.favourites,
            user: user
          }, _defineProperty(_res$render, "userPlaylists", res.locals.userPlaylists), _defineProperty(_res$render, "playlists", _middlewares.ApiJson.playlists.data), _defineProperty(_res$render, "trendingArtists", _middlewares.ApiJson.artists.data), _defineProperty(_res$render, "trendingSongs", _middlewares.ApiJson.tracks.data), _res$render)));
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function home(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.home = home;
var libraryHome = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (_middlewares.ApiJson) {
            _context2.next = 3;
            break;
          }
          _context2.next = 3;
          return (0, _middlewares.fetchApi)();
        case 3:
          console.log(_middlewares.ApiJson.albums.data[0].cover_medium);
          console.log('userPlaylists', res.locals.userPlaylists);
          return _context2.abrupt("return", res.render('library/library', {
            pageTitle: 'Library',
            userPlaylists: res.locals.userPlaylists,
            likedSongs: res.locals.favourites,
            libraryPlaylists: _middlewares.ApiJson,
            /* playlists, */
            // albumPlaylists: ApiJson.albums.data[0],
            // mainArtistPlaylist: ApiJson,
            mainArtistPlaylist: _middlewares.ApiJson.artists.data[0],
            apiPlaylists: _middlewares.ApiJson.playlists.data,
            trendingSongs: _middlewares.ApiJson.tracks.data
          }));
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function libraryHome(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.libraryHome = libraryHome;
var apiPlaylist = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var playlistId, selectedPlaylist, playlistApi, playlistJson, user;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          playlistId = req.params.playlistId;
          if (_middlewares.ApiJson) {
            _context3.next = 4;
            break;
          }
          _context3.next = 4;
          return (0, _middlewares.fetchApi)();
        case 4:
          selectedPlaylist = _middlewares.ApiJson.playlists.data.find(function (playlist) {
            return String(playlist.id) === String(playlistId);
          });
          _context3.next = 7;
          return (0, _nodeFetch["default"])("https://api.deezer.com/playlist/".concat(playlistId, "/tracks"));
        case 7:
          playlistApi = _context3.sent;
          _context3.next = 10;
          return playlistApi.json();
        case 10:
          playlistJson = _context3.sent;
          if (!(!playlistJson || playlistJson.error)) {
            _context3.next = 13;
            break;
          }
          return _context3.abrupt("return", res.status(400).render('404', {
            pageTitle: '404 Page',
            message: 'This Playlist does not exist',
            linkUrl: '/library',
            linkText: 'My Library'
          }));
        case 13:
          user = res.locals.user;
          return _context3.abrupt("return", res.render('library/playlist', {
            selected: selectedPlaylist,
            songType: 'apiPlaylist',
            pageTitle: selectedPlaylist.title,
            allSongs: playlistJson.data,
            user: user,
            userPlaylists: res.locals.userPlaylists,
            likedSongs: res.locals.favourites
          }));
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function apiPlaylist(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.apiPlaylist = apiPlaylist;
var favouritesController = function favouritesController(req, res) {
  var favSongs = res.locals.favourites;
  var user = res.locals.user;
  console.log(favSongs);
  return res.render('library/playlist', {
    songType: 'favourites',
    pageTitle: 'Favourites',
    user: user,
    userPlaylists: res.locals.userPlaylists,
    allSongs: favSongs
  });
};
exports.favouritesController = favouritesController;
var userPlaylist = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var user, playlistId, selectedPlaylist;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          user = res.locals.user;
          playlistId = req.params.playlistId;
          console.log(playlistId);
          _context4.next = 5;
          return _Playlist.Playlists.findById(playlistId).populate('savedSongs');
        case 5:
          selectedPlaylist = _context4.sent;
          return _context4.abrupt("return", res.render('library/playlist', {
            songType: 'UserPlaylist',
            pageTitle: selectedPlaylist.playlistName,
            user: user,
            userPlaylists: res.locals.userPlaylists,
            likedSongs: res.locals.favourites,
            allSongs: selectedPlaylist.savedSongs
          }));
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function userPlaylist(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.userPlaylist = userPlaylist;
var album = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var albumId, albumApi, albumJson, user;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          albumId = req.params.albumId;
          _context5.next = 3;
          return (0, _nodeFetch["default"])("https://api.deezer.com/album/".concat(albumId));
        case 3:
          albumApi = _context5.sent;
          _context5.next = 6;
          return albumApi.json();
        case 6:
          albumJson = _context5.sent;
          console.log(albumJson);
          if (!(!albumJson || albumJson.error)) {
            _context5.next = 10;
            break;
          }
          return _context5.abrupt("return", res.status(400).render('404', {
            pageTitle: '404 Page',
            message: 'This album does not exist',
            linkUrl: '/library',
            linkText: 'My Library'
          }));
        case 10:
          user = res.locals.user;
          return _context5.abrupt("return", res.render('library/playlist', {
            songType: 'album',
            pageTitle: "Album: ".concat(albumJson.title),
            selected: albumJson,
            allSongs: albumJson.tracks.data,
            user: user,
            userPlaylists: res.locals.userPlaylists,
            likedSongs: res.locals.favourites
          }));
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function album(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.album = album;
var artistPlaylist = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var artistId, artistInfoApi, artistInfo, artistApi, artistJson, user;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          artistId = req.params.artistId;
          _context6.next = 3;
          return (0, _nodeFetch["default"])("https://api.deezer.com/artist/".concat(artistId));
        case 3:
          artistInfoApi = _context6.sent;
          _context6.next = 6;
          return artistInfoApi.json();
        case 6:
          artistInfo = _context6.sent;
          _context6.next = 9;
          return (0, _nodeFetch["default"])("https://api.deezer.com/artist/".concat(artistId, "/top?limit=100"));
        case 9:
          artistApi = _context6.sent;
          _context6.next = 12;
          return artistApi.json();
        case 12:
          artistJson = _context6.sent;
          if (!(artistJson.data.length === 0)) {
            _context6.next = 15;
            break;
          }
          return _context6.abrupt("return", res.status(400).render('404', {
            pageTitle: '404 Page',
            message: 'This artist does not exist',
            linkUrl: '/',
            linkText: 'GO HOME'
          }));
        case 15:
          user = res.locals.user; // res.json(artistJson.data)
          return _context6.abrupt("return", res.render('library/playlist', {
            songType: 'artist',
            pageTitle: artistInfo.name,
            allSongs: artistJson.data,
            selected: artistInfo,
            user: user,
            userPlaylists: res.locals.userPlaylists,
            likedSongs: res.locals.favourites
            // playing,
          }));
        case 17:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function artistPlaylist(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.artistPlaylist = artistPlaylist;
var trendCountry = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var countries, tracksByCountry;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          countries = [{
            name: 'USA',
            country_code: 'US',
            image: 'https://images.unsplash.com/photo-1628510118714-d2124aea4b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fEFtZXJpY2ElMjBmbGFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          }, {
            name: 'Korea',
            country_code: 'KR',
            image: 'https://plus.unsplash.com/premium_photo-1670689707736-19975a244910?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c291dGglMjBrb3JlYSUyMGZsYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          }, {
            name: 'Tanzania',
            country_code: 'TZ',
            image: 'https://plus.unsplash.com/premium_photo-1670689707669-95ebe595273d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGFuemFuaWElMjBmbGFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          }, {
            name: 'Russia',
            country_code: 'RU',
            image: 'https://images.unsplash.com/photo-1563451201592-10dd888363ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVzc2lhJTIwZmxhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          }, {
            name: 'South Africa',
            country_code: 'ZA',
            image: 'https://images.unsplash.com/photo-1619428752198-44bc70f4b27f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c291dGglMjBhZnJpY2ElMjBmbGFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          }, {
            name: 'Nigeria',
            country_code: 'NG',
            image: 'https://plus.unsplash.com/premium_photo-1670552850936-660c3c27bec5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlnZXJpYSUyMGZsYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          }, {
            name: 'France',
            country_code: 'FR',
            image: 'https://images.unsplash.com/photo-1626784008755-539a5985f872?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJhbmNlJTIwZmxhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          }, {
            name: 'Canada',
            country_code: 'CA',
            image: 'https://images.unsplash.com/photo-1551885836-30cdab32f279?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fENhbmFkYSUyMGZsYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          }, {
            name: 'Italy',
            country_code: 'IT',
            image: 'https://images.unsplash.com/photo-1556958540-2378bacb6f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8SXRhbHklMjBmbGFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          }, {
            name: 'Spain',
            country_code: 'ES',
            image: 'https://plus.unsplash.com/premium_photo-1670689707718-354bb3ccc200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3BhaW4lMjBmbGFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          }, {
            name: 'Japan',
            country_code: 'JP',
            image: 'https://plus.unsplash.com/premium_photo-1670689708070-7cd860ad81a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8amFwYW4lMjBmbGFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          }, {
            name: 'Mexico',
            country_code: 'MX',
            image: 'https://plus.unsplash.com/premium_photo-1670782712208-22ff3bc04a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWV4aWNvJTIwZmxhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          }, {
            name: 'British',
            country_code: 'GB',
            image: 'https://images.unsplash.com/photo-1605807357143-edd7bbfb1067?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJyaXRpc2glMjBmbGFnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          }, {
            name: 'Australia',
            country_code: 'AU',
            image: 'https://plus.unsplash.com/premium_photo-1670552850988-47ac2788b9b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF1c3RyYWxpYSUyMGZsYWd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          }, {
            name: 'Sweden',
            country_code: 'SE',
            image: 'https://plus.unsplash.com/premium_photo-1670782711933-21a434e8195b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3dlZGVuJTIwZmxhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          }, {
            name: 'Poland',
            country_code: 'PL',
            image: 'https://plus.unsplash.com/premium_photo-1670782711936-8e082231b066?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9sYW5kJTIwZmxhZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          }];
          tracksByCountry = [];
          countries.forEach(function (country) {
            var url = "https://api.deezer.com/chart/0/tracks?limit=10&index=0&country=".concat(country.country_code);
            (0, _request["default"])(url, {
              json: true
            }, function (err, apiRes, body) {
              if (err) {
                console.error(err);
                return;
              }
              tracksByCountry.push({
                country: country.name,
                code: country.country_code,
                photo: country.image
                // tracks: body.data,
              });

              console.log(tracksByCountry[0]);
              if (tracksByCountry.length === countries.length) {
                res.render('trends/country-trend', {
                  pageTitle: 'Trends',
                  tracksByCountry: tracksByCountry
                });
              }
            });
          });
          // return res.render('trends/country-trend', { pageTitle: 'Trends' })
        case 3:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function trendCountry(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.trendCountry = trendCountry;
var countryTrend = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var _req$params, country, countryId, countryCode, url, user;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _req$params = req.params, country = _req$params.country, countryId = _req$params.countryId;
          countryCode = countryId;
          url = "https://api.deezer.com/chart/0/tracks?limit=10&index=0&country=".concat(countryCode);
          user = res.locals.user;
          (0, _request["default"])(url, {
            json: true
          }, function (err, apiRes, body) {
            if (err) {
              console.error(err);
              return;
            }
            console.log(body.data);
            res.render('trends/trend', {
              songType: 'countryTrends',
              name: country,
              country: countryCode,
              tracks: body.data,
              pageTitle: country,
              user: user,
              userPlaylists: res.locals.userPlaylists,
              likedSongs: res.locals.favourites
            });
          });
        case 5:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function countryTrend(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.countryTrend = countryTrend;
var mainArtistPlaylist = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          if (_middlewares.ApiJson) {
            _context9.next = 3;
            break;
          }
          _context9.next = 3;
          return (0, _middlewares.fetchApi)();
        case 3:
          console.log(_middlewares.ApiJson);
          console.log(res.locals.userPlaylists);
          return _context9.abrupt("return", res.render('phone-screens/main-playlist', {
            songType: 'mainArtistPlaylist',
            pageTitle: 'Playlist',
            libraryPlaylists: _middlewares.ApiJson,
            mainArtistPlaylist: _middlewares.ApiJson.artists.data,
            userPlaylists: res.locals.userPlaylists,
            likedSongs: res.locals.favourites
          }));
        case 6:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function mainArtistPlaylist(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
exports.mainArtistPlaylist = mainArtistPlaylist;
var mainPlaylist = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          if (_middlewares.ApiJson) {
            _context10.next = 3;
            break;
          }
          _context10.next = 3;
          return (0, _middlewares.fetchApi)();
        case 3:
          return _context10.abrupt("return", res.render('phone-screens/main-playlist', {
            pageTitle: 'Playlist',
            songType: 'mainPlaylist',
            libraryPlaylists: _middlewares.ApiJson,
            apiPlaylists: _middlewares.ApiJson.playlists.data,
            userPlaylists: res.locals.userPlaylists,
            mainArtistPlaylist: _middlewares.ApiJson.artists.data,
            likedSongs: res.locals.favourites
          }));
        case 4:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function mainPlaylist(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
exports.mainPlaylist = mainPlaylist;
var userCreatedPlaylist = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          if (_middlewares.ApiJson) {
            _context11.next = 3;
            break;
          }
          _context11.next = 3;
          return (0, _middlewares.fetchApi)();
        case 3:
          console.log(res.locals.userPlaylists);
          return _context11.abrupt("return", res.render('phone-screens/main-playlist', {
            pageTitle: 'Created Playlist',
            songType: 'createdPlaylist',
            libraryPlaylists: _middlewares.ApiJson,
            apiPlaylists: _middlewares.ApiJson.playlists.data,
            userPlaylists: res.locals.userPlaylists,
            likedSongs: res.locals.favourites
          }));
        case 5:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function userCreatedPlaylist(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
exports.userCreatedPlaylist = userCreatedPlaylist;
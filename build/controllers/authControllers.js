"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = exports.postLogin = exports.postAuthentication = exports.mainBody = exports.logout = exports.loggedUser = exports.getLogin = exports.getAuthentication = void 0;
var _regeneratorRuntime2 = require("regenerator-runtime");
var _User = _interopRequireDefault(require("../models/User"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _store = _interopRequireDefault(require("store"));
var _middlewares = require("../middlewares");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var mainBody = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", res.render('main-body', {
            pageTitle: 'Home'
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function mainBody(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

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
exports.mainBody = mainBody;
var search = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var searchData, keyword, songApi, user;
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
          keyword = req.query.keyword;
          _context2.next = 6;
          return fetch("https://api.deezer.com/search?q=".concat(keyword)).then(function (res) {
            return res.json();
          }).then(function (data) {
            searchData = data;
          });
        case 6:
          songApi = _context2.sent;
          console.log(searchData);
          user = res.locals.user;
          return _context2.abrupt("return", res.render('music/search', {
            pageTitle: 'Search',
            searchPlaylist: _middlewares.ApiJson.playlists.data,
            searchArtist: _middlewares.ApiJson.artists.data,
            searchTracks: _middlewares.ApiJson.tracks.data,
            searchPodcast: _middlewares.ApiJson.podcasts.data,
            searchAlbums: _middlewares.ApiJson,
            searchEverything: searchData.data,
            likedSongs: res.locals.favourites,
            user: user
          }));
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function search(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.search = search;
var userData = {
  firstName: null,
  lastName: null,
  email: null,
  gender: null,
  password: null,
  username: null,
  avatarUrl: null
};
var displayForm = 'FirstForm';
var getAuthentication = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _store["default"].get('newUser');
          displayForm = 'FirstForm';
          return _context3.abrupt("return", res.render('authentication/auth', {
            pageTitle: 'Authentication',
            displayForm: displayForm
          }));
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getAuthentication(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getAuthentication = getAuthentication;
var postAuthentication = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body, firstName, lastName, email, password, passwordConfirmation, username, emailExists, userNameExists, newUser, createUser, user;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, password = _req$body.password, passwordConfirmation = _req$body.passwordConfirmation, username = _req$body.username;
          if (!(firstName, lastName, email)) {
            _context4.next = 13;
            break;
          }
          _context4.next = 4;
          return _User["default"].findOne({
            email: email
          });
        case 4:
          emailExists = _context4.sent;
          if (!emailExists) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.render('authentication/auth', {
            pageTitle: 'Authentication',
            displayForm: 'FirstForm',
            firstName: firstName,
            lastName: lastName,
            email: email,
            emailErr: 'This e-mail is already used in another account'
          }));
        case 7:
          userData.firstName = firstName;
          userData.lastName = lastName;
          userData.email = email;
          displayForm = 'PasswordForm';
          _store["default"].set('newUser', userData);
          return _context4.abrupt("return", res.render('authentication/auth', {
            pageTitle: 'Authentication',
            displayForm: displayForm
          }));
        case 13:
          if (!(password, passwordConfirmation)) {
            _context4.next = 21;
            break;
          }
          if (!(String(password) !== String(passwordConfirmation))) {
            _context4.next = 17;
            break;
          }
          displayForm = 'PasswordForm';
          return _context4.abrupt("return", res.render('authentication/auth', {
            pageTitle: 'Authentication',
            displayForm: displayForm,
            password: password,
            passwordConfirmation: passwordConfirmation,
            passwordErr: 'Unmatched Passwords'
          }));
        case 17:
          userData.password = password;
          displayForm = 'FinalForm';
          _store["default"].set('newUser', userData);
          return _context4.abrupt("return", res.render('authentication/auth', {
            pageTitle: 'Authentication',
            displayForm: displayForm
          }));
        case 21:
          if (!username) {
            _context4.next = 39;
            break;
          }
          _context4.next = 24;
          return _User["default"].findOne({
            username: username
          });
        case 24:
          userNameExists = _context4.sent;
          if (!userNameExists) {
            _context4.next = 27;
            break;
          }
          return _context4.abrupt("return", res.render('authentication/auth', {
            pageTitle: 'Authentication',
            displayForm: 'FinalForm',
            username: username,
            usernameErr: 'This username is already in use'
          }));
        case 27:
          newUser = _store["default"].get('newUser');
          _context4.next = 30;
          return _User["default"].create({
            firstname: newUser.firstName,
            lastname: newUser.lastName,
            email: newUser.email,
            password: newUser.password,
            username: username,
            avatarUrl: ''
          });
        case 30:
          createUser = _context4.sent;
          console.log(newUser.username);
          _context4.next = 34;
          return _User["default"].findOne({
            email: newUser.email
          });
        case 34:
          user = _context4.sent;
          req.session.userName = user.username;
          displayForm = 'CompletedSignUp';
          _store["default"].set('newUser', {});
          return _context4.abrupt("return", res.redirect('/'));
        case 39:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function postAuthentication(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.postAuthentication = postAuthentication;
var getLogin = function getLogin(req, res) {
  return res.render('authentication/login', {
    pageTitle: 'Login'
  });
};
exports.getLogin = getLogin;
var postLogin = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$body2, username, password, userExists, passwordMatch;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;
          _context5.next = 3;
          return _User["default"].findOne({
            username: username
          });
        case 3:
          userExists = _context5.sent;
          if (userExists) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.render('authentication/login', {
            pageTitle: 'Login',
            usernameErr: 'This username does not exist',
            username: username,
            password: password
          }));
        case 6:
          _context5.next = 8;
          return _bcrypt["default"].compare(password, userExists.password);
        case 8:
          passwordMatch = _context5.sent;
          if (passwordMatch) {
            _context5.next = 11;
            break;
          }
          return _context5.abrupt("return", res.render('authentication/login', {
            pageTitle: 'Login',
            passwordErr: 'Incorrect Password!',
            username: username,
            password: password
          }));
        case 11:
          req.session.userName = userExists.username;
          return _context5.abrupt("return", res.redirect('/'));
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function postLogin(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.postLogin = postLogin;
var loggedUser = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var user;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return _User["default"].findOne({
            username: req.session.userName
          });
        case 2:
          user = _context6.sent;
          res.json(user);
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function loggedUser(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.loggedUser = loggedUser;
var logout = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          req.session.destroy(function (err) {
            if (err) {
              console.log(err);
            } else {
              res.redirect('/login');
            }
          });
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function logout(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.logout = logout;
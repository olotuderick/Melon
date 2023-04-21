"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controller404 = void 0;
var controller404 = function controller404(req, res) {
  res.render('404', {
    pageTitle: '404 Page',
    message: 'Look like you’re lost in space',
    linkUrl: '/',
    linkText: 'GO HOME'
  });
};
exports.controller404 = controller404;
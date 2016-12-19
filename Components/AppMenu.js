'use strict';

var Observable = require('FuseJS/Observable');

/**
 * @param {object} opts
 * @param {string} opts.title
 * @param {Array.<string|object>} opts.route
 */
function MenuItem(opts) {
  if (!opts.title) {
    throw new Error('Cannot have a menu item without a title.');
  }

  if (!opts.route) {
    throw new Error('Cannot have a menu item without a route.');
  }

  this.title = opts.title;
  this.route = opts.route;
}

module.exports.menuItems = Observable(
  new MenuItem({
    title: 'Homepage',
    route: ['home', {}]
  }),
  new MenuItem({
    title: 'Another page',
    route: ['anotherPage', {}]
  })
);

/**
 * @type {function}
 * @param {object} sender
 */
module.exports.navigateToRoute = function (sender) {
  router.push.apply(router, sender.data.route);
  onNavigate.raise();
};

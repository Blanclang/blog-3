function Router() {
  this.routes = {};
  this.currentUrl = '';
  this._init();
}

Router.prototype.route = function(path, callback) {
  this.routes[path] = callback || function(){};
};

Router.prototype.refresh = function() {
  this.currentUrl = location.hash.slice(1) || '/';
  this.routes[this.currentUrl]();
};

Router.prototype._init = function() {
  window.addEventListener('load', this.refresh.bind(this), false);
  window.addEventListener('hashchange', this.refresh.bind(this), false);
}
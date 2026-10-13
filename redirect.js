// Old project paths -> their renamed homes. Keeps the rest of the path, the query and the hash.
(function () {
  var MOVES = { '/brophy-uav-dashboard': '/brophy-fpv-club' };
  var p = location.pathname;
  for (var from in MOVES) {
    if (p === from || p.indexOf(from + '/') === 0) {
      location.replace(MOVES[from] + p.slice(from.length) + location.search + location.hash);
      return;
    }
  }
})();

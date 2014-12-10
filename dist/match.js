(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Match = factory();
  }
}(this, function() {
var Match;

Match = function(property, fns) {
  return function(obj) {
    var fn;
    fn = fns[obj[property]];
    if (fn) {
      return fn.apply(null, arguments);
    } else {
      throw Error("no match for " + property + " == " + obj[property]);
    }
  };
};

return Match;
}));

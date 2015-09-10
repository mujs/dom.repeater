define('mu.dom.repeater', function (require) {
  'use strict';

  var append = require('mu.dom.append'),
      remove = require('mu.dom.remove'),
      clone  = require('mu.dom.clone');
  
  var repeater = function (node) {
    var parent = node.parentNode,
        tpl = clone(node);

    remove(node);
    
    var repeat = function () {
      var copy = clone(tpl);
      append(parent, copy);
      return copy;
    };
  
    return repeat;
  };

  return repeater;
});

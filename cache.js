var cache = (function() {

  this.cache = [];

  this.queryCache = function(string) {

    if(typeof string !== 'string') {

      throw new TypeError('Cache query received invalid input: ' + string);
    }

    for(var i = 0; i < this.cache.length; i++) {

      if( this.cache[i][0] === string) {

        return this.cache[i][1];
      }

      var element = document.querySelector(string);

      if(element) {

        this.addToCache(string, element);
        return element;

      } else {

        return null;
      }
    }

  };

  this.addToCache = function(string, element) {

    var memo = [ string, element ];
    this.cache.push(memo);
  };

  this.removeFromCache = function(string) {

    if(typeof string !== 'string') {

      throw new TypeError('Remove from cache request received invalid input: ' + string);
    }

    for(var i = 0;i < this.cache.length; i++) {

      if( this.cache[i][0] === string) {

        this.cache.splice(i,1);
      }
    }
  }

  return {

    queryCache: queryCache,
    removeFromCache: removeFromCache

  }
})();
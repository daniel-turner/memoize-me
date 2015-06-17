var cache = (function() {

  var memoCache = [];

  this.queryCache = function(string) {

    if(typeof string !== 'string') {

      throw new TypeError('Cache query received invalid input: ' + string);
    }

    if(memoCache.length === 0) {

      return addToCache(string);
    }

    for(var i = 0; i < memoCache.length; i++) {

      if( memoCache[i][0] === string) {

        return memoCache[i][1];
      }
    }

    return addToCache(string);
  };

  this.addToCache = function(string) {

    var element = document.querySelector(string);

    if(element) {

      var memo = [ string, element ];
      memoCache.push(memo);
      return element;
    }

    return null;
  };

  this.removeFromCache = function(string) {

    if(typeof string !== 'string') {

      throw new TypeError('Remove from cache request received invalid input: ' + string);
    }

    for(var i = 0;i < memoCache.length; i++) {

      if( memoCache[i][0] === string) {

        memoCache.splice(i,1);
      }
    }
  }

  return {

    queryCache: queryCache,
    removeFromCache: removeFromCache

  }
})();


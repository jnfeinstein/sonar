'use strict';

angular.module('navigator', [])

.factory('navigator', [ '$q', '$window',
  function($q, $window) {
    var navigator = {};

    navigator.get = function(opts) {
      var timeout = opts.timeout;

      var deferred = $q.defer();

      $window.navigator.geolocation.getCurrentPosition(
        function onSuccess(position) {
          deferred.resolve(position);
        },
        function onError(error) {
          deferred.reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: timeout,
        });

      return deferred.promise;
    }

    return navigator;
  }])

;

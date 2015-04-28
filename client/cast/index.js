angular.module('cast', [])

.controller('castCtrl', [ '$interval', 'navigator',
  function($interval, navigator) {
    var socket = io();

    $interval(function() {
      navigator.get({ timeout: 10000 }).then(function(position) {
        socket.emit('position', position);
        console.log(position);
      });
    }, 10000);
  }])

;

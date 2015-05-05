'use strict';

var Promise = require('bluebird'),
    chromecasts = require('chromecasts')();

chromecasts.on('update', function (player) {
  console.log('detected player: ', player);
  //player.play('http://example.com/my-video.mp4', {title: 'my video', type: 'video/mp4'})
  
  return App.communicate(player);
});

function App() {
  this.chromecasts = [];
}


App.prototype.communicate = function communicate(chromecast) {
  return Promise.promisify(chromecast.status.bind(chromecast)).then(function(res) {
    console.log('response', res);
  }).catch(function(err) {
    console.log('err', err);
  });
};

module.exports = App;

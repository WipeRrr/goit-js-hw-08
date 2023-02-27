import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const pausedTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(pausedTime);

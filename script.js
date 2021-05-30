'use strict ';

const Song = function (name, band, position, points, image) {
  this.name = name;
  this.band = band;
  this.position = position;
  this.points = points;
  this.image = image;
};

const song1 = new Song(
  'Every Breath You Take',
  'The Police',
  1,
  10,
  '/images/song1.jpg'
);
const song2 = new Song(
  'The Eye Of The Tiger',
  'Survivor',
  2,
  9,
  '/images/song2.jpg'
);

const song3 = new Song(
  'I Want To Know What Love Is',
  'Foreigner',
  3,
  8,
  '/images/song3.jpg'
);

const song4 = new Song('Jump', 'van Halen', 4, 7, '/images/song4.jpg');

const song5 = new Song('With Or Without You', 'U2', 5, 6, '/images/song5.jpg');

const song6 = new Song(
  "Sweet Child O' Mine",
  "Guns N' Roses",
  6,
  5,
  '/images/song6.jpg'
);
const song7 = new Song(
  'So Emotional',
  'Whitney Houston',
  7,
  4,
  '/images/song7.jpg'
);

const song8 = new Song(
  'Total Eclipse Of The Heart',
  'Bonnie Tyler',
  8,
  3,
  '/images/song8.jpg'
);

const song9 = new Song(
  'Endless Love',
  'Lional Ritchie & Diana Ross',
  9,
  2,
  '/images/song9.jpg'
);

const song10 = new Song(
  'Centerfold',
  'J. Geils Band',
  10,
  1,
  '/images/song10.jpg'
);

const joker = new Song(
  'Love Is Like A Butterfly',
  'Dolly Parton',
  0,
  0,
  '/images/joker.jpg'
);

const top10 = [
  song1,
  song2,
  song3,
  song4,
  song5,
  song6,
  song7,
  song8,
  song9,
  song10,
  joker,
];

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const total0El = document.querySelector('.total--0');
const total1El = document.querySelector('.total--1');
const current0El = document.querySelector('.current-score--0');
const current1El = document.querySelector('.current-score--1');

const imageEl = document.querySelector('.image');
const btnRules = document.querySelector('.btn-rules');
const btnReset = document.querySelector('.btn-rest');
const btnPlay = document.querySelector('.btn-play');
const btnPause = document.querySelector('.btn-pause');
const btnStop = document.querySelector('.btn-stop');

//Starting condtions
let scores, playing, activePlayer, currentScore;

const init = function () {
  scores = [0, 0];
  playing = true;
  activePlayer = 0;
  currentScore = 100;
};

//reset scores to 100;
btnReset.addEventListener('click', fun);
//shuffle the songs
btnPlay.addEventListener('click', function () {});

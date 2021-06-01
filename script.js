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

const song11 = new Song(
  'Love Is Like A Butterfly',
  'Dolly Parton',
  0,
  0,
  '/images/song11.jpg'
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
  song11,
];

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const total0El = document.querySelector('.total--0');
const total1El = document.querySelector('.total--1');
const current0El = document.querySelector('.current-score--0');
const current1El = document.querySelector('.current-score--1');

const imageEl = document.querySelector('.image');
const songName = document.querySelector('.current-title');
const bandName = document.querySelector('.current-band');

const btnRules = document.querySelector('.btn-rules');
const btnReset = document.querySelector('.btn-reset');
const btnPlay = document.querySelector('.btn-play');
const btnPause = document.querySelector('.btn-pause');
const btnStop = document.querySelector('.btn-stop');

//Starting condtions
let scores, currentScore, playing, activePlayer;

const init = function () {
  scores = [0, 0];
  currentScore = 100;
  playing = true;
  activePlayer = 0;
};
init();

//list first random song
// const randomSong = top10[0];
// // console.log(randomSong);
// console.log(randomSong.position);

//play button
btnPlay.addEventListener('click', function () {
  console.log('Play Button');

  //shuffle the songs
  const shuffle = function (arr) {
    for (let i = 0; i < arr.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  };
  shuffle(top10);
  //list first random song
  const randomSong = top10[0];
  imageEl.src = randomSong.image;

  //if notsong11, remove song points from current score

  if (randomSong !== song11) {
    currentScore -= randomSong.points;
    total0El.textContent = currentScore;
    songName.textContent = randomSong.name;
    bandName.textContent = randomSong.band;
  } else {
    //reset score to 100
    total0El.textContent = 100;
    total0El.classList.remove('player--active');
    total1El.classList.add('player--active');
    //switch players
  }
  console.log(randomSong);
});

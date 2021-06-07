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

const song0 = new Song(
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
  song0,
];

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const total0El = document.querySelector('#score--0');
const total1El = document.querySelector('#score--1');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const song0El = document.querySelector('.player0Song');
const song1El = document.querySelector('.player1Song');

//song details and image
const imageEl = document.querySelector('.image');
const songName = document.querySelector('.current-title');
const bandName = document.querySelector('.current-band');
const songPoints = document.querySelector('.current-song-points');
const songPosition = document.querySelector('.current-song-position');

const btnRules = document.querySelector('.btn-rules');
const btnReset = document.querySelector('.btn-reset');
const btnPlay = document.querySelector('.btn-play');
const btnSaveNSwitch = document.querySelector('.btn-save');
const btnStop = document.querySelector('.btn-stop');

//Starting condtions
let scores, currentScore, playing, activePlayer;

const init = function () {
  scores = [100, 100];
  currentScore = 0;
  playing = true;
  activePlayer = 0;

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  //reset current score to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // hold score
  document.getElementById(`score--${activePlayer}`).textContent = currentScore;

  //switch players
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //reset current for new player
  currentScore = 0;
  // //hold current score before switching players
  // document.getElementById(`score--${activePlayer}`).textContent = currentScore;

  // TRYINGTO SET SCORES TO DISPLAY CORRECTLY AFTER SWITCH AFTER JOKER
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  //player visibilty swap
  song0El.classList.toggle('hidden');
  song1El.classList.toggle('hidden');

  // document.getElementById(`score--${activePlayer}`).textContent =
  //   `score--${activePlayer} `.currentScore;
  console.log(scores);
};

//play button
btnPlay.addEventListener('click', function () {
  if (playing) {
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

    //if not song0, remove song points from current score

    if (randomSong !== song0) {
      currentScore += randomSong.points;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      songName.textContent = randomSong.name;
      bandName.textContent = randomSong.band;
      songPosition.textContent = randomSong.position;
      songPoints.textContent = randomSong.points;
    } else {
      // currentScore = 100;
      // document.getElementById(`score--${activePlayer}`).textContent = 100;
      scores[activePlayer] = 100;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      songName.textContent = song0.name;
      bandName.textContent = song0.band;
      songPoints.textContent = song0.points;
      songPosition.textContent = song0.position;

      document.getElementById(`current--${activePlayer}`).textContent = 'JOKER';

      switchPlayer();
    }
  }
});
//Save and Switch players btn
btnSaveNSwitch.addEventListener('click', function () {
  if (playing) {
    //subtract current from active players score
    currentScore = scores[activePlayer] -= currentScore;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
  switchPlayer();
});

import allGenres from '../genres';

const fullLibrary = new Array(100000);
var titleWords = [];
var authorWords = [];

function getRandom(length, min) {
	return Math.floor((Math.random() * length) + min);
}

function makeRandomPhrase(wordList, numOfWords){
	let phrase = '';
	let numOfOptions = wordList.length;

	for(let i=0; i < numOfWords; i++){
		phrase += ' ' + wordList[getRandom(numOfOptions, 1)];
	}

	return phrase.trim();
}

function getRandomGenres() {
	const genresLength = getRandom(3, 1);
	let allGenresClon = [].concat(allGenres);

	const genres = {};
	let randomIndex = 0;
	let genre = undefined;

	for(let i=0; i < genresLength; i++){
		randomIndex = getRandom(allGenresClon.length, 0);
		genre = allGenresClon[randomIndex];
		if (genre) genres[genre] = genre;
		allGenresClon.splice(randomIndex, 1);
	}

	return genres;
}

function makeRandomFilm(){
	return {
		title: makeRandomPhrase(titleWords, getRandom(5, 1)),
		author: makeRandomPhrase(authorWords, getRandom(3, 1)),
		genres: getRandomGenres()
	};
}

function sendResults(library) {
  self.postMessage({
    library
  });
}

function generateLibrary(library) {
  library.forEach(film => {
  	titleWords = titleWords.concat(film.title.split(" "));
  	authorWords = authorWords.concat(film.author.split(" "));
  });

  for(let j = 0; j < fullLibrary.length; j++) {
  	fullLibrary[j] = makeRandomFilm();
  }

  sendResults(fullLibrary);
}

self.addEventListener('message', function(e) {
  const { library, action } = e.data;

  switch(action){
    case 'init':
      generateLibrary(library);
      break;
    default:
      throw new Error('Please provide an action');
  }
}, false);

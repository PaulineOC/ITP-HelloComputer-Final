const socket = io.connect();
const SpeechRecognition = webkitSpeechRecognition;
const synth = window.speechSynthesis;

let currGameState = {
	currState: GAME_STATES.START,
};

//Pixi Stuff:
let app = new PIXI.Application({ width: canvasWidth, height: canvasHeight, backgoundColor: 0x1099bb });
loadAllSprites();

let subway_in_station_bg = null;
let subway_between_stations_bg = null;

let subway_in_station_texture = null;
let subway_between_stations_texture = null;


PIXI.Loader.shared.load(async (loader, resources) => {

		document.getElementById("start").disabled = true;

		createAllSprites(resources);
		const allDataNames = await getNames(true);
		//const allDataNames = TEST_NAMES;

		console.log('finished loading');
		generatePassengers(allDataNames);
		subway_in_station_texture = resources[`subway-in-station`].texture;
		subway_between_stations_texture = resources[`subway-between-stations`].texture;

		subway_in_station_bg = new PIXI.Sprite(subway_in_station_texture);
		subway_in_station_bg.zOrder = -10;

		subway_between_stations_bg = new PIXI.Sprite(subway_between_stations_texture);
		subway_between_stations_bg.zOrder = -10;

});

const recognition = new SpeechRecognition();
recognition.onresult = (event) => {
		const speechResult = event.results[0][0].transcript;
		console.log('WHAT P SAID: ', speechResult);
		document.querySelector("#spoken-words").textContent = `You are saying: "${speechResult}"`;

		const forServer = {
			query: speechResult,
		};
		socket.emit("from frontend", forServer);
	};


const shuffleWords = (phrase) => {
    var a = phrase.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


const getNames = async (onlyFirstNames = false) => {

	const apiKey= `41164a8c68cc84a6696677e7c5f2cc41`;
	const url = `https://api.parser.name/?api_key=${apiKey}&endpoint=generate&results=25`

	const url2 = `https://randomuser.me/api/?results=100`;
	const resp = await fetch(url2, { mode: "cors" });
	const { results } = await resp.json();

	const onlyEnglishCharNames = results.filter((person)=>{
		var english = /^[A-Za-z0-9]*$/;
		return english.test(person.name.first);
	}).map((person, ind)=>{	

		//first nam
		return onlyFirstNames ? `${person.name.first}` :`${person.name.first} ${person.name.last}`;
	});

	return onlyEnglishCharNames;
};

const levenshteinDistance = (str1 = '', str2 = '') => {
   const track = Array(str2.length + 1).fill(null).map(() =>
   Array(str1.length + 1).fill(null));
   for (let i = 0; i <= str1.length; i += 1) {
      track[0][i] = i;
   }
   for (let j = 0; j <= str2.length; j += 1) {
      track[j][0] = j;
   }
   for (let j = 1; j <= str2.length; j += 1) {
      for (let i = 1; i <= str1.length; i += 1) {
         const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
         track[j][i] = Math.min(
            track[j][i - 1] + 1, // deletion
            track[j - 1][i] + 1, // insertion
            track[j - 1][i - 1] + indicator, // substitution
         );
      }
   }
   return track[str2.length][str1.length];
};

 
//Game ends when final stops reached
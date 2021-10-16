let timeElapsed = 0.0;
let lastTime	= 0.0;
let allPassengers = [];
let hasAddedFirstStopPassengers = false;
let newPitch = 0.0
let speakRate  = 1.0

let gameStatus = GAME_STATES.START

let trainState = {
	stationState: TRAIN_STATES.AT_STATION,
	currStopNum: 0,
};

let switchedInStationBg = false;
let switchedBetweenStationBg = false;

document.onload = () => {
	document.getElementById("start").disabled = false;
}

//Start Game
document.getElementById("start").onclick = () => {
	console.log("starting game");
	setupCanvas();

	//Starting canvas
	const ele = document.getElementById('canvas-container');
	console.log(ele);

	ele.appendChild(app.view);

	newPitch = Math.random() * (3 - 0) + 0;
	console.log(`this game's pitch: ${newPitch}`);
	document.getElementById("start").disabled = true;
	document.getElementById("player-speech").classList.remove("hidden");
	gameStatus = GAME_STATES.START

	app.start();
};

const setupCanvas = () => {
	app.stop();
	//Draw the train interior
   
	// Add a ticker callback to move the sprite back and forth
	app.renderer.backgroundColor = 0x1099bb
	app.clearBeforeRender = true;

	//app.stage.addChild(subway_in_station_bg);
	//Render Update
	app.ticker.add(gameRenderLoop);
};
 

const determineTextHeight = (ind) => {
	if(ind % 2 === 0 && ind!== 0 ){
		let ans = {
			spawnX:  ((ind % 10) * 70), 
			spawnY: 300,
			textY: -120,
		};
		return ans;
	}
	else if(ind === 0){
 		return {
			spawnX:  ((ind % 10) * 70), 
			spawnY: 310,
			textY: -100,
		};
	}

	else {
		let ans = {
			spawnX:  ((ind % 10) * 70)-20, 
			spawnY: 330,
			textY: -50,
		};
		return ans;
	}
}

const generatePassengers = (allNames, resources) => {

	let nameInd = 0;
	let spawnPoint = 
	STOPS.forEach((stop, originInd)=>{
		if(originInd===STOPS.length-1){
			return;
		}

		let maxNumPassengersUpperLimit = stop.stopType === STOP_TYPES.LOCAL ? MAX_LOCAL_PASSENGERS : MAX_EXPRESS_PASSENGERS;
		let maxNumPassengers = getRandomInt(1, maxNumPassengersUpperLimit+1);
	
		//TODO Fix this later:
		for(let i = 0; i < maxNumPassengers ; i++){
			destinationInd = getRandomInt(originInd+1,(STOPS.length));

			let { spawnX, spawnY, textY}  = determineTextHeight(nameInd);

			const name = allNames[nameInd];
			const newPassenger = new Passenger(name, originInd, destinationInd, spawnX, spawnY, textY);

			allPassengers.push(newPassenger);
			nameInd++;
		}
	});
	console.log('generating passengers total # of passengers is:');
	console.log(allPassengers.length);
	document.getElementById("start").disabled = false;
}

const rateGame = () => {
	let total = 0;
	allPassengers.forEach((passenger)=>{
		let diff = passenger.actualExitInd - passenger.destinationInd;
		console.log("here is passenger diff:", diff);
		if(diff===0){
			console.log('adding four');
			total+=4;
		}
		else if(diff>=0 && diff<=2){
			console.log('adding 2');
			total+=2
		}
	});
	return total;
}

 
let firstWords = false;
const gameRenderLoop = (delta) => {
	timeElapsed += delta;
	let gameStatus = currGameState.currState;

 	switch(gameStatus){
		case GAME_STATES.START:
			if(!firstWords){

				console.log('game start');
				app.stage.removeChildren();
				app.stage.addChild(subway_in_station_bg);

				const conductorAnnouncement = `All aboard! The train is departing going to the first stop, ${STOPS[trainState.currStopNum].name}`;
				let utterThis = conductorSpeak(conductorAnnouncement);
				utterThis.onend = () => {
 					currGameState.currState = GAME_STATES.IN_PROGRESS;
				}
				firstWords = true;
			}
			break;
		case GAME_STATES.IN_PROGRESS:
			renderGame();
			break;
		case GAME_STATES.END:
			console.log("GAME IS OVER");
			app.stop();
			//Calculate score
			const playerScore = rateGame();

			const oldAnnouncement =
			`For every passenger who exited at the correct stop, you earn 4 points. 
			For every passenger who left within two stops of their destination, you earn 2 points. 
			For every other passenger, you earn 1 point because you're new to the job! 
			You scored ${playerScore} - good work! Driving a train is harder than it steams!`;

			const conductorAnnouncement = `Now I'm going to score your performance. You got a ${playerScore}. 
			Don't be discouraged, you're new to the job and driving a train is harder than it steams...hehe`
			let utterThis = conductorSpeak(conductorAnnouncement);

			utterThis.onend = () => {
				document.getElementById("spoken-words").textContent = "Thanks for playing!";
				document.getElementById("conductor-speech").classList.add("hidden");
				document.getElementById("start").disabled = false;
 			}
			break;
	}
};

let lastWords = false;
const renderGame = () => {
	switch(trainState.stationState) {
		case TRAIN_STATES.AT_STATION:

			//Change background ONLY once
			if(!switchedInStationBg){
				const currChildren = app.stage.children;
				const onlyPassengers = currChildren.filter((item)=>{
					return item.isSprite === false;
				});
				app.stage.removeChildren();
				app.stage.addChild(subway_in_station_bg);
				onlyPassengers.forEach((passengerContainer)=>{
					app.stage.addChild(passengerContainer);
				});

				switchedBetweenStationBg = false;
				switchedInStationBg = true;
			}

			//Adding passengers for first stop ONLY ONCE
			if( trainState.currStopNum === 0 && !hasAddedFirstStopPassengers){
 				enterPassengers(0);
				hasAddedFirstStopPassengers = true;
			}

			// When it's time to leave the station:
			if(timeElapsed - lastTime >= TIME_AT_STATION) {

				//Last stop
				if(!trainState.currStopNum === STOPS.length-1){
					console.log("Leaving: ", STOPS[trainState.currStopNum]["name"] );
				}

				recognition.stop();
				//Leaving station:

				trainState.currStopNum++;

				// If the train reaches the end of the line
				trainState.stationState = trainState.currStopNum >= STOPS.length ? TRAIN_STATES.END_OF_LINE : TRAIN_STATES.BETWEEN_STATIONS;
				lastTime = timeElapsed;

			}
			break;
		case TRAIN_STATES.BETWEEN_STATIONS:

			//Change background ONLY once
			if(!switchedBetweenStationBg){
				const currChildren = app.stage.children;
				const onlyPassengers = currChildren.filter((item)=>{
					return item.isSprite === false;
				});
				app.stage.removeChildren();
				app.stage.addChild(subway_between_stations_bg);
				onlyPassengers.forEach((passengerContainer)=>{
					app.stage.addChild(passengerContainer);
				});

				switchedBetweenStationBg = true;
				switchedInStationBg = false;
			}

			//Just arrived to new station:
			if(timeElapsed - lastTime >= STOPS[trainState.currStopNum]["timeToHere"]) {
				trainState.stationState = trainState.currStopNum >= STOPS.length ? TRAIN_STATES.END_OF_LINE : TRAIN_STATES.AT_STATION;
 				const conductorAnnouncement = `Now arriving at ${STOPS[trainState.currStopNum]["name"]}`;
				let utterThis = conductorSpeak(conductorAnnouncement);

				utterThis.onend = () => {
					recognition.start();
				}
 
				//Add new users to the subway station
				if(trainState.currStopNum<STOPS.length-1){
					enterPassengers(trainState.currStopNum);
				}

				lastTime = timeElapsed;
			}

			break;
		case TRAIN_STATES.END_OF_LINE:

			if(!lastWords){
				let utterThis = conductorSpeak(`This is the last stop on this train. All passengers, please leave the train. Have a great day!`);
				utterThis.onend = () => {
					allPassengers.forEach((passenger)=>{
						if(passenger.state === PASSENGER_STATUS.ENTERED){
							passenger.leaveTrain(STOPS.length-1);
						}
					});
					app.stage.removeChildren();
					app.stage.addChild(subway_in_station_bg);
					app.render()
					currGameState.currState = GAME_STATES.END
				}
				lastWords = true;
			}
			break;
	}
}

	// https://www.reddit.com/r/PixelArt/comments/7rijnx/oc_pixel_art_remake_of_the_subway_from_night_in/
const enterPassengers = (currStopInd) => {
	const toAdd = allPassengers.filter((passenger)=>{
		if(passenger.state  === PASSENGER_STATUS.WAITING && passenger.originInd === currStopInd ){
			return true;
		}
		return false;
	});

	toAdd.forEach((passenger)=>{
		passenger.enterTrain(trainState.currStopNum);
		//Add passenger to the scene
	});
}

const exitPassengers = (nameData) => {
	const onlyOnTrain = allPassengers.filter((passenger)=>{
		return passenger.state === PASSENGER_STATUS.ENTERED;;
	});

	nameData.forEach((name, ind)=>{

		for(let i = 0; i< onlyOnTrain.length; i++){
			if(onlyOnTrain[i].state === PASSENGER_STATUS.ENTERED && matchesName(name, onlyOnTrain[i].name)){
				onlyOnTrain[i].leaveTrain(trainState.currStopNum);
			}
		}
	});

	allPassengers = onlyOnTrain;
}

const conductorSpeak = (text) => {
	let utterThis = new SpeechSynthesisUtterance(text);
	const ele = document.getElementById("conductor-speech");

	gameStatus = currGameState.currState;

	if(gameStatus === GAME_STATES.END || trainState.stationState === TRAIN_STATES.END_OF_LINE){
		speakRate = 1;
	}

	else if(gameStatus === GAME_STATES.IN_PROGRESS){
		let diff = (STOPS.length-1)-trainState.currStopNum;

		if(diff <= 1){
			speakRate = 2.5;
 		}
		else if(diff > 1 && diff <=3 ){
			speakRate = 1.75;
		}
		else{
			speakRate = 1.5;
		}

	}//end of in progress

	console.log('curr speakRate: ', speakRate);
	utterThis.rate = speakRate;
	utterThis.pitch = newPitch;

	let shuffled = gameStatus === GAME_STATES.IN_PROGRESS && trainState.stationState !== TRAIN_STATES.END_OF_LINE ? shuffleWords(text) : text;
	const allText = `The Conductor is saying: "${shuffled}"`;

	ele.textContent = allText;

	synth.speak(utterThis);
	return utterThis;
};


const matchesName = (inputName, passengerName) => {
	const dist = levenshteinDistance(inputName, passengerName);
	if (dist <= 3){
		return true;
	}
	return false;
};

socket.on("from server", (nameData) => {
	let names = ``;
	const onlyNames = nameData.names.map((person, ind)=>{
		let name =person.structValue.fields.name.stringValue; 
		names+=`${name}, `;
		return `${name}`;
	});
	const conductorResponse = `${names}, this is your stop`;
	conductorSpeak(conductorResponse)
	exitPassengers(onlyNames)
 });

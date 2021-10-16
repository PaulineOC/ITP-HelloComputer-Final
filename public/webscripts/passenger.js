// import PASSENGER_STATE from './enums.js'
class Passenger{
	spriteFrontContainer = null;
	spriteLeftContainer = null;
	spriteRightContainer = null;
	mainContainer = null;
	size = 64

	// name
	// originInd
	// destinationInd
	//state
	//actualexitInd
	//distance

	// position = {}
	//startingOrientation

	constructor(name, originInd, destinationInd, spawnX, spawnY, textY){
		this.name = name;
		this.originInd = originInd;
		this.destinationInd = destinationInd;
		this.actualExitInd = -1;
		this.state = PASSENGER_STATUS.WAITING;

		//Sprite stuff
		this.style = new PIXI.TextStyle({
		    fontFamily: 'Arial',
		    fontSize: 24,
		    fontStyle: 'italic',
		    fontWeight: 'bold',
		    fill: "['#ffffff']", // gradient
		    stroke: "['#FFFFFF']",	 
		    wordWrap: true,
		    wordWrapWidth: 150,
		    lineJoin: 'round',
		});
		this.generateSprite(spawnX, spawnY, textY);
	}

	enterTrain(){
		this.state = PASSENGER_STATUS.ENTERED;
		console.log('entering train ');
		app.stage.addChild(this.mainContainer);
		// app.stage.addChild(this.mainContainer);
	}

	leaveTrain(stationInd){
		this.actualExitInd = stationInd;
		this.state = PASSENGER_STATUS.EXITED
		app.stage.removeChild(this.mainContainer)
	}

	generateSprite(spawnX, spawnY, textY){
		this.mainContainer = new PIXI.Container();
		this.spriteFrontContainer = new PIXI.Container();
		this.spriteLeftContainer = new PIXI.Container();
		this.spriteRightContainer = new PIXI.Container()

		this.generateBody();
		this.generateHair();
		this.generateShirt();
		this.generateShoes();

		let skirtOrPants = getRandomInt(1,7);
		skirtOrPants % 2 === 0 ? this.generateSkirt() : this.generatePants();

		const fontStyle = new PIXI.TextStyle({
			  fill: "white",
			  fontFamily: "\"Times New Roman\", Times, serif",
			  fontSize: 16,
			  fontWeight: 500,
			  stroke: "#0a0000",
			  wordWrap: true,
			  wordWrapWidth: 100,
			});
		const label = `${this.name}\n${STOPS[this.destinationInd].name}`;
		const text = new PIXI.Text(label, fontStyle);
		text.x = 0
		text.y = textY

		// this.mainContainer.addChild(this.spriteFrontContainer)
		this.mainContainer.addChild(text);
		this.mainContainer.x = spawnX;
		this.mainContainer.y = spawnY;
	}

	generateBody(){

		let randomBodyInd = getRandomInt(1, bodyFront.length);
		let texture = PIXI.Loader.shared.resources[`body-front-${randomBodyInd}`].texture;
		const body = new PIXI.Sprite(texture);
		body.height = this.size;
		body.width  = this.size;
		this.mainContainer.addChild(body);
	}

	generateHair(){
		let randomHairInd = getRandomInt(1, hairFront.length);
		let texture = PIXI.Loader.shared.resources[`hair-front-${randomHairInd}`].texture;
		const hair = new PIXI.Sprite(texture);
		hair.height = this.size;
		hair.width  = this.size;
		this.mainContainer.addChild(hair);
	}

	generatePants(){
		let randomPantsInd = getRandomInt(1, pantsFront.length);
 		let texture = PIXI.Loader.shared.resources[`pants-front-${randomPantsInd}`].texture;
		const pants = new PIXI.Sprite(texture);
		pants.height = this.size;
		pants.width  = this.size;

		// const pants = pantsSprites.front[pantsKey];
		this.mainContainer.addChild(pants);
		// this.spriteLeftContainer.addChild(pantsSprites.left[pantsKey]);
		// this.spriteRightContainer.addChild(pantsSprites.right[pantsKey]);
	}

	generateShirt(){
		let randomShirtInd = getRandomInt(1, pantsFront.length);

  		let texture = PIXI.Loader.shared.resources[`shirt-front-${randomShirtInd}`].texture;
		const shirt = new PIXI.Sprite(texture);
		shirt.height = this.size;
		shirt.width  = this.size;

		// const pants = pantsSprites.front[pantsKey];
		this.mainContainer.addChild(shirt);
 
	}

	generateShoes(){
		let randomBodyInd = getRandomInt(1, (Object.keys(shoesSprites.front).length));
		let shoesKey = Object.keys(shoesSprites.front)[randomBodyInd];
		const shoe = shoesSprites.front[shoesKey];
		shoe.width = 64;
		shoe.height = 64;

		this.mainContainer.addChild(shoe);
		this.spriteLeftContainer.addChild(shoesSprites.left[shoesKey]);
		this.spriteRightContainer.addChild(shoesSprites.right[shoesKey]);
	}

	generateSkirt(){
		let randomBodyInd = getRandomInt(0, (Object.keys(skirtsSprites.front).length));
		let skirtKey = Object.keys(skirtsSprites.front)[randomBodyInd];
		const skirt = skirtsSprites.front[skirtKey];
		skirt.width = 64;
		skirt.height = 64;

		this.mainContainer.addChild(skirt);
		this.spriteLeftContainer.addChild(skirtsSprites.left[skirtKey]);
		this.spriteRightContainer.addChild(skirtsSprites.right[skirtKey]);
	}


}
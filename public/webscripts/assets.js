
const bodySprites = {
	front: {},
	left: {},
	right: {},
};

const hairSprites = {
	front: {},
	left: {},
	right: {},
};

const pantsSprites = {
	front: {},
	left: {},
	right: {},
};

const shirtsSprites = {
	front: {},
	left: {},
	right: {},
};

const shoesSprites = {
	front: {},
	left: {},
	right: {},
};

const skirtsSprites = {
	front: {},
	left: {},
	right: {},
};

const createBodySprites = (resources) => {
	bodyFront.forEach((body)=>{
		bodySprites.front[body.name] = new PIXI.Sprite(resources[`body-front-${body.name}`].texture)
	});
	bodyLeft.forEach((body)=>{
		bodySprites.left[body.name] = new PIXI.Sprite(resources[`body-left-${body.name}`].texture)
	});
	bodyRight.forEach((body)=>{
		bodySprites.right[body.name] = new PIXI.Sprite(resources[`body-right-${body.name}`].texture)
	});
};

const createHairSprites = (resources) => {
	hairFront.forEach((hair)=>{
		hairSprites.front[hair.name] = new PIXI.Sprite(resources[`hair-front-${hair.name}`].texture)
	});
	hairLeft.forEach((hair)=>{
		hairSprites.left[hair.name] = new PIXI.Sprite(resources[`hair-left-${hair.name}`].texture)
	});
	hairRight.forEach((hair)=>{
		hairSprites.right[hair.name] = new PIXI.Sprite(resources[`hair-right-${hair.name}`].texture)
	});
};

const createPantsSprites = (resources) => {
	pantsFront.forEach((pant)=>{
		pantsSprites.front[pant.name] = new PIXI.Sprite(resources[`pants-front-${pant.name}`].texture)
	});

	pantsLeft.forEach((pant)=>{
		pantsSprites.left[pant.name] = new PIXI.Sprite(resources[`pants-left-${pant.name}`].texture)
	});

	pantsRight.forEach((pant)=>{
		pantsSprites.right[pant.name] = new PIXI.Sprite(resources[`pants-right-${pant.name}`].texture)
	});
}

const createShirtsSprites = (resources) => {
	shirtsFront.forEach((shirt)=>{
		shirtsSprites.front[shirt.name] = new PIXI.Sprite(resources[`shirt-front-${shirt.name}`].texture)
	});

	shirtsLeft.forEach((shirt)=>{
		shirtsSprites.left[shirt.name] = new PIXI.Sprite(resources[`shirt-left-${shirt.name}`].texture)
	});

	shirtsRight.forEach((shirt)=>{
		shirtsSprites.right[shirt.name] = new PIXI.Sprite(resources[`shirt-right-${shirt.name}`].texture)
	});
}

const createShoesSprites = (resources) => {
	shoesFront.forEach((shoe)=>{
		shoesSprites.front[shoe.name] = new PIXI.Sprite(resources[`shoes-front-${shoe.name}`].texture)
	});

	shoesLeft.forEach((shoe)=>{
		shoesSprites.left[shoe.name] = new PIXI.Sprite(resources[`shoes-left-${shoe.name}`].texture)
	});

	shoesRight.forEach((shoe)=>{
		shoesSprites.right[shoe.name] = new PIXI.Sprite(resources[`shoes-right-${shoe.name}`].texture)
	});
}

const createSkirtsSprites = (resources) => {
	skirtsFront.forEach((skirt)=>{
		skirtsSprites.front[skirt.name] = new PIXI.Sprite(resources[`skirt-front-${skirt.name}`].texture)
	});

	skirtsLeft.forEach((skirt)=>{
		skirtsSprites.left[skirt.name] = new PIXI.Sprite(resources[`skirt-left-${skirt.name}`].texture)
	});

	skirtsRight.forEach((skirt)=>{
		skirtsSprites.right[skirt.name] = new PIXI.Sprite(resources[`skirt-right-${skirt.name}`].texture)
	});
}

const createAllSprites = (resources) => {
	console.log("after  create all");
	createBodySprites(resources);
	createHairSprites(resources);

	createPantsSprites(resources);
	createShirtsSprites(resources);
	createShoesSprites(resources);
	createSkirtsSprites(resources);

};

const bodyFront = [
	{ name: `1`, url: `../assets/character/body/front/1.png`},
	{ name: `2`, url: `../assets/character/body/front/3.png`},
	{ name: `3`, url: `../assets/character/body/front/4.png`},
	{ name: `4`, url: `../assets/character/body/front/5.png`},
];

const bodyRight = [
	{ name: `1`, url: `../assets/character/body/left/1.png`},
	{ name: `2`, url: `../assets/character/body/left/3.png`},
	{ name: `3`, url: `../assets/character/body/left/4.png`},
	{ name: `4`, url: `../assets/character/body/left/5.png`},
];

const bodyLeft = [
	{ name: `1`, url: `../assets/character/body/right/1.png`},
	{ name: `2`, url: `../assets/character/body/right/3.png`},
	{ name: `3`, url: `../assets/character/body/right/4.png`},
	{ name: `4`, url: `../assets/character/body/right/5.png`},
];

const hairFront =  [
	{ name: `1`, url: `../assets/character/hair/front/style1.png`},
	{ name: `2`, url: `../assets/character/hair/front/style2.png`},
	{ name: `3`, url: `../assets/character/hair/front/style3.png`},
	{ name: `4`, url: `../assets/character/hair/front/style4.png`},
	{ name: `5`, url: `../assets/character/hair/front/style5.png`},
	{ name: `6`, url: `../assets/character/hair/front/style6.png`},
	{ name: `7`, url: `../assets/character/hair/front/style7.png`},
	{ name: `8`, url: `../assets/character/hair/front/style8.png`},
	{ name: `9`, url: `../assets/character/hair/front/style9.png`},
	{ name: `10`, url: `../assets/character/hair/front/style10.png`},
	{ name: `11`, url: `../assets/character/hair/front/style11.png`},
	{ name: `12`, url: `../assets/character/hair/front/style12.png`},
	{ name: `13`, url: `../assets/character/hair/front/style13.png`},
	{ name: `14`, url: `../assets/character/hair/front/style14.png`},
	{ name: `15`, url: `../assets/character/hair/front/style15.png`},
	{ name: `16`, url: `../assets/character/hair/front/style16.png`},
	{ name: `17`, url: `../assets/character/hair/front/style17.png`},
	{ name: `18`, url: `../assets/character/hair/front/style18.png`},
	{ name: `19`, url: `../assets/character/hair/front/style19.png`},
	{ name: `20`, url: `../assets/character/hair/front/style20.png`},
	{ name: `21`, url: `../assets/character/hair/front/style21.png`},
	{ name: `22`, url: `../assets/character/hair/front/style22.png`},
	{ name: `23`, url: `../assets/character/hair/front/style23.png`},
	{ name: `24`, url: `../assets/character/hair/front/style24.png`},
	{ name: `25`, url: `../assets/character/hair/front/style25.png`},
	{ name: `26`, url: `../assets/character/hair/front/style26.png`},
	{ name: `27`, url: `../assets/character/hair/front/style27.png`},
	{ name: `28`, url: `../assets/character/hair/front/style28.png`},
	{ name: `29`, url: `../assets/character/hair/front/style29.png`},
	{ name: `30`, url: `../assets/character/hair/front/style30.png`},
	{ name: `31`, url: `../assets/character/hair/front/style31.png`},
	{ name: `32`, url: `../assets/character/hair/front/style32.png`},
	{ name: `33`, url: `../assets/character/hair/front/style33.png`},
	{ name: `34`, url: `../assets/character/hair/front/style34.png`},
	{ name: `35`, url: `../assets/character/hair/front/style35.png`},
	{ name: `36`, url: `../assets/character/hair/front/style36.png`},
];

const hairLeft = [
	{ name: `1`, url: `../assets/character/hair/left/style1.png`},
	{ name: `2`, url: `../assets/character/hair/left/style2.png`},
	{ name: `3`, url: `../assets/character/hair/left/style3.png`},
	{ name: `4`, url: `../assets/character/hair/left/style4.png`},
	{ name: `5`, url: `../assets/character/hair/left/style5.png`},
	{ name: `6`, url: `../assets/character/hair/left/style6.png`},
	{ name: `7`, url: `../assets/character/hair/left/style7.png`},
	{ name: `8`, url: `../assets/character/hair/left/style8.png`},
	{ name: `9`, url: `../assets/character/hair/left/style9.png`},
	{ name: `10`, url: `../assets/character/hair/left/style10.png`},
	{ name: `11`, url: `../assets/character/hair/left/style11.png`},
	{ name: `12`, url: `../assets/character/hair/left/style12.png`},
	{ name: `13`, url: `../assets/character/hair/left/style13.png`},
	{ name: `14`, url: `../assets/character/hair/left/style14.png`},
	{ name: `15`, url: `../assets/character/hair/left/style15.png`},
	{ name: `16`, url: `../assets/character/hair/left/style16.png`},
	{ name: `17`, url: `../assets/character/hair/left/style17.png`},
	{ name: `18`, url: `../assets/character/hair/left/style18.png`},
	{ name: `19`, url: `../assets/character/hair/left/style19.png`},
	{ name: `20`, url: `../assets/character/hair/left/style20.png`},
	{ name: `21`, url: `../assets/character/hair/left/style21.png`},
	{ name: `22`, url: `../assets/character/hair/left/style22.png`},
	{ name: `23`, url: `../assets/character/hair/left/style23.png`},
	{ name: `24`, url: `../assets/character/hair/left/style24.png`},
	{ name: `25`, url: `../assets/character/hair/left/style25.png`},
	{ name: `26`, url: `../assets/character/hair/left/style26.png`},
	{ name: `27`, url: `../assets/character/hair/left/style27.png`},
	{ name: `28`, url: `../assets/character/hair/left/style28.png`},
	{ name: `29`, url: `../assets/character/hair/left/style29.png`},
	{ name: `30`, url: `../assets/character/hair/left/style30.png`},
	{ name: `31`, url: `../assets/character/hair/left/style31.png`},
	{ name: `32`, url: `../assets/character/hair/left/style32.png`},
	{ name: `33`, url: `../assets/character/hair/left/style33.png`},
	{ name: `34`, url: `../assets/character/hair/left/style34.png`},
	{ name: `35`, url: `../assets/character/hair/left/style35.png`},
	{ name: `36`, url: `../assets/character/hair/left/style36.png`},
];

const hairRight = [
	{ name: `1`, url: `../assets/character/hair/right/style1.png`},
	{ name: `2`, url: `../assets/character/hair/right/style2.png`},
	{ name: `3`, url: `../assets/character/hair/right/style3.png`},
	{ name: `4`, url: `../assets/character/hair/right/style4.png`},
	{ name: `5`, url: `../assets/character/hair/right/style5.png`},
	{ name: `6`, url: `../assets/character/hair/right/style6.png`},
	{ name: `7`, url: `../assets/character/hair/right/style7.png`},
	{ name: `8`, url: `../assets/character/hair/right/style8.png`},
	{ name: `9`, url: `../assets/character/hair/right/style9.png`},
	{ name: `10`, url: `../assets/character/hair/right/style10.png`},
	{ name: `11`, url: `../assets/character/hair/right/style11.png`},
	{ name: `12`, url: `../assets/character/hair/right/style12.png`},
	{ name: `13`, url: `../assets/character/hair/right/style13.png`},
	{ name: `14`, url: `../assets/character/hair/right/style14.png`},
	{ name: `15`, url: `../assets/character/hair/right/style15.png`},
	{ name: `16`, url: `../assets/character/hair/right/style16.png`},
	{ name: `17`, url: `../assets/character/hair/right/style17.png`},
	{ name: `18`, url: `../assets/character/hair/right/style18.png`},
	{ name: `19`, url: `../assets/character/hair/right/style19.png`},
	{ name: `20`, url: `../assets/character/hair/right/style20.png`},
	{ name: `21`, url: `../assets/character/hair/right/style21.png`},
	{ name: `22`, url: `../assets/character/hair/right/style22.png`},
	{ name: `23`, url: `../assets/character/hair/right/style23.png`},
	{ name: `24`, url: `../assets/character/hair/right/style24.png`},
	{ name: `25`, url: `../assets/character/hair/right/style25.png`},
	{ name: `26`, url: `../assets/character/hair/right/style26.png`},
	{ name: `27`, url: `../assets/character/hair/right/style27.png`},
	{ name: `28`, url: `../assets/character/hair/right/style28.png`},
	{ name: `29`, url: `../assets/character/hair/right/style29.png`},
	{ name: `30`, url: `../assets/character/hair/right/style30.png`},
	{ name: `31`, url: `../assets/character/hair/right/style31.png`},
	{ name: `32`, url: `../assets/character/hair/right/style32.png`},
	{ name: `33`, url: `../assets/character/hair/right/style33.png`},
	{ name: `34`, url: `../assets/character/hair/right/style34.png`},
	{ name: `35`, url: `../assets/character/hair/right/style35.png`},
	{ name: `36`, url: `../assets/character/hair/right/style36.png`},
];

const pantsFront = [
	{ name: `1`, url: `../assets/character/pants/front/black.png`},
	{ name: `2`, url: `../assets/character/pants/front/blue.png`},
	{ name: `3`, url: `../assets/character/pants/front/green.png`},
	{ name: `4`, url: `../assets/character/pants/front/orange.png`},
	{ name: `5`, url: `../assets/character/pants/front/purple.png`},
	{ name: `6`, url: `../assets/character/pants/front/white.png`},
];

const pantsLeft = [
	{ name: `black`, url: `../assets/character/pants/left/black.png`},
	{ name: `blue`, url: `../assets/character/pants/left/blue.png`},
	{ name: `green`, url: `../assets/character/pants/left/green.png`},
	{ name: `orange`, url: `../assets/character/pants/left/orange.png`},
	{ name: `purple`, url: `../assets/character/pants/left/purple.png`},
	{ name: `white`, url: `../assets/character/pants/left/white.png`},
];

const pantsRight = [
	{ name: `black`, url: `../assets/character/pants/right/black.png`},
	{ name: `blue`, url: `../assets/character/pants/right/blue.png`},
	{ name: `green`, url: `../assets/character/pants/right/green.png`},
	{ name: `orange`, url: `../assets/character/pants/right/orange.png`},
	{ name: `purple`, url: `../assets/character/pants/right/purple.png`},
	{ name: `white`, url: `../assets/character/pants/right/white.png`},
];

const shirtsFront = [
	{ name: `1`, url: `../assets/character/shirts/front/style1.png`},
	{ name: `2`, url: `../assets/character/shirts/front/style2.png`},
	{ name: `3`, url: `../assets/character/shirts/front/style3.png`},
	{ name: `4`, url: `../assets/character/shirts/front/style4.png`},
	{ name: `5`, url: `../assets/character/shirts/front/style5.png`},
	{ name: `6`, url: `../assets/character/shirts/front/style6.png`},
	{ name: `7`, url: `../assets/character/shirts/front/style7.png`},
	{ name: `8`, url: `../assets/character/shirts/front/style8.png`},
	{ name: `9`, url: `../assets/character/shirts/front/style9.png`},
	{ name: `10`, url: `../assets/character/shirts/front/style10.png`},
	{ name: `11`, url: `../assets/character/shirts/front/style11.png`},
];

const shirtsLeft = [
	{ name: `1`, url: `../assets/character/shirts/left/style1.png`},
	{ name: `2`, url: `../assets/character/shirts/left/style2.png`},
	{ name: `3`, url: `../assets/character/shirts/left/style3.png`},
	{ name: `4`, url: `../assets/character/shirts/left/style4.png`},
	{ name: `5`, url: `../assets/character/shirts/left/style5.png`},
	{ name: `6`, url: `../assets/character/shirts/left/style6.png`},
	{ name: `7`, url: `../assets/character/shirts/left/style7.png`},
	{ name: `8`, url: `../assets/character/shirts/left/style8.png`},
	{ name: `9`, url: `../assets/character/shirts/left/style9.png`},
	{ name: `10`, url: `../assets/character/shirts/left/style10.png`},
	{ name: `11`, url: `../assets/character/shirts/left/style11.png`},
];

const shirtsRight = [
	{ name: `1`, url: `../assets/character/shirts/right/style1.png`},
	{ name: `2`, url: `../assets/character/shirts/right/style2.png`},
	{ name: `3`, url: `../assets/character/shirts/right/style3.png`},
	{ name: `4`, url: `../assets/character/shirts/right/style4.png`},
	{ name: `5`, url: `../assets/character/shirts/right/style5.png`},
	{ name: `6`, url: `../assets/character/shirts/right/style6.png`},
	{ name: `7`, url: `../assets/character/shirts/right/style7.png`},
	{ name: `8`, url: `../assets/character/shirts/right/style8.png`},
	{ name: `9`, url: `../assets/character/shirts/right/style9.png`},
	{ name: `10`, url: `../assets/character/shirts/right/style10.png`},
	{ name: `11`, url: `../assets/character/shirts/right/style11.png`},
];

const shoesFront = [
	{ name: `1`, url: `../assets/character/shoes/front/style1.png`},
	{ name: `2`, url: `../assets/character/shoes/front/style2.png`},
	{ name: `3`, url: `../assets/character/shoes/front/style3.png`},
	{ name: `4`, url: `../assets/character/shoes/front/style4.png`},
	{ name: `5`, url: `../assets/character/shoes/front/style5.png`},
	{ name: `6`, url: `../assets/character/shoes/front/style6.png`},
	{ name: `7`, url: `../assets/character/shoes/front/style7.png`},
	{ name: `8`, url: `../assets/character/shoes/front/style8.png`},
	{ name: `9`, url: `../assets/character/shoes/front/style9.png`},
	{ name: `10`, url: `../assets/character/shoes/front/style10.png`},
	{ name: `11`, url: `../assets/character/shoes/front/style11.png`},
];

const shoesLeft = [
	{ name: `1`, url: `../assets/character/shoes/left/style1.png`},
	{ name: `2`, url: `../assets/character/shoes/left/style2.png`},
	{ name: `3`, url: `../assets/character/shoes/left/style3.png`},
	{ name: `4`, url: `../assets/character/shoes/left/style4.png`},
	{ name: `5`, url: `../assets/character/shoes/left/style5.png`},
	{ name: `6`, url: `../assets/character/shoes/left/style6.png`},
	{ name: `7`, url: `../assets/character/shoes/left/style7.png`},
	{ name: `8`, url: `../assets/character/shoes/left/style8.png`},
	{ name: `9`, url: `../assets/character/shoes/left/style9.png`},
	{ name: `10`, url: `../assets/character/shoes/left/style10.png`},
	{ name: `11`, url: `../assets/character/shoes/left/style11.png`},
];

const shoesRight = [
	{ name: `1`, url: `../assets/character/shoes/right/style1.png`},
	{ name: `2`, url: `../assets/character/shoes/right/style2.png`},
	{ name: `3`, url: `../assets/character/shoes/right/style3.png`},
	{ name: `4`, url: `../assets/character/shoes/right/style4.png`},
	{ name: `5`, url: `../assets/character/shoes/right/style5.png`},
	{ name: `6`, url: `../assets/character/shoes/right/style6.png`},
	{ name: `7`, url: `../assets/character/shoes/right/style7.png`},
	{ name: `8`, url: `../assets/character/shoes/right/style8.png`},
	{ name: `9`, url: `../assets/character/shoes/right/style9.png`},
	{ name: `10`, url: `../assets/character/shoes/right/style10.png`},
	{ name: `11`, url: `../assets/character/shoes/right/style11.png`},
];

const skirtsFront = [
	{ name: `1`, url: `../assets/character/skirts/front/style1.png`},
	{ name: `2`, url: `../assets/character/skirts/front/style2.png`},
	{ name: `3`, url: `../assets/character/skirts/front/style3.png`},
	{ name: `4`, url: `../assets/character/skirts/front/style4.png`},
	{ name: `5`, url: `../assets/character/skirts/front/style5.png`},
	{ name: `6`, url: `../assets/character/skirts/front/style6.png`},
	{ name: `7`, url: `../assets/character/skirts/front/style7.png`},
	{ name: `8`, url: `../assets/character/skirts/front/style8.png`},
	{ name: `9`, url: `../assets/character/skirts/front/style9.png`},
	{ name: `10`, url: `../assets/character/skirts/front/style10.png`},
];

const skirtsLeft = [
	{ name: `1`, url: `../assets/character/skirts/left/style1.png`},
	{ name: `2`, url: `../assets/character/skirts/left/style2.png`},
	{ name: `3`, url: `../assets/character/skirts/left/style3.png`},
	{ name: `4`, url: `../assets/character/skirts/left/style4.png`},
	{ name: `5`, url: `../assets/character/skirts/left/style5.png`},
	{ name: `6`, url: `../assets/character/skirts/left/style6.png`},
	{ name: `7`, url: `../assets/character/skirts/left/style7.png`},
	{ name: `8`, url: `../assets/character/skirts/left/style8.png`},
	{ name: `9`, url: `../assets/character/skirts/left/style9.png`},
	{ name: `10`, url: `../assets/character/skirts/left/style10.png`},
];

const skirtsRight = [
	{ name: `1`, url: `../assets/character/skirts/right/style1.png`},
	{ name: `2`, url: `../assets/character/skirts/right/style2.png`},
	{ name: `3`, url: `../assets/character/skirts/right/style3.png`},
	{ name: `4`, url: `../assets/character/skirts/right/style4.png`},
	{ name: `5`, url: `../assets/character/skirts/right/style5.png`},
	{ name: `6`, url: `../assets/character/skirts/right/style6.png`},
	{ name: `7`, url: `../assets/character/skirts/right/style7.png`},
	{ name: `8`, url: `../assets/character/skirts/right/style8.png`},
	{ name: `9`, url: `../assets/character/skirts/right/style9.png`},
	{ name: `10`, url: `../assets/character/skirts/right/style10.png`},
];

const background = [
	{ name: `subway-in-station`, url: `../assets/subway-in-station.png`},
	{ name: `subway-between-stations`, url: `../assets/subway-between-stations.png`},
];

const loadAllSprites = () => {
	loaderBodySprites();
	loaderHairSprites();
	loaderPantsSprites();
	loaderShirtsSprites();
	loaderShoesSprites();
	loaderSkirtsSprites();
	loaderBackgroundSprites();
};

const loaderBackgroundSprites = () => {

	background.forEach((bg)=>{
 		PIXI.Loader.shared.add(`${bg.name}`, bg.url);
	});
};

const loaderBodySprites = () => {
	bodyFront.forEach((body)=>{
 		PIXI.Loader.shared.add(`body-front-${body.name}`, body.url);
	});
	bodyLeft.forEach((body)=>{
		PIXI.Loader.shared.add(`body-left-${body.name}`, body.url);
	});
	bodyRight.forEach((body)=>{
		PIXI.Loader.shared.add(`body-right-${body.name}`, body.url);
	});
};

const loaderHairSprites = () => {
	hairFront.forEach((hair)=>{
		PIXI.Loader.shared.add(`hair-front-${hair.name}`, hair.url);
	});
	hairLeft.forEach((hair)=>{
		PIXI.Loader.shared.add(`hair-left-${hair.name}`, hair.url);
	});
	hairRight.forEach((hair)=>{
		PIXI.Loader.shared.add(`hair-right-${hair.name}`, hair.url);
	});
};

const loaderPantsSprites = () => {
	pantsFront.forEach((pant)=>{
		PIXI.Loader.shared.add(`pants-front-${pant.name}`, pant.url);
	});

	pantsLeft.forEach((pant)=>{
		PIXI.Loader.shared.add(`pants-left-${pant.name}`, pant.url);
	});

	pantsRight.forEach((pant)=>{
		PIXI.Loader.shared.add(`pants-right-${pant.name}`, pant.url);
	});
}

const loaderShirtsSprites = () => {
	shirtsFront.forEach((shirt)=>{
		PIXI.Loader.shared.add(`shirt-front-${shirt.name}`, shirt.url);
	});

	shirtsLeft.forEach((shirt)=>{
		PIXI.Loader.shared.add(`shirt-left-${shirt.name}`, shirt.url);
	});

	shirtsRight.forEach((shirt)=>{
		PIXI.Loader.shared.add(`shirt-right-${shirt.name}`, shirt.url);
	});
}

const loaderShoesSprites = () => {
	shoesFront.forEach((shoe)=>{
		PIXI.Loader.shared.add(`shoes-front-${shoe.name}`, shoe.url);
	});

	shoesLeft.forEach((shoe)=>{
		PIXI.Loader.shared.add(`shoes-left-${shoe.name}`, shoe.url);
	});

	shoesRight.forEach((shoe)=>{		
		PIXI.Loader.shared.add(`shoes-right-${shoe.name}`, shoe.url);
	});
}

const loaderSkirtsSprites = () => {
	skirtsFront.forEach((skirt)=>{
		PIXI.Loader.shared.add(`skirt-front-${skirt.name}`, skirt.url);
	});

	skirtsLeft.forEach((skirt)=>{
		PIXI.Loader.shared.add(`skirt-left-${skirt.name}`, skirt.url);
	});

	skirtsRight.forEach((skirt)=>{
		PIXI.Loader.shared.add(`skirt-right-${skirt.name}`, skirt.url);
	});
}
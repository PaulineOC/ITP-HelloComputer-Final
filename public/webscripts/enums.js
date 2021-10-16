
const GAME_STATES = Object.freeze({
	START: "START",
	IN_PROGRESS: "IN_PROGRESS",
	END: "END",
});


const TRAIN_STATES = Object.freeze({
	AT_STATION: "IN_STATION",
	BETWEEN_STATIONS: "BETWEEN_STATIONS",
	END_OF_LINE: "END_OF_LINE",
});

const STOP_TYPES = Object.freeze({
	LOCAL: "LOCAL",
	EXPRESS : "EXPRESS",
});

const PASSENGER_STATUS = Object.freeze({
	WAITING: "WAITING",
	ENTERED : "ENTERED",
	EXITED: "EXITED",
});


const TIME_AT_STATION = 800;

const STOPS = [
	{
		name: "Broad Street",
		timeToHere: 0,
		stopType: STOP_TYPES.LOCAL
	},
	{
		name: "Fulton Street",
		timeToHere: 50,
		stopType: STOP_TYPES.LOCAL
	},
	{
		name: "Hoyt-Schermerhorn",
		timeToHere: 50,
		stopType: STOP_TYPES.EXPRESS
	},
	{
		name: "Kosciuszko Street",
		timeToHere: 50,
		stopType: STOP_TYPES.EXPRESS
	},
	{
		name: "Essex",
		timeToHere: 50,
		stopType: STOP_TYPES.LOCAL
	},
	{
		name: "Marcy Avenue",
		timeToHere: 50,
		stopType: STOP_TYPES.LOCAL
	},
];

const canvasWidth = 800;
const canvasHeight = 400

const TEST_NAMES = [
	"Aaron Carter",
    "Aaron Eckhart",
    "Abbie Cornish",
    "Ace Young",
    "Adam Brody",
    "Adam Duritz",
    "Adam Lambert",
    "Adam Levine",
    "Adam Sandler",
    "Adele",
    "Adrian Grenier",
    "Adrien Brody",
    "Akshay Kumar",
    "Alanis Morissette",
    "Alec Baldwin",
    "Alessandra Ambrosio",
    "Alex McCord",
    "Alex O'Loughlin",
    "Alex Pettyfer",
    "Alex Rodriguez",
    "Alexander Ludwig",
    "Alexander Skarsgard",
    "Alexis Bledel",
    "Ali Fedotowsky",
    "Ali Larter",
    "Alicia Keys",
    "Alicia Silverstone",
    "Alison Sweeney",
    "Allison Williams",
    "Alyson Hannigan",
    "Alyssa Milano",
    "Amanda Bynes",
    "Amanda Peet",
    "Amanda Seyfried",
    "Amber Portwood",
    "Amber Riley",
    "Amber Rose",
    "America Ferrera",
    "Amitabh Bachchan",
    "Amy Adams",
    "Amy Poehler",
    "Amy Winehouse",
    "Ana Ortiz",
    "Anderson Cooper",
    "Andrew Firestone",
    "Andrew Garfield",
    "Andy Cohen",
    "Andy Roddick",
    "Andy Samberg",
    "Angelina Jolie",
    "Angelina Pivarnick",
    "Angie Harmon",
    "Anna Faris",
    "Anna Kendrick",
    "Anna Kournikova",
    "Anna Nicole Smith",
    "Anna Paquin",
    "Anna Wintour",
    "AnnaLynne McCord",
    "AnnaSophia Robb",
];

const MAX_EXPRESS_PASSENGERS = 4;
const MAX_LOCAL_PASSENGERS = 2;



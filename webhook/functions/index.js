const functions = require("firebase-functions");
const { dialogflow } = require("actions-on-google");
const app = dialogflow();


// https://kidadl.com/articles/train-puns-that-are-right-on-track

app.intent("Default Welcome Intent", (conv) => {
	conv.ask("Hello hello! Driving trains is harder than it steams ");

});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.trainconductor = functions.https.onRequest(app); 
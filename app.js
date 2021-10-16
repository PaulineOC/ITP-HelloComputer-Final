const express = require("express");
const app = express();
require('dotenv').config()

const socketIO = require("socket.io");
const dialogflow = require("@google-cloud/dialogflow");

const sessionClient = new dialogflow.SessionsClient({
	keyFilename: "./key.json",
});
const projectId = `itp-hellocomputer-final-t-cbvb`;

app.use(express.static("public"));

const PORT = process.env.PORT || 5004;

const server = app.listen(PORT, () => {
	let test = process.env.PARSER_API_KEY
	console.log(test);
	console.log("listening on port 5004!!!!!!");
});

const io = socketIO(server);

io.on("connection", (socket) => {
	console.log("new user:" + socket.id);

	socket.on("from frontend", (data) => {
		console.log(data);
		//socket.emit("from server", "hi!!!!!!");

		//Send to DialogFlow
		sessionClient.detectIntent({
				session: sessionClient.projectAgentSessionPath(projectId, "12345"),
				queryInput: { text: { text: data.query, languageCode: "en-US" } },
			}).then((response) => {
				const result = response[0].queryResult;
				//console.log(result);

				let fulfillmentText = result.fulfillmentText;
                let intent = result.intent.displayName;

                //Want to capture entities:
                const names = result.parameters.fields.person.listValue.values;
                console.log(names);
              	// const second = result.parameters.fields.person.listValue.values[0].structValue.fields.name.stringValue
                //console.log(second);
                //.structValue.fields.name;

				socket.emit("from server", { names });
			});
	});
});


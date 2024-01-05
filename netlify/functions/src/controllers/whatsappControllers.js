const fs = require("fs");
const path = require("path");

// Utiliza el directorio /tmp para los logs en el entorno serverless
const logFilePath = path.join('/tmp', 'logs.txt');
const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
const myConsole = new console.Console(logStream);

const VerifyToken = (req, res) => {
    try {
        let accessToken = 'ASDASDASSADSAD';
        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"];

        if(challenge != null && token != null && token == accessToken) {
            res.send(challenge);
        } else {
            res.status(400).send();
        }

    } catch (e) {
        myConsole.log(e);
        res.status(400).send();
    }
};

const ReceivedMessage = (req, res) => {
    try {
        let entry = req.body["entry"][0];
        let changes = entry["changes"][0];
        let value = changes["value"];
        let messageObject = value["messages"];

        myConsole.log(messageObject);

        res.send("EVENT_RECEIVED");
    } catch (e) {
        myConsole.log(e);
        res.send("EVENT_RECEIVED");
    }
};

module.exports = {
    VerifyToken,
    ReceivedMessage
};
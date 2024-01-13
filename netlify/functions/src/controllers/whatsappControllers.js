const fs = require("fs");
const path = require("path");
const whatsappService = require('../services/whatsappService');

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

        if(typeof messageObject != "undefined") {
            let messages = messageObject[0];
            let phoneNumber = messages["from"];
            phoneNumber = phoneNumber.replace('569','+569');
            console.log(phoneNumber)
            let text = GetTextUser(messages);
            

            myConsole.log(text);
            console.log(text);

            whatsappService.SendMessageWhatsApp("El usuario dijo: " + text, phoneNumber);
        }

        console.log('Sale del if');
        res.send("EVENT_RECEIVED");
        console.log('pasa el event');
    } catch (e) {
        myConsole.log(e);
        console.log('ReceivedMessage', e)
        res.send("EVENT_RECEIVED");
    }
};

function GetTextUser(messages) {
    let text = "";
    let typeMessage = messages["type"];
    if(typeMessage == "text"){
        text = (messages["text"])["body"];
    } else if (typeMessage == "interactive") {
        let interactiveObject = messages["interactive"];
        let typeInteractive = interactiveObject["type"];
        
        if(typeInteractive == "button_reply") {
            text = (interactiveObject["button_reply"])["title"];
        } else if (typeInteractive == "list_reply"){
            text = (interactiveObject["list_reply"])["title"];
        } else {
            myConsole.log("sin mensaje");
            console.log("sin mensaje")
        }
    } else {
        myConsole.log("sin mensaje");
        console.log("sin mensaje")
    }
    return text;
}

module.exports = {
    VerifyToken,
    ReceivedMessage
};
const fs = require("fs");
const path = require("path");
const whatsappService = require('../services/whatsappService');
const samples = require('../shared/sampleModels');

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
        let entry = (req.body["entry"])[0];
        let changes = (entry["changes"])[0];
        let value = changes["value"];
        let messageObject = value["messages"];

        if(typeof messageObject != "undefined") {
            let messages = messageObject[0];
            let number = messages["from"];
            let text = GetTextUser(messages);
            
            // phoneNumber = phoneNumber.replace('569','56');
            console.log('NUMERO: ' + number)
            
            myConsole.log(text);
            console.log(text);

            if(text == "text"){
                let data = samples.SampleText("Hola Usuario", number);
                whatsappService.SendMessageWhatsApp(data);
            } else if (text == "image") {
                let data = samples.SampleImage(number)
                whatsappService.SendMessageWhatsApp(data);
            } else if (text == "video") {
                let data = samples.SampleVideo(number)
                whatsappService.SendMessageWhatsApp(data);
            } else if (text == "audio") {
                let data = samples.SampleAudio(number)
                whatsappService.SendMessageWhatsApp(data);
            } else if (text == "document") {
                let data = samples.SampleDocument(number)
                whatsappService.SendMessageWhatsApp(data);
            } else if (text == "button") {
                let data = samples.SampleButtons(number)
                whatsappService.SendMessageWhatsApp(data);
            } else if (text == "list") {
                let data = samples.SampleList(number)
                whatsappService.SendMessageWhatsApp(data);
            } else if (text == "location") {
                let data = samples.SampleLocation(number)
                whatsappService.SendMessageWhatsApp(data);
            } else {
                let data = samples.SampleText("No te entiendo", number)
                whatsappService.SendMessageWhatsApp(data);
            }

        }

        res.send("EVENT_RECEIVED");

    } catch (e) {
        myConsole.log(e);
        console.log('ReceivedMessage', e)
        res.send("EVENT_RECEIVED");
    }
};

function GetTextUser(messages){
    var text = "";
    var typeMessge = messages["type"];
    if(typeMessge == "text"){
        text = (messages["text"])["body"];
    }
    else if(typeMessge == "interactive"){


        var interactiveObject = messages["interactive"];
        var typeInteractive = interactiveObject["type"];
       
        if(typeInteractive == "button_reply"){
            text = (interactiveObject["button_reply"])["title"];
        }
        else if(typeInteractive == "list_reply"){
            text = (interactiveObject["list_reply"])["title"];
        }else{
            myConsole.log("sin mensaje");
        }
    }else{
        myConsole.log("sin mensaje");
    }
    return text;
}


module.exports = {
    VerifyToken,
    ReceivedMessage
};
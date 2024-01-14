const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const https = require("https");
function SendMessageWhatsApp(data){
    
    const options = {
        host: "graph.facebook.com",
        path: "/v18.0/166650459868747/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAAMYnEKWwo4BOzF0rS9EbN6XUENt11Cmr1q5DcFFaYz4eznjJ9jdRFuOOqyMKSfgxhVrwnF0Nm1QlMh2C2X4EH5342S3sMB0xahZBLeUR9aq84P5Q1TIhMxOVzLKaMTWPh4kSZAcTPIEyWQwGbonWvZBZAxSFxQ0DYMGBQzSDZBmER1whpIzOxo2nXjrZBzsxB"
        }
    };
    const req = https.request(options, res => {
        res.on("data", d=> {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}

module.exports = {
    SendMessageWhatsApp
};
    const https = require("https");

    function SendMessageWhatsApp(textResponse, number){
        try {
            const data = JSON.stringify({
                "messaging_product": "whatsapps",
                "to": number,
                "text": {
                    "body": textResponse
                },
                "type": "text"
            })
        console.log('Paso 1')
            const options = {
                host: "graph.facebook.com",
                path: "/v18.0/166650459868747/messages",
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer EAAMYnEKWwo4BOzF0rS9EbN6XUENt11Cmr1q5DcFFaYz4eznjJ9jdRFuOOqyMKSfgxhVrwnF0Nm1QlMh2C2X4EH5342S3sMB0xahZBLeUR9aq84P5Q1TIhMxOVzLKaMTWPh4kSZAcTPIEyWQwGbonWvZBZAxSFxQ0DYMGBQzSDZBmER1whpIzOxo2nXjrZBzsxB"
                }
            }
            console.log('Paso 2')
            const req = https.request(options, res => {
                res.on("data", d=> {
                    process.stdout.write(d);
                });
            });
            console.log('Paso 3')
            req.on("error", error => {
                console.error(error);
            });
            console.log('Paso 4')
            req.write(data);
            console.log('Paso 5')
            req.end();
            console.log('Paso 6')
    
        } catch (error) {
            console.log(error);
        }
        
    }

    module.exports = {
        SendMessageWhatsApp
    }
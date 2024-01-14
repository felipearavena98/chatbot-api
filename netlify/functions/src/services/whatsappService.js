    const https = require("https");

    const SendMessageWhatsApp = async (data) => {
        try {
            
            const resolveData = await data;

            const options = {
                host: "graph.facebook.com",
                path: "/v17.0/166650459868747/messages",
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer EAAMYnEKWwo4BOzF0rS9EbN6XUENt11Cmr1q5DcFFaYz4eznjJ9jdRFuOOqyMKSfgxhVrwnF0Nm1QlMh2C2X4EH5342S3sMB0xahZBLeUR9aq84P5Q1TIhMxOVzLKaMTWPh4kSZAcTPIEyWQwGbonWvZBZAxSFxQ0DYMGBQzSDZBmER1whpIzOxo2nXjrZBzsxB"
                }
            }
            console.log('OPTIONS: ', options);

        const req = https.request(options, res => {
            res.on("data", d => {
                process.stdout.write(d)
            })
        })

        req.on("error", error => {
            console.error('Error en la solicitud:', error);
        });

        req.write(resolveData);
        req.end();

        console.log('Solicitud enviada');

    } catch (error) {
        console.log('Error en SendMessageWhatsApp:', error);
    }
        
    }

    module.exports = {
        SendMessageWhatsApp
    }
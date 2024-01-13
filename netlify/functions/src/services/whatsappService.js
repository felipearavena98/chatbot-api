    const https = require("https");

    function SendMessageWhatsApp(text, number){
        try {
            const data = JSON.stringify({
                "messaging_product": "whatsapp",    
                "recipient_type": "individual",
                "to": "56974877680",
                "type": "text",
                "text": {
                    "preview_url": false,
                    "body": "Hola, Bienvenido"
                }
            });

            console.log('data :',data);

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
            console.log('OPTIONS: ', options);

        const req = https.request(options, res => {
            let responseData = '';
            res.on("data", d => {
                responseData += d;
            });
            res.on('end', () => {
                console.log('Respuesta del servidor:', responseData);
            });
        });

        req.on("error", error => {
            console.error('Error en la solicitud:', error);
        });

        req.write(data);
        req.end();

        console.log('Solicitud enviada');

    } catch (error) {
        console.log('Error en SendMessageWhatsApp:', error);
    }
        
    }

    module.exports = {
        SendMessageWhatsApp
    }
const https = require("https");

const SendMessageWhatsApp = (data) => {
    try {
        const jsonData = JSON.stringify(data);

        const options = {
            host: "graph.facebook.com",
            path: "/v17.0/166650459868747/messages",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer TU_TOKEN_DE_ACCESO"
            }
        };

        const req = https.request(options, res => {
            let responseData = '';
            res.on("data", chunk => {
                responseData += chunk;
            });
            res.on('end', () => {
                console.log('Respuesta del servidor:', responseData);
            });
        });

        req.on("error", error => {
            console.error('Error en la solicitud:', error);
        });

        req.write(jsonData);
        req.end();

        console.log('Solicitud enviada');

    } catch (error) {
        console.error('Error en SendMessageWhatsApp:', error);
    }
};

module.exports = {
    SendMessageWhatsApp
};
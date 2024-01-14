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
                Authorization: "Bearer EAAMYnEKWwo4BO4YgOxIMMFbZCAfwlJpLq78am3rzSt0XMe1FtZCuqy3WlOfZAHbgZBwO5e851kIR3dXjAZB015RuBU48AhTy9tx73u2P0tYVWm4SE3diw4wsvhyYUMPC2k5FiQhAdzNd8RZBwy2b6iJbLdH9dxd7gcvCbvDolVNwxtCp1gw0uyoTMBmRjVLy7JjIM1cldngKYf5WBvRmiiSKDa3MgZD"
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
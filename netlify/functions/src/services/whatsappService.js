const https = require("https");

function SendMessageWhatsApp(textResponse, number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text": {
            "body": "Hola Usuario"
        },
        "type": "text"
    })

    const options = {
        host: "graph.facebook.com",
        path: "/v17.0/166650459868747/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.authToken}`
        }
    }

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
}
const https = require("https");

function SendMessageWhatsApp(textResponse, number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text": {
            "body": textResponse
        },
        "type": "text"
    })
console.log('Paso 1')
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
    req.end();

}

module.exports = {
    SendMessageWhatsApp
}
const VerifyToken = (req, res) => {
    try {
        let accessToken = 'ASDASDASSADSAD';
        let token = req.query["hub.verify_token"];
        let challenge = req.body["hub.challenge"];

        if(challenge !== null && token != null && token == accessToken) {
            res.send(challenge)
        } else {
            res.status(400).send();
        }

    } catch (e) {
        res.status(400).send()
    }


    // res.send('Hola verifyToken');
}

const ReceivedMessage = (req,res) => {
    res.send('Hola Received');
}

module.exports = {
    VerifyToken,
    ReceivedMessage
}
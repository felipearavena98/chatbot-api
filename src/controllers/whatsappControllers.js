const VerifyToken = (req, res) => {
    res.send('Hola verifyToken');
}

const ReceivedMessage = (req,res) => {
    res.send('Hola Received');
}

module.exports = {
    VerifyToken,
    ReceivedMessage
}
let redis = require('./../utils/redis');
let info = (req, res) => {
    const validInput = validateInput(req.body);
    if (validInput.status) {
        const token = req.body.token;
        redis.client.get(token, function (err, result) {
            if (result) {
                res.status(200).send(result);
            }
            else {
                res.status(404).json({ message: 'Invalid token' });
            }
        });
    }
    else {
        res.status(404).json({ message: validInput.message });
    }
}
let validateInput = (input) => {
    let result = {}
    if (input.token) {
        result.status = true;
        result.message = '';
        return result;
    }
    else {
        result.status = false;
        result.message = 'No token provided!';
        return result;
    }
}
module.exports = info;
let model = require('./../models');
const isEmail = require('validator/lib/isEmail');
const hash = require('sha256');
const jwt = require('jsonwebtoken');
const config = require('./../config');
const redis = require('./../utils/redis');

let login = (req, res) => {
    let validInput = validateUserInput(req.body);
    console.log(validInput);
    if (validInput.status) {
        let criteria = {};
        if (isEmail(req.body.authKey)) {
            criteria.email = req.body.authKey;
        }
        else {
            criteria.username = req.body.authKey;
        }
        const user = model.User.find({ where: criteria }).then((user) => {
            if (user) {
                const validPassword = comparePassword(req.body.password, user.password);
                if (validPassword) {
                    const token = generateToken(user)
                    saveToRedis(token, user);
                    res.status(200).json(token);
                }
                else {
                   res.status(200).json({ message: 'Incurrect email/username or password' }); 
                }
            }
            else {
                res.status(404).json({ message: 'User does not exists' });
            }
        })
    }
    else {
        res.status(404).json({ message: validInput.message });
    }
}
let validateUserInput = (userInput) => {
    console.log(userInput);
    let result = {}
    if (userInput.authKey && userInput.password) {
        result.status = true;
        result.message = '';
        return result;
    }
    else {
        result.status = false;
        result.message = 'No Email/Username or password provided!';
        return result;
    }
}
let comparePassword = (currentPassword, candidatePassword) => {
    const currentPasswordEncrypted = hash('21' + currentPassword + 'eoka3b');
    if (currentPasswordEncrypted === candidatePassword) {
        return true;
    }
    else {
        return false;
    }
}
let generateToken = (user) => jwt.sign({
  data: { id:user.uid, email: user.email, username:user.username, name:user.name }
}, config.auth.secret, { expiresIn: config.auth.expiresIn });

let saveToRedis = (token, user)=> {
    redis.saveUserInfo(token, user);
}
module.exports = login;
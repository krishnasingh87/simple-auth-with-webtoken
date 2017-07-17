let configurations = require('./../config');
const jwt = require('jsonwebtoken');
const config = require('./../config');


let validator = (req, res) => {
    let tokenVal = req.body.token;
    const validateVal = validateTokenValue(tokenVal);
    if (validateVal.status){
        res.status(200).json(validateVal);
    }else{
        res.status(404).json(validateVal);
    }
}


let validateTokenValue = (tokenVal) => {
    let decoded;
    let result = {status:false, message:''};
    try{
    decoded = jwt.verify(tokenVal, configurations.auth.secret );
    }catch(err){
        console.log(err.message);
    }
    
    if (decoded){
        result.status = true;
        return result;
    }else{
        result.message = 'token is ! valid';
        return result;
    }

}


module.exports = validator;

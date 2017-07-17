let redis = require('./../utils/redis');



var logout = (req, res) => {
let token = req.body.token;
    if (!token){
       res.status(404).json({ message: 'Invalid token' });
       res.end();
    }

    redis.client.del(token, (err, result) => {
         if (result){
             console.log('no error' + result);
              res.status(200).json({message : 'logged out successfully '});
            }else{
              console.log('error' + err);
             res.status(406).json({message : 'logged out unsuccessfully'});
            
          }
    });
              
}

module.exports = logout;
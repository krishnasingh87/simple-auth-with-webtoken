const redis = require('redis');
const redisConfig = require('./../config').redis;

let client = redis.createClient(redisConfig.port, redisConfig.host, { no_ready_check: true });

client.on('connect', function () {
    console.log('Connected to Redis');
});

exports.saveUserInfo = (token, user) => client.set(token, user, redis.print);
exports.getUserInfo = (token) => client.get(token);
exports.client = client;
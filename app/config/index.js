module.exports = {
    database: {
        username: process.env.AMP_DB_USER_NAME,
        name: process.env.AMP_DB_NAME,
        password: process.env.AMP_DB_PASSWORD,
        options: {
            host: process.env.AMP_DB_HOST,
            dialect: 'mysql',
            freezeTableName: true,
            define: {
                timestamps: false
            },
            pool: {
                max: 9,
                min: 0,
                idle: 10000
            }
        }
    },
    auth: {
        secret: 'super_secret_word', // CHANGE IT!
        expiresIn: '24h' // expires in 24 hours
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD
    }

};
const dotenv = require('dotenv')
dotenv.config()
module.exports.config = {
    mongoDb: process.env.DATABASE_ACCESS,
    port: process.env.PORT || 5000
}
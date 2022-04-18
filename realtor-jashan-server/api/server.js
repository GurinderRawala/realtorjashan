const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const { createConnection } = require('./mongo-db')
const { registerAllRoutes } = require('./routes')
const { configureModules } = require('../lib/config-modules')

module.exports.startServer = async (config) =>{
    const modules = configureModules(config)
    createConnection(config)
    const server = express()
    const publicPath = path.join(__dirname, '../../', 'build')

    server.use(cors())
    console.log(publicPath)
    server.use(express.static(publicPath))
    server.use(bodyParser.json())
    registerAllRoutes(server, modules)
    server.use( (error, req, res, next) => {
        res.status(error.status || 500)
        res.send({err: error})
        next()
    }) 
    server.listen(config.port, () => console.log(`server is running on port ${config.port}`))

    return server
}
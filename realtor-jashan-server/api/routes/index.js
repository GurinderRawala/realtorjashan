module.exports.registerAllRoutes = (server, modules) =>{
    require('./contact-us').registerRoutes(server, modules)
}
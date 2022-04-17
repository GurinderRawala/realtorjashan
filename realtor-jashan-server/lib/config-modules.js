const { default: mongoose } = require("mongoose")
const createContactUsModel = require("./models/contact-us")

module.exports.configureModules = (config) =>{
    const contactUsRepo = createContactUsModel(mongoose)
    return{
        contactUsRepo
    }
}
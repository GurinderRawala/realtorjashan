const createContactUsModel = (mongoose) =>{
    const contacts = new mongoose.Schema({
        firstname:{
            type: String,
            required: true
        },
        lastname:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        phone:{
            type: String,
        },
        message:{
            type: String
        },
        date:{
            type: Date,
            default: Date.now
        }
    })
    return mongoose.model('contact', contacts)
}
module.exports = createContactUsModel
const mongoose = require('mongoose')
module.exports.createConnection = (config) =>{
  mongoose.connect(config.mongoDb,  
  (err) => {
    if(err) console.log(err) 
    else console.log("mongdb is connected");
  })
}
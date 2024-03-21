const mongoose = require('mongoose')
require('dotenv').config();

exports.dbConnect = async() => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then( () => { console.log("DB ka connection successful")})
    .catch( (error) => {
        console.log("DB facing connection issues");
        console.log("Error");
        process.exit(1);
    });
}

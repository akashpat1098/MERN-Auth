const mongoose = require('mongoose')

module.exports = () =>{
    const connectionParams= {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };
    try {
        mongoose.connect(process.env.DB,connectionParams)
        console.log("Database Connected");
    } catch (error) {
        console.error(error);
        console.error("Could not Connect to Database");
    }
}
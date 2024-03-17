const mongoose = require('mongoose');
const mongoURI ='mongodb+srv://bakarbro123:vqwWpYYh9vcnbauZ@cluster0.ckmcwuj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const mongodb = async () =>{
    try{
        await mongoose.connect(mongoURI,);
        console.log("connection established")
    }catch(err){
        console.log("database not connected",err);
    }
};


module.exports = mongodb;
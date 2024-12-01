const mongoose = require('mongoose');

async function dbConnection(){
    await mongoose.connect('mongodb://localhost:27017/Organic_store')
    // await mongoose.connect('mongodb+srv://mitaligajera1121:mitaligajera1121@cluster0organicstore.wiuy8cn.mongodb.net/Organic');
    console.log("db is connect ");
}
module.exports = dbConnection;
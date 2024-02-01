const mongoose = require('mongoose');

const schema = mongoose.Schema(
    {   
        id:Number,
        username:String,
        password:String,
        email:String,
        mobileno:Number,
        city:String,
    }
)

module.exports = mongoose.model("User",schema);
const mongoose = require('mongoose');

const schema = mongoose.Schema(
    {   
        uid:Number,
        username:String,
        password:String,
        email:String,
        mobileno:Number,
        city:String,
        role:String,
    }
)

module.exports = mongoose.model("User",schema);
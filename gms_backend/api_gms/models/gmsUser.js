const mongoose = require('mongoose');

const schema = mongoose.Schema(
    {
        username:String,
        password:String,
        email:String,
        dob:Date,
        mobileno:Number,
        city:String,
    }
)

module.exports = mongoose.model("User",schema);
const mongoose = require ('mongoose');

const schema = mongoose.Schema({
    pid:Number,
    pname:String,
    price:Number,
    category:String,
    img:String,
    desc:String
})

module.exports = mongoose.model("Grocery",schema);
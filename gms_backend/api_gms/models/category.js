const mongoose = require('mongoose');

const schema = mongoose.Schema(
    {
        cid:Number,
        category:String
    }
)

module.exports = mongoose.model("Category",schema);
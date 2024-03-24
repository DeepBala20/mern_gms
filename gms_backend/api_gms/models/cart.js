const mongoose = require('mongoose');
const gmsGroce = require('./gmsGroce');
const gmsUser = require('./gmsUser');

const schema = mongoose.Schema({
    cartid: Number,
    userid: {
        type: Number,
        ref: 'gmsUser'
    },
    product: {
        type: gmsGroce.schema,
        ref: 'gmsGroce'
    }
});

module.exports = mongoose.model('Cart', schema);

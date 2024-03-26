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

// const mongoose = require('mongoose');
// const gmsGroce = require('./gmsGroce');
// const gmsUser = require('./gmsUser');

// // Define your Cart schema
// const schema = mongoose.Schema({
//     cartid: Number,
//     userid: {
//         type: Number,
//         ref: 'gmsUser'
//     },
//     product: {
//         type: gmsGroce.schema,
//         ref: 'gmsGroce'
//     }
// });

// // Define a pre-save middleware to auto-increment cartid before saving
// schema.pre('save', async function(next) {
//     try {
//         if (!this.cartid) {
//             // If cartid is not set, fetch the latest cartid from the counter collection
//             const Counter = mongoose.model('Counter');
//             const counter = await Counter.findOneAndUpdate({ _id: 'cartid' }, { $inc: { sequence_value: 1 } }, { new: true, upsert: true });

//             // Set the incremented value as the cartid
//             this.cartid = counter.sequence_value;
//         }
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

// // Export the model
// module.exports = mongoose.model('Cart', schema);

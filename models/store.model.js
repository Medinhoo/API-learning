const mongoose = require('mongoose')

const StoreSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please enter a store name"],
        },
    },
    {
        timestamps: true
    }

);

const Store = mongoose.model("Store", StoreSchema);


module.exports = Store;
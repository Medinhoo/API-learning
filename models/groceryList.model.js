const mongoose = require('mongoose');

const GroceryListSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a name"],
        },

        products: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }]
    },

    {
        timestamps: true
    }
);

const GroceryList = mongoose.model("GroceryList", GroceryListSchema);

module.exports = GroceryList;

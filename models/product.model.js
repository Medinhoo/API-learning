const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema(
    {
        id: {
            type: Number,
        },
        
        name: {
            type: String,
            required: [true, "please enter a product"],
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        store: {
            type: String,
            required: [true, "please enter a store"],
        },

        importance: {
            type: Number,
            required: true,
            default: 0
        }
    },

    {
        timestamps: true
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
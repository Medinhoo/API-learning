const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "please enter a username"],
        },
        password: {
            type: String,
            required: [true, "please enter a password"],
        },
        groceryLists: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'GroceryList'
        }],
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;

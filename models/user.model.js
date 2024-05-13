const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    id: {
      type: Number,
    },

    username: {
      type: String,
      required: [true, "please enter a username"],
    },

    password: {
      type: String,
      required: [true, "please enter a password"],
    },

    groceryLists: [
      {
        name: {
          type: String,
          required: [true, "please enter a name"],
        },

        products: [
          {
            _id: {
              type: Number,
              required: [true, "please enter a id"],
            },
            productName: {
              type: String,
              required: [true, "please enter a name"],
            },
            quantity: {
              type: Number,
              required: [true, "please enter a quantity"],
            },
            store: {
              type: String,
              required: [true, "please enter a store"],
            },
            importance: {
              type: Number,
              required: [true, "please enter an importance"],
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;

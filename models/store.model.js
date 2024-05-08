import { Schema, model } from 'mongoose';

const StoreSchema = Schema(
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

const Store = model("Store", StoreSchema);

export default Store;
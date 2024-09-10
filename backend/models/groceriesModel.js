import mongoose from "mongoose";

const {Schema} = mongoose;

const groceriesSchema = new Schema({
    item:{
        type: String,
        required: true,
    },
    amount: Number,
}, {timestamps: true });

const GroceriesModel = mongoose.model("Groceries", groceriesSchema);

export {GroceriesModel as default};


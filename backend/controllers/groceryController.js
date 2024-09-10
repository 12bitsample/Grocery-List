import GroceriesModel from "../models/groceriesModel.js";
import mongoose from "mongoose";

//get all groceries
const getGroceries = async (req, res) => {
    try {
        const items = await GroceriesModel.find();
        res.json(items);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//add grocery item
const addGroceryItem = async (req, res) => {
    const {item, amount} = req.body;
    
    try {
        const grocery = await GroceriesModel.create({item, amount});
        res.status(200).json(grocery);
    } catch (error) {
        res.status(400).json({error: error.message });
    }
}

//delete grocery item
const deleteGroceryItem = async (req, res) => {
    const { id } = req.params;  

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Invalid item ID."});
    }

    try {
        const groceryItem = await GroceriesModel.findOneAndDelete({_id: id});

        if (!groceryItem) {
            return res.status(400).json({error: "Item can not be located."});
        }

        return res.status(200).json({ message: "Item deleted successfully!"});

    } catch (error) {
        return res.status(500).json({ error: "Server error." });
    }
}

export {
    getGroceries,
    addGroceryItem,
    deleteGroceryItem,
}
import GroceriesModel from "../models/groceriesModel.js";

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

    if (!mongoose.Types.ObjectId(id)) {
        return res.status(404).json({error: 'Item can not be located.'});
    }
    
    const groceryItem = await GroceriesModel.findOneAndDelete({_id: id});

    if (!groceryItem) {
        return res.status(400).json({error: 'Item can not be located.'});
    }
}

export {
    getGroceries,
    addGroceryItem,
    deleteGroceryItem,
}
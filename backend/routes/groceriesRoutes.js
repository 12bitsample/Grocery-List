import express from "express";
import GroceriesModel from "../models/groceriesModel.js";

const router = express.Router();

//get all groceries items
router.get('/', (req, res) => {
    res.json({mssg: 'Get all groceries!'})
});

//post new grocery item
router.post('/', async (req, res) => {
    const {item, amount} = req.body;
    
    try {
        const grocery = await Groceries.create({item, amount});
        res.status(200).json(grocery);
    } catch (error) {
        res.status(400).json({error: error.message });
    }
});

//delete grocery item
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete grocery item!'})
});

export {router as default};
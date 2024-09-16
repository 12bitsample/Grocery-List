import express from "express";
// import mongoose from "mongoose";
import { addGroceryItem, 
        deleteGroceryItem, 
        getGroceries, } from "../controllers/groceryController.js";

//router
const router = express.Router();

//get all groceries items
router.get("/", getGroceries);

//post new grocery item
router.post("/", addGroceryItem);

//delete grocery item
router.delete("/:id", deleteGroceryItem);

export {router as default};
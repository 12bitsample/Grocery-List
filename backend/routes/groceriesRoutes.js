import express from "express";
// import mongoose from "mongoose";
import { addGroceryItem, 
        deleteGroceryItem, 
        getGroceries, 
} from "../controllers/groceryController.js";
import requireAuth from "../middleware/requireAuth.js";

//router
const router = express.Router();

//require auth for all grocery routes
router.use(requireAuth);

//get all groceries items
router.get("/", getGroceries);

//post new grocery item
router.post("/", addGroceryItem);

//delete grocery item
router.delete("/:id", deleteGroceryItem);

export {router as default};
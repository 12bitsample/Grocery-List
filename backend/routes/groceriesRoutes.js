import express from "express";

const router = express.Router();

//get all groceries items
router.get('/', (req, res) => {
    res.json({mssg: 'Get all groceries!'})
});

//post new grocery item
router.post('/', (req, res) => {
    res.json({mssg: 'Post new grocery item!'})
});

//delete grocery item
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete grocery item!'})
});

export {router as default};
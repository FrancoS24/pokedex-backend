const express = require('express');
const router = express.Router();
const movesQueries = require('../controllers/moves')


router.get('/' , async (req, res) => {
    const moves = await movesQueries.getAllItems();
    res.json(moves)
})

router.get('/:id', async (req, res)=> {
    const id = req.params.id
    const moves = await movesQueries.getItemByID(id);
    res.json(moves)
})

router.post('/' , async (req, res) => {
    const body = req.body
    const newmoves = await movesQueries.createItem(body);
    res.json(newmoves)
})

router.put('/:id' , async (req, res) => {
    const id = req.params.id
    const body = req.body
    const updatemove = await movesQueries.updateItem(id, body)
    res.json(updatemove)
})

router.delete('/:id' , async (req, res)=>{
    const id = req.params.id
    const deletemoves = await movesQueries.deleteItem(id)
    res.json(deletemoves)
})

module.exports = router;
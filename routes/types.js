const express = require('express');
const router = express.Router();
const typesQueries = require('../controllers/types')


router.get('/' , async (req, res) => {
    const types = await typesQueries.getAllItems();
    res.json(types)
})

router.get('/:id', async (req, res)=> {
    const id = req.params.id
    const types = await typesQueries.getItemByID(id);
    res.json(types)
})

router.post('/' , async (req, res) => {
    const body = req.body
    const newTypes = await typesQueries.createItem(body);
    res.json(newTypes)
})

router.put('/:id' , async (req, res) => {
    const id = req.params.id
    const body = req.body
    const updateType = await typesQueries.updateItem(id, body)
    res.json(updateType)
})

router.delete('/:id' , async (req, res)=>{
    const id = req.params.id
    const deleteTypes = await typesQueries.deleteItem(id)
    res.json(deleteTypes)
})

module.exports = router;
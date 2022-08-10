const express = require('express');
const router = express.Router();
const pokemonQueries = require('../controllers/pokemon')


router.get('/' , async (req, res) => {
    const pokemon = await userQueries.getAllItems();
    res.json(pokemon)
})

router.get('/:id', async (req, res)=> {
    const id = req.params.id
    const pokemon = await userQueries.getItemByID(id);
    res.json(pokemon)
})

router.post('/' , async (req, res) => {
    const body = req.body
    const newpokemon = await pokemonQueries.createItem(body);
    res.json(newpokemon)
})

router.put('/:id' , async (req, res) => {
    const id = req.params.id
    const body = req.body
    const updatepokemon = await pokemonQueries.updateItem(id, body)
    res.json(updatepokemon)
})

router.delete('/:id' , async (req, res)=>{
    const id = req.params.id
    const deletepokemon = await pokemonQueries.deleteItem(id)
    res.json(deletepokemon)
})

module.exports = router;
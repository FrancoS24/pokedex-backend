const express = require('express');
const router = express.Router();
const pokeTypesQueries = require('../controllers/pokemon_type')


router.get('/' , async (req, res) => {
    const pokemon_type = await pokeTypesQueries.getAllItems();
    res.json(pokemon_type)
})

router.get('/:id', async (req, res)=> {
    const id = req.params.id
    const pokemon_type = await pokeTypesQueries.getItemById(id);
    res.json(pokemon_type)
})

router.post('/' , async (req, res) => {
    const body = req.body
    const newPokemonTypes = await pokeTypesQueries.createItem(body);
    res.json(newPokemonTypes)
})

router.put('/:id' , async (req, res) => {
    const id = req.params.id
    const body = req.body
    const updatePokemonTypes = await pokeTypesQueries.updateItem(id, body)
    res.json(updatePokemonTypes)
})

router.delete('/:id' , async (req, res)=>{
    const id = req.params.id
    const deletePokemonTypes = await pokeTypesQueries.deleteItem(id)
    res.json(deletePokemonTypes)
})

module.exports = router;
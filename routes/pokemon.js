const express = require('express');
const { types } = require('pg');
const router = express.Router();
const pokemonQueries = require('../controllers/pokemon')
const pokeMovesQueries = require('../controllers/pokemon_moves');
const { verifyToken } = require('../middleware/validate-jwt');


router.get('/' , async (req, res) => {
    const pokemon = await pokemonQueries.getAllItems();
    res.json(pokemon)
})

router.get('/:id', async (req, res)=> {
    const id = req.params.id
    const pokemon = await pokemonQueries.getItemById(id);
    res.json(pokemon)
})

router.post('/NewPokemon', async (req, res) => {
    const body = req.body
    const newPokemon = await pokemonQueries.createItem(body)
    res.json(newPokemon)
    


   
   
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
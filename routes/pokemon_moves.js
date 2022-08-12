const express = require('express');
const router = express.Router();
const pokeMovesQueries = require('../controllers/pokemon_moves')


router.get('/' , async (req, res) => {
    const pokemon_moves = await pokeMovesQueries.getAllItems();
    res.json(pokemon_moves)
})

router.get('/:id', async (req, res)=> {
    const id = req.params.id
    const pokemon_moves = await pokeMovesQueries.getItemById(id);
    res.json(pokemon_moves)
})

router.post('/' , async (req, res) => {
    const body = req.body
    const newPokemonMoves = await pokeMovesQueries.createItem(body);
    res.json(newPokemonMoves)
})

router.put('/:id' , async (req, res) => {
    const id = req.params.id
    const body = req.body
    const updatePokemonMoves = await pokeMovesQueries.updateItem(id, body)
    res.json(updatePokemonMoves)
})

router.delete('/:id' , async (req, res)=>{
    const id = req.params.id
    const deletePokemonMoves = await pokeMovesQueries.deleteItem(id)
    res.json(deletePokemonMoves)
})

module.exports = router;
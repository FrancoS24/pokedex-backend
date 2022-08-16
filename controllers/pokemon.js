const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllItems = () => {

    return knex
    .select('*')
    .from('pokemon')
}

const getItemById = (id) => {
    let pokemonFinal = {
    pokemon:{},
    moves:{}
    }
    return knex
    .select('*')
    .from('pokemon')
    .where('id', id)
    pokemonFinal.pokemon = 'pokemon'
    .innerJoin('pokemon_moves', () => {
        this.select('pokemon.id','=', 'pokemon_moves.pokemon_id')
    })
}


const createItem = (body) => {
    knex('pokemon')
    .insert(body.pokemon)
    .returning('id')
    .then( (id) => {
         const pokemonsToInsertMoves = body.moves.map(move =>
             ({moves_id: move.moves_id, pokemon_id: parseInt.id}));
    
          return knex('pokemon_moves').insert(pokemonsToInsertMoves)
            console.log(body.moves);
    })
     .then( (id) => {
        const pokemonsToInsertTypes = body.types.map(type =>
             ({types_id: type.types_id, pokemon_id: parseInt.id}))
         return knex('pokemon_type').insert(pokemonsToInsertTypes)
         console.log(body.types);
    })
    .catch( (error) => {
        console.error(error)});
      
}



const updateItem = (id, body) => {
    return knex('pokemon')
    .where('id', id)
    .update(body)
}

const deleteItem = (id) => {
    return knex('pokemon')
    .where('id', id)
    .del()
}

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem

}
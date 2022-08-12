const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllItems = () => {
    // return knex
    // .column('id', 'name', 'height', 'weight', 'description', 'image', 'HP', 'ATK', 'DEF', 'SATK', 'SDEF', 'SPD' )
    // .select()
    // .from('pokemon')

    return knex
    .select('*')
    .from('pokemon')
    .join('pokemon_moves', {'pokemon.id': 'pokemon_moves.pokemon_id'})
    .join('pokemon_type', {'pokemon.id': 'pokemon_type.pokemon_id'})
  
      

    // BUSCAR LA MANERA CORRECTA DE ESCRIBIRLO PARA QUE FUNCIONE


    // .join('pokemon_moves', {'pokemon_id': 'pokemon.id'})
    // .join('pokemon_type', {'pokemon_id': 'pokemon.id'})

    // .join('pokemon_moves', 'pokemon_moves.pokemon_id', '=', 'pokemon.id')
    // .join('pokemon_type', 'pokemon_type.pokemon_id', '=', 'pokemon.id')

    // .join('types', 'types.id', '=', 'pokemon.types_id')
    // .join('pokemon_moves_id', '=', 'pokemon_moves.id')
    // .join('pokemon_type_id', '=', 'pokemon_type.id')
}

const getItemById = (id) => {
    return knex('pokemon')
    .where('id', id)
    .select('name', 'id')
}

// const createItem = (body) => {
//     return knex('pokemon')
//     .insert(body)

// }

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
   
// }


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


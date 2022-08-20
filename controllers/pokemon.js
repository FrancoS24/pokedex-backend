const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllItems = () => {
    return knex
    .select('*')
    .from('pokemon')

}


const getItemById = async (id) => {
    let pokemonFinal = {
    pokemon:{},
    moves: [],
    types: []
    }
    await knex
    .select('*')
    .from('pokemon')
    .where('id', id)
    .then((arregloPokemon) => {
        return pokemonFinal['pokemon'] = arregloPokemon[0]
    });
    await knex
    .select("moves.name")
    .from("moves")
    .innerJoin("pokemon_moves", "moves.id", "pokemon_moves.moves_id")
    .innerJoin("pokemon", "pokemon_moves.pokemon_id", "pokemon.id")
    .where("pokemon.id", id)
    .then((movesOfPokemos) => {
      return pokemonFinal['moves'] = movesOfPokemos
    });
    await knex
    .select("types.name")
    .from("types")
    .innerJoin("pokemon_type", "types.id", "pokemon_type.types_id")
    .innerJoin("pokemon", "pokemon_type.pokemon_id", "pokemon.id")
    .where("pokemon.id", id)
    .then((typesOfPokemos) => {
      return pokemonFinal['types'] = typesOfPokemos
    });
    return pokemonFinal
}


const createItem = async (body) => {
    let pokemonid;
   await knex('pokemon')
    .insert(body.pokemon)
    .returning('id')
    .then( (arregloPokemon) => {
        pokemonid = arregloPokemon[0].id
         const pokemonsToInsertMoves = body.moves.map(movimiento => ({ 
            pokemon_id: pokemonid,
            moves_id: movimiento.moves_id 
            }))
            
          return pokemonsToInsertMoves;
    })
    .then((pokemonsToInsertMoves) => {
        knex ('pokemon_moves')
        .insert(pokemonsToInsertMoves)
        .then((res) => { 
            console.log(res)
        })
    })
    .then( () => {
        const pokemonToInsertTypes = body.types.map(tipo => ({
            pokemon_id: pokemonid,
            types_id: tipo.types_id
        }))
        
        return pokemonToInsertTypes;
    })
    .then( (pokemonToInsertTypes) => {
        knex('pokemon_type')
         .insert(pokemonToInsertTypes)
         .then((res) => {
             console.log(res)
         })
     })
    .catch( (error) => {
        console.log(error)
    })
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

//     let pokemonid;
//    await knex('pokemon')
//     .returning('id')
//     .then( (arregloPokemon) => {
//         pokemonid = arregloPokemon[0].id
//          const pokemonsToDeleteMoves = moves.map(movimiento => ({ 
//             pokemon_id: pokemonid,
//             moves_id: movimiento.moves_id 
//             }))
            
//           return pokemonsToDeleteMoves;
//     })
//     .then((pokemonsToDeleteMoves) => {
//         knex ('pokemon_moves')
//         .del(pokemonsToDeleteMoves)
//         .then((res) => { 
//             console.log(res)
//         })
//     })
//     .then( () => {
//         const pokemonToDeleteTypes = types.map(tipo => ({
//             pokemon_id: pokemonid,
//             types_id: tipo.types_id
//         }))
        
//         return pokemonToDeleteTypes;
//     })
//     .then( (pokemonToDeleteTypes) => {
//         knex('pokemon_type')
//          .del(pokemonToDeleteTypes)
//          .then((res) => {
//              console.log(res)
//          })
//      })
//     .del()
//     .catch( (error) => {
//         console.log(error)
//     })
    
}

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem

}


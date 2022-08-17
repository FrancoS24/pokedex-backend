const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllItems = () => {
    return knex
    .select('*')
    .from('pokemon')


    // .join('pokemon_moves', {'pokemon.id': 'pokemon_moves.pokemon_id'})
    // .join('pokemon_type', {'pokemon.id': 'pokemon_type.pokemon_id'})
  
    // BUSCAR LA MANERA CORRECTA DE ESCRIBIRLO PARA QUE FUNCIONE
    // .join('pokemon_moves', {'pokemon_id': 'pokemon.id'})
    // .join('pokemon_type', {'pokemon_id': 'pokemon.id'})

    // .join('pokemon_moves', 'pokemon_moves.pokemon_id', '=', 'pokemon.id')
    // .join('pokemon_type', 'pokemon_type.pokemon_id', '=', 'pokemon.id')

    // .join('types', 'types.id', '=', 'pokemon.types_id')
    // .join('pokemon_moves_id', '=', 'pokemon_moves.id')
    // .join('pokemon_type_id', '=', 'pokemon_type.id')
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
    let pokemonid = '';
    knex('pokemon')
    .insert(body.pokemon)
    .returning('id')
    .then( (arregloPokemon) => {
        pokemonid = arregloPokemon[0].id
         const pokemonsToInsertMoves = body.moves.map(move =>
             ({ pokemon_id: pokemonid,
                moves_id: move.moves_id 
            }));
          return pokemonsToInsertMoves;
    })
     .then( (pokemonsToInsertMoves) => {
        knex ('pokemon_moves')
        .insert(pokemonsToInsertMoves)
        .then((res) => { 
            console.log(res)
        })
    })
    .then()
    const pokemonToInsertTypes = body.types.map(type => ({
        pokemon_id: arregloPokemon.id,
        types_id: type.types_id
    }));
    await knex('pokemon_type')
    .insert(pokemonToInsertTypes)
    .then((res) => {
        console.log(res)
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
}

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem

}


const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllItems = () => {
    return knex
    .column('moves_id', 'pokemon_id', 'id')
    .select()
    .from('pokemon_moves')
}

const getItemById = (id) => {
    return knex('pokemon_moves')
    .where('id', id)
    .select('name', 'id')
}

const createItem = (body) => {
    return knex('pokemon_moves')
    .insert(body)

}

const updateItem = (id, body) => {
    return knex('pokemon_moves')
    .where('id', id)
    .update(body)
}

const deleteItem = (id) => {
    return knex('pokemon_moves')
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


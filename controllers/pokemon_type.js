const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllItems = () => {
    return knex
    .column('types_id', 'pokemon_id', 'id')
    .select()
    .from('pokemon_type')
}

const getItemById = (id) => {
    return knex('pokemon_type')
    .where('id', id)
    .select('name', 'id')
}

const createItem = (body) => {
    return knex('pokemon_type')
    .insert(body)

}

const updateItem = (id, body) => {
    return knex('pokemon_type')
    .where('id', id)
    .update(body)
}

const deleteItem = (id) => {
    return knex('pokemon_type')
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
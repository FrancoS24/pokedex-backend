const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllItems = () => {
    return knex
    .column('id', 'name', 'height', 'weight', 'description', 'image', 'HP', 'ATK', 'DEF', 'SATK', 'SDEF', 'SPD' )
    .select()
    .from('pokemon')
}

const getItemById = (id) => {
    return knex('pokemon')
    .where('id', id)
    .select('name', 'id')
}

const createItem = (body) => {
    return knex('pokemon')
    .insert(body)

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


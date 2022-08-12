const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllItems = () => {
    return knex
    .column('id', 'name')
    .select()
    .from('moves')
}

const getItemById = (id) => {
    return knex('moves')
    .where('id', id)
    .select('name', 'id')
}

const createItem = (body) => {
    return knex('moves')
    .insert(body)

}

const updateItem = (id, body) => {
    return knex('moves')
    .where('id', id)
    .update(body)
}

const deleteItem = (id) => {
    return knex('moves')
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


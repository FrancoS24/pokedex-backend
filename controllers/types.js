const configDB = require('../knexfile')
const knex = require('knex')(configDB.development);

const getAllItems = () => {
    return knex 
    .column('id', 'name')
    .select()
    .from('types')
}

const getItemById = (id) => {
    return knex('types')
    .where('id', id)
    .select('name', 'id')

}

const createItem = (body) => {
    return knex('types')
    .insert(body)

}

const updateItem = (id, body) => {
    return knex('types')
    .where('id', id)
    .update(body)
}

const deleteItem = (id) => {
    return knex('types')
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

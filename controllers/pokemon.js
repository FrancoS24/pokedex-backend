const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllItems = () => {
    return knex
    .colum('id', 'name', 'imagen', 'peso', 'altura', 'descripcion', 'hp', 'atk', 'def', 'satk', 'sdef', 'spd' )
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


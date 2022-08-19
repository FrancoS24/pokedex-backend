const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllItems = () =>{
    return knex 
    .column('id' , 'name', 'password')
    .select()
    .from('user')
}

const getItemById = (id) => {
    return knex('user')
    .where('id' , id)
    .select('name', 'id')
}

const createItem = (body) => {
    return knex('user')
    .insert(body)
}

const updateItem = (id, body) =>{
    return knex('user')
    .where('id' ,id)
    .update(body)
}

const deleteItem = (id) =>{
    return knex('user')
    .where('id' , id)
    .del()
}

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
}
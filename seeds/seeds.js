/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    {id: 1, name: 'Dario', password: 'hola'},
    {id: 2, name: 'Ignacio', password: 'chau'}, 
    {id: 3, name: 'Franco', password: 'adios'}
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('pokemon_habilidad', (table) => {
        table.integer('habilidad_id').references('habilidad.id');
        table.integer('pokemon_id').references('pokemon.id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('pokemon_habilidad')
};

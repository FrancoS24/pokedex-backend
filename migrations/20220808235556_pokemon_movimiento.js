/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('pokemon_movimiento', (table) => {
        table.integer('movimiento_id').references('movimiento.id');
        table.integer('pokemon_id').references('pokemon.id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('pokemon_movimiento')
};

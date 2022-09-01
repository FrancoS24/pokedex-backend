/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pokemon', (table) => {
        table.increments('id');
        table.string('name');
        table.decimal('height');
        table.decimal('weight');
        table.text('description');
        table.string('image');
        table.integer('HP');
        table.integer('ATK');
        table.integer('DEF');
        table.integer('SATK');
        table.integer('SDEF');
        table.integer('SPD');
        table.string('type');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('pokemon')
};

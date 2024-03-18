exports.up = function (knex) {
  return knex.schema.createTable("boxContent", (table) => {
    table.increments("id").primary();
    table
      .integer("product_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("products");
    table.integer("quantity").unsigned().notNullable();
    table.string("item_name").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("boxContent");
};

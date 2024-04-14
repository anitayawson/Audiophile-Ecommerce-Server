exports.up = function (knex) {
  return knex.schema.createTable("cart", (table) => {
    table.increments("id").primary();
    table
      .integer("product_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("products");
    table.string("item_name").notNullable();
    table.integer("item_quantity").unsigned().notNullable();
    table.integer("item_price").unsigned().notNullable();
    table.string("item_image").notNullable();

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("cart");
};

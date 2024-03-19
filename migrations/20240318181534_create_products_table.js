exports.up = function (knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("id").primary();
    table.string("slug").notNullable();
    table.string("name").notNullable();
    table
      .integer("category_id")
      .unsigned()
      .references("id")
      .inTable("categories")
      .onDelete("CASCADE");
    table.boolean("isNew").notNullable();
    table.integer("price").notNullable();
    table.text("description").notNullable();
    table.text("features").notNullable();
    table.json("images").notNullable();
    table.json("preview_images").notNullable();

    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};

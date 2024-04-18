exports.up = function (knex) {
  return knex.schema.createTable("orders", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("phone").notNullable();
    table.string("address").notNullable();
    table.string("zip_code").notNullable();
    table.string("city").notNullable();
    table.string("country").notNullable();
    table.string("payment_method").notNullable();
    table.string("emoney_number");
    table.string("emoney_pin");
    table.integer("sub_total").notNullable();
    table.integer("shipping_cost").notNullable();
    table.integer("vat").notNullable();
    table.integer("grand_total").notNullable();
    table.json("items").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("orders");
};

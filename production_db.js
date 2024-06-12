require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  client: "mysql2",
  connection: {
    host: process.env.production.JAWSDB_HOST,
    database: process.env.production.JAWSDB_NAME,
    user: process.env.production.JAWSDB_USER,
    password: process.env.production.JAWSDB_PASSWORD,
  },
};

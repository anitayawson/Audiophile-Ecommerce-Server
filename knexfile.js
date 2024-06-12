require("dotenv").config();
require("knex");

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: "./migrations",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      host: "c584md9egjnm02sk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      database: "qhlonfth8cp5uzr9",
      user: "e3ffwj5p0bpb5dhc",
      password: "s43e83s5s9ww2z3i",
    },
    migrations: {
      directory: "./migrations",
    },
  },
};

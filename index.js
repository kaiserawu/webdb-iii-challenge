const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');
const cleaner = require("knex-cleaner")

exports.seed = function(knex) {
    return cleaner.clean(knex, {
        mode: "delete",
        ignoreTables: [
            "knex_migrations",
            "knex_migrations_lock",
        ],
    })
}

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

server.listen(8000, () => console.log('Running on port 8000'));
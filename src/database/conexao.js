const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'postgres',
        database: 'market_cubos'
    }
});
// const query = (text, param) => {
//     return pool.query(text, param);
// }

module.exports = knex;
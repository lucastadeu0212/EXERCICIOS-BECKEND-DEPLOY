const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'dpg-clnnr0gfvntc73b4imag-a',
        port: 5432,
        user: 'exercicios_backend_deploy_user',
        password: 'BfsOCZbbPTWE0NeJYXhhl19JWS3ZRQRQ',
        database: 'exercicios_backend_deploy'
    }
});
// const query = (text, param) => {
//     return pool.query(text, param);
// }

module.exports = knex;
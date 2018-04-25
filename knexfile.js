module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/todolistdb'
  },
  // test: {
  //   client: 'pg',
  //   connection: 'postgres://localhost/knex_postgres_intro_test'
  // },
  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL
  // }
}

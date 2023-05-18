module.exports = {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: {
        directory: './src/data/migrations'
    },
    seeds: {
        directory: './src/data/seeds'
    },
    pool: {
        afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done)},
    };
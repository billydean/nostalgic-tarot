module.exports = {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: {
        directory: './api/data/migrations'
    },
    seeds: {
        directory: './api/data/migrations'
    },
    pool: {
        afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done)},
    connection: {
        filename: './api/data/cards.db3'
    }
    };
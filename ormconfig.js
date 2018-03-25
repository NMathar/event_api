module.exports = {
    "type": process.env.DATABASE_TYPE || 'mysql',
    "host": process.env.DATABASE_HOST || 'localhost',
    "port": +process.env.DATABASE_PORT || 3306,
    "username": process.env.DATABASE_USERNAME || 'root',
    "password": process.env.DATABASE_PASSWORD || 'root',
    "database": process.env.DATABASE_NAME || 'eventapi',
    "synchronize": true,
    "logging": false,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [
        "migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "migrationsDir": "migration"
    }
};
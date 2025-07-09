const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

async function openDb() {
    // return a promsie with db obj
    return open({
        filename: './test.db',
        driver: sqlite3.Database
    });
}

async function setup() {
    const db = await openDb();
    await db.exec(`CREATE TABLE IF NOT EXISTS users (
        u_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        password TEXT,
        email TEXT UNIQUE
        )`);
        return db; // caller main.js uses it to run the sql command

    // habits
    await db.exec(`CREATE TABLE IF NOT EXISTS `)
}

module.exports = { // allows main.js to use the functions
    openDb,
    setup
};
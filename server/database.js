const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE devices (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, info TEXT, qrCode TEXT)");
});

module.exports = db;

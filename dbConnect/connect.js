const mysql = require('mysql');

// connection to the server
const db = mysql.createConnection({
    host: 'host',
    user: 'root',
    password: 'root',
    database: 'db_contaz'
});

// connection to bd
db.connect((err, success) => {
    if(!err)
        console.log('Connection established successfuly: ', success)
    else
        throw err;
});

module.exports = db;
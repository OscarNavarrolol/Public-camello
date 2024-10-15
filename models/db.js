const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // su usuario en workbench
  password: '1234',  // su clave en workbench
  database: 'public_job' // su bd
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL.');
});

module.exports = connection;
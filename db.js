require('dotenv').config();
const mysql = require('mysql2');

// Crear la conexión usando las variables de entorno
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Conectar a la base de datos
connection.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return; // Detener la ejecución si hay un error
  }
  console.log('Conectado a MySQL');

  // Ejemplo de consulta
  connection.query('SELECT * FROM usuarios', (err, results) => {
    if (err) throw err;
    console.log('Resultados de la consulta:', results);

    // Cerrar la conexión
    connection.end(err => {
      if (err) throw err;
      console.log('Conexión cerrada');
    });
  });
});
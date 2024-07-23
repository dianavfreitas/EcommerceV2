const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();


const PORT = 3030;

const connection = mysql.createConnection({
    host: 'sql5.freesqldatabase.com',
    user: 'sql5720513',
    password: 'S79CUk1n2F',
    database: 'sql5720513',
    port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Failed to connect to MySQL database:', err);
    return;
  }
  console.log('Successfully connected to MySQL database.');
});
app.use(express.static(path.join(__dirname, 'build')));

app.use('/images', express.static(path.join(__dirname, 'src', 'images')));

app.get('/api/items', (req, res) => {
  const query = 'SELECT name, description, price, img, type FROM Sunset';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
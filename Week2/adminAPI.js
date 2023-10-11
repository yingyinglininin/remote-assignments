// get the client
const mysql = require('mysql2');
const config = require('config');
const express = require('express');
const bodyParser = require('body-parser');

// MySQL connection setting
const dbConfig = {
    host: config.get('server.host'),
    user: config.get('server.user'), 
    password: config.get('server.password'), 
    database: config.get('server.database')
  };

// Create the connection pool
const pool = mysql.createPool(dbConfig);

const app = express()
app.use(bodyParser.json());

// Sign Up API
app.post("/users", function (req, res) {
  try {
      const user = req.body;
      const insertQuery = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
      const values = [user.name, user.email, user.password];
      
      pool.query(insertQuery, values, (err, result) => {
        if (err) {
          res.status(409).json({ error: 'Email Already Exists' });
        } else {
            const responseData = {
              "data": {
                "user": {
                  "id": result.insertId,
                  "name": user.name,
                  "email": user.email
                },
                "request-date": new Date().toUTCString()
              }
          };
          res.status(200).json(responseData);
        }
      });
  } catch (error) {
      res.status(400).json({ error: 'Client Error Response' });
  }
});


// Query API
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    const searchQuery = 'SELECT * FROM user WHERE id = ?';

    pool.query(searchQuery, [userId], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Client Error Response' });
        } else if (results.length === 0) {
            res.status(403).json({ error: 'User not Existing' });
        } else {
          const user = results[0];
          const responseData = {
            "data": {
              "user": {
                "id": user.id,
                "name": user.name,
                "email": user.email
              },
              "request-date": new Date().toUTCString()
            }
          };
          res.status(200).json(responseData);
        }
    });
  });

const port = 3000
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
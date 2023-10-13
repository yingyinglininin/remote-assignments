// get the client
const mysql = require('mysql2');
const config = require('config');
const express = require('express');

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
app.use(express.json());

// Password Validation
function validatePassword(password) {
  // Define regular expressions for the character types
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numberRegex = /[0-9]/;
  const symbolRegex = /[~'!@#$%~&*()_\-+=\[\]:;"<,>.?/]/;

  // Check if the password meets the requirements
  const hasUppercase = uppercaseRegex.test(password);
  const hasLowercase = lowercaseRegex.test(password);
  const hasNumber = numberRegex.test(password);
  const hasSymbol = symbolRegex.test(password);

  // Count the number of character types that the password contains
  const characterTypesCount = [hasUppercase, hasLowercase, hasNumber, hasSymbol].filter(Boolean).length;

  // Password is valid if it contains at least three of the four character types
  return characterTypesCount >= 3;
}

// Sign Up API
app.post("/users", function (req, res) {
  try {
      const user = req.body;
      const insertQuery = 'INSERT INTO user (name, email, password) VALUES (?, ?, ?)';
      const values = [user.name, user.email, user.password];

      if (validatePassword(user.password)) {
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
                  "request-date": req.get("Date")
                }
            };
            res.status(200).json(responseData);
          }
        });
      } else {
        res.status(401).json({ error: 'Wrong Password Format' });
      }

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
              "request-date": req.get("Date")
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
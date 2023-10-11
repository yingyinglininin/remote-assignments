const express = require('express')
const app = express()
const port = 4000

app.get('/healthcheck', (req, res) => {
    res.send('OK')
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
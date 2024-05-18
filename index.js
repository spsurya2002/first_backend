require('dotenv').config()
const express = require('express')
const path = require('path');
const app = express()
const port = 4000
const jsonResponse={
  "name": "Surya",
  "branch": "CSE"
}
// app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.get('/bio', (req, res) => {
  res.send(jsonResponse);
})
app.get('/lund', (req, res) => {
  res.sendFile(path.join(__dirname,'a.html'));
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
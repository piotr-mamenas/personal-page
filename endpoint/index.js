const express = require('express');

const app = express();

app.get('/api', (req, res) => {
  res.send('Hello');
});

app.listen(6450, () => {
  console.log('Listening on port 6450');
});

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./'));
app.listen(process.env.PORT || 8080);
app.get('/*', function(req, res) {
res.sendFile('./src/index.html');
});
console.log('Build successful!!');
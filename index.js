const express = require('express')
const app = express()
var path = require('path');
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})

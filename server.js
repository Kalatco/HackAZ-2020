/*
 * Call this server to obtain CSV as a string. 
 */

const express = require('express');
const app = express();
const fs = require('fs')

app.use(express.static('public'));

console.log('Server started');
app.get('/',function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send('CSV PARSER');
    var input = fs.readFileSync('test.csv');
    var data = input + '';
    res.send(data);
});

app.listen(3000);


/*
 * Call this server to obtain CSV as a string. 
 */

const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server started listening at 3000'));

const fs = require('fs')

app.use(express.static('public'));

app.get('/', function (req, res) {
    var collection = [];// will contain the total collection of output data
    res.header("Access-Control-Allow-Origin", "*");
    var input = fs.readFileSync('first300Games.csv');
    var data = input + '';
    var rows = data.split('\n').slice(1);

    rows.forEach(elmnt => {
        var row = elmnt.split(',');
        var number = row[0];
        var title = row[1];
        var hours = row[2];
        let game = [number,title,hours]; // make a sub-list for info of each game

        collection.push(game)
    });

    let output = {thisArray : collection}

    console.log(collection);

    res.send(output);
});



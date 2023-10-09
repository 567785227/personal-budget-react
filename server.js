const express = require('express');
const budget = require("./data.json");
const cors = require('cors')
const app = express();
const port = 3001;

app.use(cors());
app.use ('/', express.static('public'));



app.get('/hello', (req, res) => {
res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.json(budget);
    });
    

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);

});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

//Import puppeteer function
const searchGoogle = require('./searchGoogle');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Catches requests made to localhost:3000/search
app.get('/api/search',cors(), async (request, response) => {

    // const data = await searchGoogle('кот')
    // response.send(data);

});
app.post('/api/search', async (req, res) => {
    const dataValue = req.body.post
    console.log(dataValue)
    const data = await searchGoogle(dataValue)
    console.log(data)
    res.send(data);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});


//Initialises the express server on the port 30000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
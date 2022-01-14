const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const userController = require("./controllers/userController");

const PORT = 5000;

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})

app.get('/', (req, res, next) => {
    let {query} = req

    res.json({
        message: 'It is a main API route',
        query
    })
})

app.get('/:id', userController)

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();
const routes = require('./routes');

const PORT = process.env.PORT || 5000;

app.use(cors());

//parsing requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//use routes
app.use('/api', routes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    })
});



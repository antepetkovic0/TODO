const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();
const todoRoutes = require("./controllers/todo");

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/todos", todoRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    })
})


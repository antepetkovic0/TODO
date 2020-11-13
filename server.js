const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./models");
const app = express();
const todoRoutes = require("./controllers/todo");
const userRoutes = require("./controllers/user");

const PORT = process.env.PORT || 3000;

app.use(cors());

//parsing requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/todos", todoRoutes);
app.use("/users", userRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on port  ${PORT}`);
    })
});



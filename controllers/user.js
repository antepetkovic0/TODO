const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");

const User = db.User;

router.get("/all", async (req, res) => {
    const users = await User.findAll();
    res.send(users);
})

router.post("/test", async (req, res) => {
    const { firstname, lastname, username, email } = req.body;

    const newUser = {
        firstname,
        lastname,
        username,
        email
    };

    try {
        const re = await User.create(newUser);
        res.send(re);
    } catch (e) {
        res.send(e);
    }

});

module.exports = router;



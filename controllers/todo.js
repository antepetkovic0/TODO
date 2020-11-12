const express = require("express");
const router = express.Router();
const db = require("../models");

const Todo = db.Todo;

router.get("/", async (req, res) => {
    const todos = await Todo.findAll();
    res.send(todos);
});

router.get("/:id", async (req, res) => {
    const todo = await Todo.findAll({
        where: {
            id: req.params.id
        }
    });
    res.send(todo);
});

router.post("/add", async (req, res) => {
    const newTodo = await Todo.create({
        title: req.body.title,
        completed: req.body.completed,
        description: req.body.description
    });
    res.send(newTodo);
});

router.put("/edit/:id", async (req, res) => {
    await Todo.update({ title: "GITHUB" }, {
        where: {
            id: req.params.id
        }
    });
    res.send("Todo successfully updated.");
});

router.delete("/delete/:id", async (req, res) => {
    await Todo.destroy({
        where: {
            id: req.params.id
        }
    });
    res.send("Todo successfully deleted.");
})

module.exports = router;


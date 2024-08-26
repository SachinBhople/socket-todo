const { getAlltodo, createTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller")

const router = require("express").Router()

router

    .get("/", getAlltodo)
    .post("/add", createTodo)
    .put("/update/:id", updateTodo)
    .delete("/delete/:id", deleteTodo)

module.exports = router
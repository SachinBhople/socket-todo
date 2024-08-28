const { getAlltodo, createTodo, updateTodo, deleteTodo, completeTodo } = require("../controllers/todo.controller")

const router = require("express").Router()

router

    .get("/", getAlltodo)
    .post("/add", createTodo)
    .put("/update/:id", updateTodo)
    .put("/complete/:id", completeTodo)
    .delete("/delete/:id", deleteTodo)

module.exports = router
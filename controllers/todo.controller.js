const asyncHandler = require("express-async-handler")
const todoSchma = require("../model/Todo")
const Todo = require("../model/Todo")
const { io } = require("../socket/socket")

exports.getAlltodo = asyncHandler(async (req, res) => {
    const result = await Todo.find()
    console.log(result);

    res.json({ message: "todo fetch succes", result })
})
exports.createTodo = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    const result = await Todo.find()
    io.emit("todo-create-response", result)
    res.json({ message: "todo cratee succes" })
})
exports.updateTodo = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndUpdate(id, req.body)
    res.json({ message: "todo update succes" })
})
exports.deleteTodo = asyncHandler(async (req, res) => {
    const { id } = req.params
    const result = await Todo.find()
    io.emit("todo-create-response", result)
    await Todo.findByIdAndDelete(id)
    res.json({ message: "todo delete succes" })
})

exports.completeTodo = asyncHandler(async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndUpdate(id, { ...req.body, complete: true })
    res.json({ message: "todo complete succes" })
})
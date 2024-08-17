"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todo = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todo });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todo.push(newTodo);
    return res.status(201).json({ message: "ok bro" });
});
router.put('/todo/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    const todoindex = todo.findIndex((todoitem) => {
        todoitem.id === tid;
    });
    if (todoindex >= 0) {
        todo[todoindex] = { id: todo[todoindex].id, text: req.body.text };
        res.status(201).json({ message: "task done" });
    }
    res.status(404).json({ message: "could not find id " });
});
router.post('/delete/:totoId', (req, res, next) => {
    const idtodelete = req.params.totoId;
    todo.filter(todoitem => todoitem.id != idtodelete);
    res.status(200).json({ message: "deleted" });
});
exports.default = router;

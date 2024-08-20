"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todo = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todo });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todo.push(newTodo);
    return res.status(201).json({ message: "ok bro" });
});
router.put('/todo/:todoId', (req, res, next) => {
    const param = req.params;
    const body = req.body;
    const tid = param.todoId;
    const todoindex = todo.findIndex((todoitem) => {
        todoitem.id === tid;
    });
    if (todoindex >= 0) {
        todo[todoindex] = { id: todo[todoindex].id, text: body.text };
        res.status(201).json({ message: "task done" });
    }
    res.status(404).json({ message: "could not find id " });
});
router.post('/delete/:todoId', (req, res, next) => {
    const body = req.body;
    const param = req.params;
    const idtodelete = param.todoId;
    todo.filter(todoitem => todoitem.id != idtodelete);
    res.status(200).json({ message: "deleted" });
});
exports.default = router;

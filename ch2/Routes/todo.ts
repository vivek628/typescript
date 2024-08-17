import { Router } from "express";
import { Todo } from "../models/todo";
let todo:Todo[]=[]
const router= Router()
 router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todo})
 })
 router.post('/todo',(req,res,next)=>{
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:req.body.text
    }
    todo.push(newTodo)
    return res.status(201).json({message:"ok bro"})
 })
 router.put('/todo/:todoId',(req,res,next)=>{
    const tid=req.params.todoId
    const todoindex=todo.findIndex((todoitem)=>{
        todoitem.id===tid
    })
    if(todoindex>=0)
    {
        todo[todoindex]={ id:todo[todoindex].id,text:req.body.text}
        res.status(201).json({message:"task done"})
    }
    res.status(404).json({message:"could not find id "})
 })
 router.post('/delete/:totoId',(req,res,next)=>{
    const idtodelete=req.params.totoId
    todo.filter(todoitem=>todoitem.id!=idtodelete)
    res.status(200).json({message:"deleted"})

 })
export default router
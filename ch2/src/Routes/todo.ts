import { Router } from "express";
import { Todo } from "../models/todo";
let todo:Todo[]=[]
type RequestParams={todoId:'string'}
type Requestbody={text:'string'}
const router= Router()
 router.get('/',(req,res,next)=>{
    res.status(200).json({todos:todo})
 })
 router.post('/todo',(req,res,next)=>{
   const body=req.body as Requestbody
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:body.text
    }
    todo.push(newTodo)
    return res.status(201).json({message:"ok bro"})
 })
 router.put('/todo/:todoId',(req,res,next)=>{
   const param= req.params as RequestParams
   const body=req.body as Requestbody
    const tid=param.todoId
    const todoindex=todo.findIndex((todoitem)=>{
        todoitem.id===tid
    })
    if(todoindex>=0)
    {
        todo[todoindex]={ id:todo[todoindex].id,text:body.text}
        res.status(201).json({message:"task done"})
    }
    res.status(404).json({message:"could not find id "})
 })
 router.post('/delete/:todoId',(req,res,next)=>{
   const body= req.body as Requestbody
   const param= req.params as RequestParams
    const idtodelete=param.todoId
    todo.filter(todoitem=>todoitem.id!=idtodelete)
    res.status(200).json({message:"deleted"})

 })
export default router
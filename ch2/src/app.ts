
import express from 'express'
import todoroutes from './Routes/todo'
import bodyParser from 'body-parser'
const app= express()
app.use(bodyParser.json())
app.use(todoroutes)
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
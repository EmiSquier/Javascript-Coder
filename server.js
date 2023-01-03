import express from 'express';
import path from 'path';
const app = express()

app.get('/saludo', (req,res)=>{
    console.log(__dirname)
    res.sendFile(path.join(__dirname, 'bienvenida.html'))
})

app.get('/user', (req,res)=>{
    res.send(src="user.js")
})

app.listen(8080,()=>console.log("On line"))
const express = require ('express')
const app = express()

const studentsrouter = require('./students');
const clasesRouter = require('./classes');
const principalsRouter = require('./principals')


// app.get('/students',(req,res)=>{
//     res.send("Un monton de profesores")
// })

// app.get('/classes',(req,res)=>{
//     res.send("Un monton de profesores")
// })

// app.get('/teachers',(req,res)=>{
//     res.send("Un monton de profesores")
// })

app.use('/students, studentsrouter');
app.use('/classes, clasesRouter');
app.use('/principals, principalsRouter ')

app.listen(3000, ()=>{
    console.log()
    res.send
})

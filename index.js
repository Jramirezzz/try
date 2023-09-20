const express = require ('express')
const app = express()

const studentsrouter = require('./students');
const clasesRouter = require('./classes');
const principalsRouter = require('./principals')


app.use('/students', studentsrouter');
app.use('/classes', clasesRouter');
app.use('/principals', principalsRouter ')

app.listen(3000, ()=>{
    console.log()
    res.send("start tmfs")
})

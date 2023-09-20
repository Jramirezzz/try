const express = require('express');
const router = express.Router();

router.get('./', (req,res)=>{
    console.log("Mensaje a estudiantes")
    res.send("Ok")

})

router.get('./:id', (req,res)=>{
    console.log("Mensaje a estudiante de id:" + req.params.id)
    res.send("Te mando al id:"+req.params.id)

})

module.exports = router;

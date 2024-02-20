const express = require('express')
const router = express.Router()
const student = require('../models/student')

router.get('/', async(req,res) => {
    try{
           const students = await student.find()
           res.json(students)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const students = await student.findById(req.params.id)
           res.json(students)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const students = new student({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 =  await students.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const students = await student.findById(req.params.id) 
        students.sub = req.body.sub
        const a1 = await students.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router
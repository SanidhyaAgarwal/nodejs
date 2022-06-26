const express = require("express");
const router = express.Router();
const Marks = require("../models/marks")

router.post("/add",async(req,res)=>{
    try {
        await Marks.create({...req.body})
        res.send("added")
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/get/:id",async(req,res)=>{
    try {
        const marks=await Marks.find({user:req.params.id})
        res.send(marks)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get("/all",async(req,res)=>{
    try {
        const marks=await Marks.find({})
        res.send(marks)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports= router;
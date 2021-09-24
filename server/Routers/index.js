const express=require('express')
const { findById } = require('../models/User')
const router=express.Router()

const User=require('../models/User')

    //get all users
    router.get('/api/get-user',async (req,res)=>{
    try{
        const users=await User.find()
        res.json(users)
    }catch(err){
        res.send("Error"+err)
    } 
    })

    //get user by id
    router.get('/api/get-user/:id',async (req,res)=>{
        const id=req.params.id
        try{
            const user=await User.findById(id)
            res.json(user)
        }catch(err){
            res.send("Error"+err)
        } 
        })

    //Post new User
    router.post('/api/post-user',async (req,res)=>{
        const user=new User({
            name:req.body.name,
            contact:req.body.contact,
            email:req.body.email
        })
        try{
            const newUser=await user.save()
            res.send("post done successfully")
        }catch(err){
            res.send("Error"+err)
        }
    })

    //Update an User
    router.put('/api/update-user/:id',async(req,res)=>{
        const id=req.params.id
        const user=await User.findById(id)
        try{
            user.name=req.body.name,
            user.contact=req.body.contact,
            user.email=req.body.email 
            await user.save()
            res.json(user)
        }catch(err){
            res.send("Error",err)
        }
    })

    //delete an user
    router.delete('/api/delete-user/:id',async (req,res)=>{
        const id=req.params.id
        try{
            await User.findByIdAndRemove(id)
            res.send("deleted Success")
        }catch(err){
            console.log(err)
        }
    })
 



module.exports=router
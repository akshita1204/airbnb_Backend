const express=require('express');
//const app=express(); cant be made as it is already defined so we make router 
const userrouter=express.Router();

userrouter.get("/",(req,res,next)=>
    {
        //console.log(req.url,req.method);
        res.send(`<h1>welocome to airbnb</h1>
            <a href="/host/add-home">Add Home</a>
            `);
        
    });
module.exports=userrouter;




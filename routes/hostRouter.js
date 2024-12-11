const path=require('path');

const express=require('express');
const hostrouter=express.Router();
const rootpath=require("../utils/pathUtils");

hostrouter.get("/host/add-home",(req,res,next)=>
    {
        //console.log(req.url,req.method);
        // res.send(`<h1>welocome to Home Page</h1>
        //     <form action="/add-home" method="POST">
        //     <input type="text" name="hname" placeholder="Enter your house name"/>
        //     <input type="submit"/>
        //     </form>
        //     `);     
        res.sendFile(path.join(rootpath,'views','addHome.html')); 
        
        
    });

 hostrouter.post("/host/add-home",(req,res,next)=>
        {
            console.log("Done ")
            // console.log(req.body);
            // res.send(`<h1>Registered Successfully!</h1>
            //     <a href="/">Go to Home</a>
            //      `);      
           //res.redirect('/'); 
           res.sendFile(path.join(rootpath,'views','homeAdded.html'));
        })

module.exports=hostrouter;
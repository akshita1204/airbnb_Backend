//core module 
const path=require('path');

const express=require('express');
//const app=express(); cant be made as it is already defined so we make router 
const userrouter=express.Router();

//local module
const rootpath=require("../utils/pathUtils");
const homescontroller=require("../controllers/home")
//const {registered}=require('./hostRouter')


        //console.log(req.url,req.method);
    //res.render('home',{registered});
        // res.send(
        //     `<h1>welocome to airbnb</h1>
        //     <a href="/host/add-home">Add Home</a>
        //     `);
        userrouter.get("/",homescontroller.gethomeslist);
        userrouter.get("/bookings",homescontroller.getBookings);
        userrouter.get("/fav-list",homescontroller.getfavlist);
        userrouter.get("/index",homescontroller.getindex);
        
   
module.exports=userrouter;




const path=require('path');

const express=require('express');
const hostrouter=express.Router();
const rootpath=require("../utils/pathUtils");
const hostcontroller=require("../controllers/host")

hostrouter.get("/add-home",hostcontroller.gethome);

 hostrouter.post("/host/add-home",hostcontroller.getposthome);
 hostrouter.get("/homelist",hostcontroller.gethosthome);

exports.hostrouter=hostrouter;
// exports.registered=registered;
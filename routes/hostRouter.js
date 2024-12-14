const path=require('path');

const express=require('express');
const hostrouter=express.Router();
const rootpath=require("../utils/pathUtils");
const homescontroller=require("../controllers/home")

hostrouter.get("/host/add-home",homescontroller.gethome);

 hostrouter.post("/host/add-home",homescontroller.getposthome)

exports.hostrouter=hostrouter;
// exports.registered=registered;
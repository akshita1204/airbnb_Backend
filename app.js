//core module
const path=require('path');

//External module
const express=require('express')
//Local module
const userrouter=require('./routes/userRouter');
const {hostrouter}=require('./routes/hostRouter');
const rootpath=require('./utils/pathUtils');
const errorscontroller=require("./controllers/errors")

const app=express();
app.set('view engine', 'ejs');
app.set('views','views');

app.use((req,res,next)=>
    {
    console.log(req.url,req.method);
    next();
})

//check karlo ki body aayi hai yaa nahi 
app.use(express.urlencoded({extended:true}));
app.use(hostrouter);
app.use(userrouter);

app.use(express.static(path.join(rootpath,'public')));  //for css
//Taken to the userrouter

// userrouter.get("/",(req,res,next)=>
//     {
//         //console.log(req.url,req.method);
//         res.send(`<h1>welocome to airbnb</h1>
//             <a href="/host/add-home">Add Home</a>
//             `);
        
//     });


//Taken to the hostrouter

// app.get("/host/add-home",(req,res,next)=>
//     {
//         //console.log(req.url,req.method);
//         res.send(`<h1>welocome to Home Page</h1>
//             <form action="/host/add-home" method="POST">
//             <input type="text" name="hname" placeholder="Enter your house name"/>
//             <input type="submit"/>
//             </form>
//             `);       
//     });
// app.post("/host/add-home",(req,res,next)=>
//         {
//             console.log(req.body);
//             res.send(`<h1>Registered Successfully!</h1>
//                 <a href="/">Go to Home</a>
//                 `);       
//         })


//For 404 page not found=> if we will not set the status it will show some valid status like 200 but we have to send 404 adn ordering is imp as isse pehle vaale middlewares ko execute hone ka chance mil rha hai 

app.use(errorscontroller.pagenotfound);
//sendFile(path.join(rootpath,'views','404.html'));


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on the ${PORT}`);
});


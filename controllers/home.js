exports.gethome=(req,res,next)=>
    {
        //console.log(req.url,req.method);
        // res.send(`<h1>welocome to Home Page</h1>
        //     <form action="/add-home" method="POST">
        //     <input type="text" name="hname" placeholder="Enter your house name"/>
        //     <input type="submit"/>
        //     </form>
        //     `);     

        //res.sendFile(path.join(rootpath,'views','addHome.html')); 
        res.render('addHome',{Pagetitle:' Welcome to Home Page'})      
    }

const registered=[];  
exports.getposthome=(req,res,next)=>
    {
        console.log("Done for",req.body,req.body.hname);
        // console.log(req.body);
        // res.send(`<h1>Registered Successfully!</h1>
        //     <a href="/">Go to Home</a>
        //      `);      
       //res.redirect('/'); 
       registered.push(req.body);
       
       //res.sendFile(path.join(rootpath,'views','homeAdded.html'));
       res.render('homeAdded',{Pagetitle:' Successfull Added Page'})
    }

exports.gethomeslist=(req, res, next) => {
    console.log(registered);
    res.render('home', {registered:registered,Pagetitle:'Airbnb Home'})
    //res.sendFile(path.join(rootpath, 'views', 'home.html'));
  }

    exports.registered=registered;

    
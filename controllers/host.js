const Home = require("../models/home");
exports.gethome = (req, res, next) => {
    // Rendering the 'addHome' view template
    res.render('host/addHome', { Pagetitle: 'Welcome to Home Page',editing:false });
};

exports.getedithome = (req, res, next) => {
  // Rendering the 'addHome' view template
  const homeid=req.params.homeid;
  const editing=req.query.editing==='true';

  Home.findbyid(homeid,home=>
  {
    if(!home) 
    {
      console.log("Home not found for editing");
      return res.redirect("/host/homelist")
    }
  console.log(homeid,editing,home);
  res.render('host/addHome', { home:home, Pagetitle: 'Edit the page' ,editing:editing})
  }
  )

};


exports.gethosthome = (req, res, next) => {
    Home.fetchAll((registered) =>
        res.render("host/homelist", {
          registered: registered,
          Pagetitle: "Host Homes List",
          //currentPage: "host-homes",
        })
      );
};



exports.getposthome = (req, res, next) => {
    // Get data from form
    const { hname, price, location, rating } = req.body;
    const home = new Home(hname, price, location, rating);

    // // Save home
     home.save();

    // // Render successful page
    res.render('host/homeAdded', { Pagetitle: 'Successfully Added Home' });
    // res.redirect('/homelist');
};



exports.postedithome = (req, res, next) => {
  // Get data from form
  const {id, hname, price, location, rating } = req.body;
  const home = new Home(hname, price, location, rating);
  home.id=id;
  // Save home
  home.save();

  // Render successful page
  res.redirect('/homelist');
};


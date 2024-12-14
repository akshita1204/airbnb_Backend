const Home = require("../models/home");
exports.gethome = (req, res, next) => {
    // Rendering the 'addHome' view template
    res.render('host/addHome', { Pagetitle: 'Welcome to Home Page' });
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

    // Save home
    home.save();

    // Render successful page
    res.render('host/homeAdded', { Pagetitle: 'Successfully Added Home' });
};


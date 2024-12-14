const Home = require("../models/home");

exports.gethome = (req, res, next) => {
    // Rendering the 'addHome' view template
    res.render('addHome', { Pagetitle: 'Welcome to Home Page' });
};

exports.getposthome = (req, res, next) => {
    // Get data from form
    const { hname, price, location, rating } = req.body;
    const home = new Home(hname, price, location, rating);

    // Save home
    home.save();

    // Render successful page
    res.render('homeAdded', { Pagetitle: 'Successfully Added Home' });
};

exports.gethomeslist = (req, res, next) => {
    // Fetch all registered homes and render home view with the fetched data
    Home.fetchAll((registered) => {
        console.log("Registered Homes:", registered);  // Log data to debug
        res.render('home', { registered: registered, Pagetitle: 'Airbnb Homes' });
    });
};

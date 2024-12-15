const Home = require("../models/home");



exports.gethomeslist = (req, res, next) => {
    // Fetch all registered homes and render home view with the fetched data
    Home.fetchAll((registered) => {
        console.log("Registered Homes:", registered);  // Log data to debug
        res.render('store/home', { registered: registered, Pagetitle: 'Airbnb Homes' });
    });
};

exports.getBookings = (req, res, next) => {
    // Fetch all registered homes and render home view with the fetched data

    Home.fetchAll((registered) => {
        //console.log("Registered Homes:", registered);  // Log data to debug
        res.render('store/bookings', { Pagetitle: 'All Bookings' });
    });
       // res.render('store/bookings', { registered: registered, Pagetitle: 'Bookings' });

};

exports.getfavlist = (req, res, next) => {
    // Fetch all registered homes and render home view with the fetched data

    Home.fetchAll((registered) => {
        res.render('store/fav-list', { registered: registered, Pagetitle: 'My Favorites' });
    });
       // res.render('store/bookings', { registered: registered, Pagetitle: 'Bookings' });

};


exports.postaddtofav= (req, res, next) => {
    // Fetch all registered homes and render home view with the fetched data

    console.log("add to fav" ,req.body.id);
    res.redirect("/fav-list")
};


exports.getindex = (req, res, next) => {
    // Fetch all registered homes and render home view with the fetched data
    Home.fetchAll((registered) => {
        //console.log("Registered Homes:", registered);  // Log data to debug
        res.render('store/index', {registered: registered,  Pagetitle: 'Airbnb Homes' });
    });
};

exports.getdetails= (req, res, next) => {
 const homeid=req.params.homeid;
 Home.findbyid(homeid,home=>
 {
    if(!home)
    {
        console.log("Home not found");
        res.redirect("/");
    }
    console.log(homeid)
    console.log(home);
    res.render('store/homedetail', {  home:home,Pagetitle: 'Home Detail' });
 }
 )

};
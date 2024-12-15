const Favorites = require("../models/favmodel");
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
    Favorites.getfav(favorites => {
        console.log("Favorite Home IDs:", favorites); // Debug: check favorite IDs being fetched
        Home.fetchAll(registered => {
            console.log("Registered Homes:", registered); // Debug: check registered homes
            const favhome = registered.filter(home => favorites.includes(String(home.id)));
            console.log("Filtered Favorite Homes:", favhome); // Debug: filtered favorites
            
            // Ensure favhome is not empty and is passed to the view
            if (favhome.length === 0) {
                console.log("No favorite homes found for the user.");
            }
            
            res.render('store/fav-list', { favhome: favhome, Pagetitle: 'My Favorites' });
        });
    });
};


// exports.postaddtofav= (req, res, next) => {
//     // Fetch all registered homes and render home view with the fetched data

//     console.log("add to fav" ,req.body.id);
//     Favorites.addtofav(req.body.id,error=>
//     {
//         if(error)
//         {
//             console.log("Error while marking fav")
//         }
//         res.redirect()
//     }
//     )
//     res.redirect("store/fav-list")
// };
exports.postaddtofav = (req, res, next) => {
    const homeId = req.body.id; // Hidden field se ID ko lena

    // Add home ID to favorites
    Favorites.addtofav(homeId, (error) => {
        if (error) {
            console.log("Error while marking favorite:", error);
            return res.redirect("/fav-list"); // Error ke saath fav-list par redirect karein
        }

        console.log("Home added to favorites successfully!");
        res.redirect("/fav-list"); // Success ke baad fav-list page par redirect karein
    });
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
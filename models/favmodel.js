const fs = require('fs');
const path = require('path');
const rootdir = require('../utils/pathUtils');
const favpath = path.join(rootdir, "data", "favourite.json");

module.exports = class Favorites {

    static addtofav(homeid, callback) {
        Favorites.getfav(fav => {
            // Check if homeid already exists in favorites
            if (fav.includes(homeid)) {
                return callback("Home is already marked"); // If exists, return error message
            } 
            
            // Otherwise, add the new homeid
            fav.push(homeid);
            fs.writeFile(favpath, JSON.stringify(fav), (err) => {
                if (err) {
                    console.error("Error writing to favourite.json:", err);
                    return callback("Failed to update favorites");
                }
                callback(null); // Success case, no errors
            });
        });
    }

    static getfav(callback) {
        fs.readFile(favpath, (error, data) => {
            if (error) {
                if (error.code === 'ENOENT') {
                    // If file does not exist, return an empty array
                    console.warn("favourite.json not found. Initializing to an empty array.");
                    return callback([]);
                } else {
                    console.error("Error reading favourite.json:", error);
                    return callback([]); // Default to empty array in other errors
                }
            }
            try {
                // Try parsing the file content as JSON
                const favs = JSON.parse(data);
                callback(favs); // Pass parsed data
            } catch (parseError) {
                console.error("Invalid JSON in favourite.json. Resetting to an empty array.");
                callback([]); // Return empty array on parse error
            }
        });
    }
};

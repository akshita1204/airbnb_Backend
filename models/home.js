const fs = require('fs');
const path = require('path');
const rootdir = require('../utils/pathUtils');
let registered = [];

module.exports = class Home {
    constructor(hname, price, location, rating) {
        this.hname = hname;
        this.price = price;
        this.location = location;
        this.rating = rating;
    }

    save() {
        Home.fetchAll(registered => {
            // Add the new home to the registered homes list
            registered.push(this);

            const homepath = path.join(rootdir, 'data', 'homes.json');
            fs.writeFile(homepath, JSON.stringify(registered), (error) => {
                if (error) {
                    console.error("Error writing file:", error);
                }
            });
        });
    }

    static fetchAll(callback) {
        const homepath = path.join(rootdir, 'data', 'homes.json');
        fs.readFile(homepath, (error, data) => {
            if (!error) {
                // Parse data from homes.json and send it to the callback
                callback(JSON.parse(data));
            } else {
                // In case of error, pass an empty array
                callback([]);
            }
        });
    }
};

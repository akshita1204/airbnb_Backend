const fs = require('fs');
const path = require('path');
const rootdir = require('../utils/pathUtils');
let registered = [];

module.exports = class Home {
    constructor(hname, price, location, rating,id=null ){
        this.id=id;
        this.hname = hname;
        this.price = price;
        this.location = location;
        this.rating = rating;
    }

    save() {
        
        Home.fetchAll(registered => {
            if(this.id) //is exists karti hai => edit home case
            {
              registered=registered.map(home=>
              { 
                if(home.id===this.id )
                {
                  return this;
                }
                else
                {
                 return home;
                }
              }
              )
            }
            else //add home case 
            {
                this.id=Math.random().toString();
                 // Add the new home to the registered homes list
                registered.push(this);
            }
            const homepath = path.join(rootdir, 'data', 'homes.json');
            fs.writeFile(homepath, JSON.stringify(registered), (error) => {
                if (error) {
                    console.error("Error writing file:", error)
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


    static findbyid(homeid,callback)
    {
        const homepath = path.join(rootdir, 'data', 'homes.json');
        this.fetchAll(homes=>
        {
            const homefound=homes.find((home)=>home.id===homeid);
            callback(homefound);
        }
        )
    }
};

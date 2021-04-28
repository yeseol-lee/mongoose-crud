const db = require('../models/index.js');


const create = (req, res) => {
    const username = req.body.username;
    const age = req.body.age;
    const email = req.body.email;

    const user = new db.User({
        username: username,
        age: age,
        email: email
    });
    
    db.User.save()
        .then(() => {
        console.log(user);
        })
        .catch((err) => {
        console.log("Error : " + err);
        });
      
      
    res.send("OK");
    
}

const read = (req, res) => {
    const username = req.params.username;

    db.User
        .find({username: username})
        .then((user) => res.send(user))
        .catch((err) => console.error(err));
    
}

const update = (req, res) => {
    res.send("Update");
}

const delete1 = (req, res) => {
    res.send("Delete");
}

module.exports = {create, read, update, delete1}; 
const db = require('../models/index.js');


const create = (req, res) => {
    console.log("create2");

    const username = req.body.username;
    const age = req.body.age;
    const email = req.body.email;

    const user = new db.User({
        username: username,
        age: age,
        email: email
    });
    
    user.save()
        .then(() => {
        console.log(user);
        })
        .catch((err) => {
        console.log("Error : " + err);
        });
      
      
    res.send("OK");
    
}

const read = (req, res) => {
    console.log("read2");

    const username = req.params.username;

    db.User
        .findOne({_id: username})
        .then((user) => {
            if (!user) {
                res.status(404).send('Not Found');
            } else {
                res.send(user);
            }
            
        })
        .catch((err) => console.error(err));
    
}

const update = (req, res) => {
    console.log("update");
    res.send("Update");
}

const delete1 = (req, res) => {
    console.log("delete");
    res.send("Delete");
}

module.exports = {create, read, update, delete1}; 
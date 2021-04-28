const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/user', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  age: Number,
  email: String
});

const User = mongoose.model('User', userSchema);




module.exports = { User };


const mongoose = require('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://leonardofp:310599@cluster0.w8znxn2.mongodb.net/test');
}

module.exports = startDB;
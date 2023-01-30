const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set('strictQuery', false);

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rh6ekch.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
    try {
        await mongoose.connect(uri);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };
const express = require('express');
const mongoose = require("mongoose")
require('dotenv/config');
const commentRoute = require("./Route/Comment_Route")

const app =express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("HOME")
})
app.use('/api/commentdata',commentRoute);

app.listen(process.env.PORT);

async function dbconnection(){
    try {
        const res = await mongoose.connect(process.env.CONNECT);
        const data = await res.default;
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
dbconnection();
import express from 'express'
import mongoose from 'mongoose';
import serviceRoute from "./routes/services.js";
import bodyParser from 'body-parser';

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

try {
    await mongoose.connect('mongodb://127.0.0.1:27017/antbyte')
    app.listen(8080, () => {
        console.log('Server is running on http://localhost:8080')
    })
    console.log('Successfully connected with database')
} catch (e) {
    console.log("failed to connect")
}

app.get("/", (req, res)=> {
    res.send("Health check okay!!")
})

app.use("/services", serviceRoute);
import express from "express";
import{PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";
import booksRoute from "./routes/bookRoutes.js";

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('bem vindo a requisiçao GET')
});

app.use('/books', booksRoute)

mongoose
    .connect(mongoDBURL)
    .then(()=> {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        })
    })
    .catch((err) =>{
        console.log(err);
    })
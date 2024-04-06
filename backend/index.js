import express from "express";
import{PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send('bem vindo a requisiçao GET')
});

// rota para se guardar valores de um livro

app.post('/books', async (req, res) => {
   try {
    if(
        !req.body.title||
        !req.body.author ||
        !req.body.publishYear
    ){
        return res.status(400).send({
            message: "Send all required fields:title,author, publishYear",
        })
    }
    const newBook = {
        title: request.body.title,
        author: request.body.author,
        publishYear: request.body.publishYear,
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
    
   } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message});
   }
});

// rota para se alterar um valor de um livro

app.put('/put', (req, res) => {
    console.log(req);
    return res.status(234).send('bem vindo a requisiçao GET')
});

// rota para deletar o valor de um livro

app.delete('/delete', (req, res) => {
    console.log(req);
    return res.status(234).send('bem vindo a requisiçao GET')
});


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
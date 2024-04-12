import express from 'express';
import { Book } from "../models/bookModels.js";


const router = express.Router();

router.post('/', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: "Send all required fields: title, author, publishYear",
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };

        const book = await Book.create(newBook);

        return res.status(201).send(book);

    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).send(books);

    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
});

// rota para se buscar um livro a partir do id

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const book = await Book.findById(id, req.body)
        return res.status(200).send(book);

    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: "Send all required fields:title,author, publishYear",
            })
        }
        const { id } = req.params;

        const result = await Book.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'book not found' });
        }

        return res.status(200).send({ message: 'book updated succesfully' })

    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
})

// rota para deletar o valor de um livro

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'book not found' });
        }

        return res.status(200).send({ message: 'book delete succesfully' })

    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
});

export default router;
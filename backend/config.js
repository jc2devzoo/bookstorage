import "dotenv/config"

export const PORT = 3000;


export const mongoDBURL = `mongodb+srv://${process.env.USER}:${process.env.SENHA}@cluster0.qztckn7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
import express from "express";
import * as dotenv from "dotenv";
import Usuarios from "./src/controllers/Usuarios.js"
import Todo from "./src/controllers/Todo.js"
import Tips from "./src/controllers/Tips.js"

dotenv.config();

const port = process.env.PORT || 3000
const app = express();

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost${port}`);
});


app.use(express.json());

Todo.rotas(app)
Usuarios.rotas(app)
Tips.rotas(app)
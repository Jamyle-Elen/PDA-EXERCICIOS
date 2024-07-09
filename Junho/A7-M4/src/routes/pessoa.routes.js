import { Router } from "express";
import { buscarTodos, criandoPessoa } from "../controllers/Pessoa.controller";

const pessoaRouter = Router();

pessoaRouter.get("/", (req, res) => {
    let result = buscarTodos();
    res.json({result})
});

pessoaRouter.post("/", (req, res) => {
    cosnt buscarPorNome = { nome, idade, cpf } req.body;
    criandoPessoa(nome, idade, cpf)
})

export { pessoaRouter }
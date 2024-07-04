// commonjs
// const express = require('express')

// module
// importando express para dentro do arquivo
import express from "express";

// armazenando as funcoes de dentro do framework
// dentro da variavel app
const app = express();

// uma variavel que esta armazenando um numero
const port = 3000;

// estamos utilizando a funcao get dentro da variavel app
// estamos definindo uma rota
// uma funcao de busca app.get()
// 2 parametros
// primeiro parametro URL 
// segundo parametro é um callback EXECUCAO
app.get('/rotaPrincipal', (request, response) => {
  response.send('Hello World!')
})

app.get('/rotaPrincipal1', (request, response) => {
    response
    .status(201)
    .json({message: "Hello World!"})
})

//  (req, res) => 
// req -> request | requisicao
// res -> response | retorno da nossa rota
   

app.put('/editando', (req, res) => {

})


// acessar o app e utilizar a funcao listen
// para adicionar um servidor ouvinte no ambiente local
// 2 parametros
// primeiro parametro o numero da porta
// segundo parametro um callback
app.listen(port, () => {
  //console.log(`Example app listening on port ${port}`)
})

// https://www.postman.com/jp/downloads/

// http://www.postman.com/jp/downloads/
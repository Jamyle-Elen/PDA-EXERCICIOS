import Pessoa from "../models/Pessoa.model"
// A REPONSABILIDADE DO CONTROLLER É GERENCIAR O OBJETO
//  - Criar um objeto
// - Ler uma lista de objetos
// - Editar um objeto
//  - Deletar um objeto
//  CRUD

// representando nosso banco de dado

let listaPessoas = [];

export const criandoPessoa = (nome, idade, cpf) => {
    let pessoa = new Pessoa(nome, idade, cpf)
    listaPessoas.push(pessoa)
}

export const buscarTodos = () => {
    return listaPessoas
}

export const buscarPorNome = () => {
    return listaPessoas.find(pessoa => pessoa.nome === 0)
}
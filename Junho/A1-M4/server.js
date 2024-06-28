// require ou import = importando uma biblioteca
// rl = sigla de readline

// const readline = require('node:readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question('Digite sua idade: ', age => {
//   age = parseInt(age, 10);
//   if (isNaN(age)) {
//     console.log('Digite um número válido.');
//   } else {
//     if (age >= 18) {
//       console.log('Você pode dirigir.');
//     } else {
//       console.log('Você não pode dirigir.');
//     }
//   }
//   rl.close();
// });

// GET(SELECT) -> Pega dados
// POST(INSETY INTO) ->Insete dados no banco de dados
// PUT(UPDATE) -> Editar varios os dados
// PACTH(UPDATE) -> Edita APENAS UM UNICO DADO
// DELETE(DELETE) -> Deleta um registro no banco de dados

// frontend
// fetch(url, {
//     method: "",
//     body: {"nome": "jamyle"}
// })

// fetch(url, {
//     method: "",
//     body: JSON.stringify({nome: "jamyle"})
//  })

// Promessa(Promise) = É o que é esperado de retorno
// Quando tiver utilizando uma aplicação externa (quando tiver se conectando com algo)
// Pendente, resolvida ou rejeitada (3 status)

// async  and await

// var number1 = 4;
// var number2 = 7;

// function sum() {
//     return 4 + 3;
// }

// var newPromise = new Promise((resolve, reject) => {
//     if (number1 > number2) {
//         resolve(`${number1} é maior que ${number2}`);
//     } else {
//         reject(`${number1} não é maior que ${number2}`);
//     }
// });


// 1. Criar uma promise
// 2. Funcionalidade da promise e definir se vai enviar os dados ou nao (estrutura que trabalhe com binariedade de resultados)
// 3. A condicao para enviar os dados quando tiver 2+ dados
// 4. Caso tenha menos que 2 dados enviar mensagem "Estamos esperamos mais quantidades de dados"

const Voyager = {
    nome: "Voyager",
    lancamento: "1977",
    objetivo: "Estudar os planetas exteriores do Sistema Solar",
    status: "Em operação",
    dados: ["Imagens de Júpiter", "Amostras de poeira interestelar", "Dados de radiação cósmica"]
  };
  
  
  const Curiosity = {
    nome: "Curiosity",
    lancamento: "2011",
    objetivo: "Investigar a habitabilidade de Marte",
    status: "Em operação",
    dados: ["Amostras de solo marciano", "Imagens panorâmicas de Marte", "Dados meteorológicos"]
  };
  const Perseverance = {
    nome: "Perseverance",
    lancamento: "2020",
    objetivo: "Procurar sinais de vida microbiana em Marte",
    status: "Em operação",
    dados: ["Amostras de rochas"]
  };
  
  const Hubble = {
    nome: "Hubble",
    lancamento: "1990",
    objetivo: "Observar os planetas e galáxias mais distantes já vistos",
    status: "Em operação",
    dados: ["Dados sobre a expansão do universo"]
  };
  
  const Juno = {
    nome: "Juno",
    lancamento: "2011",
    objetivo: "Estudar Júpiter em detalhes nunca antes vistos",
    status: "Em operação",
    dados: ["Imagens de Júpiter", "Dados sobre o campo magnético de Júpiter", "Informações sobre a atmosfera de Júpiter"]
  };
  
  
  function verifyDataQuantity(n1) {
    return new Promise((resolve,reject)=>{
  if (n1.dados.length >= 2){      
    resolve(n1.dados )  
  
  }else{
    reject("Estamos esperando mais quantidade de dados")
  }
    })
  }
  
  const verifyShipment_Curiosity = verifyDataQuantity(Juno)
    .then((message) => console.log(message))
    .catch((message) => console.log(message));
  
    verifyShipment_Curiosity 

    const newProbe
function insertProbe(...probe) {
    return new Promise((resolve,))
}

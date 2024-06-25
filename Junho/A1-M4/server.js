// require ou import = importando uma biblioteca
// rl = sigla de readline

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite sua idade: ', age => {
  age = parseInt(age, 10);
  if (isNaN(age)) {
    console.log('Digite um número válido.');
  } else {
    if (age >= 18) {
      console.log('Você pode dirigir.');
    } else {
      console.log('Você não pode dirigir.');
    }
  }
  rl.close();
});

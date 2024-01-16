function verificarIdade(idade) {
    if (idade >= 18) {
      console.log('Tens idade suficiente para tirar carteira!');
    } else {
      console.log('Não tens idade suficiente para tirar carteira');
    }
  }
  
  verificarIdade(13);
  verificarIdade(25);
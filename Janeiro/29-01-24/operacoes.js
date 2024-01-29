function soma(a, b) {
    return a + b;
  }
  
  function subtracao(a, b) {
    return a - b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }
  
  function divisao(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Não é possível dividir por zero.";
    }
  }
  
  console.log(soma(5, 3));
  console.log(subtracao(7, 2));
  console.log(multiplicacao(4, 6));
  console.log(divisao(8, 2));
  console.log(divisao(10, 0));
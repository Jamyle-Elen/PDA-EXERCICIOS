function dividir(a, b) {
    if (b !== 0) {
        document.write("Resultado:", a / b);
    } else {
        document.write("Não é possivel dividir por 0")
    }
}

let a = parseInt(prompt("Digite o primeiro valor:"));
let b = parseInt(prompt("Digite o segundo valor:"));

dividir(a, b);
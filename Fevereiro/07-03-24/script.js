const retornarMsg = () => {
    const mensage = "Hello World!";

    const objeto = { mensage };

    const jsonString = JSON.stringify(objeto);

    const mensagemUpper = mensage.toUpperCase();

    return {
        objeto,
        jsonString,
        mensagemUpper
    };
};
const resultados = retornarMsg();
console.log(resultados.objeto);
console.log(resultados.jsonString);
console.log(resultados.mensagemUpper);
const fala1 = "Não sou eu!!";
const fala2 = "Eu tentei te ajudar desde o início!!";
const fala3 = "Já pensou que o monstro pode ser controlado?";

function contarLetras(fala) {
  const falaSemEspacos = fala.replace(/\s/g, '');
  return falaSemEspacos.length;
}

const letrasFala1 = contarLetras(fala1);
const letrasFala2 = contarLetras(fala2);
const letrasFala3 = contarLetras(fala3);

let numeroSuspeito;

if (letrasFala1 > letrasFala2 && letrasFala1 > letrasFala3) {
  numeroSuspeito = 1;
} else if (letrasFala2 > letrasFala1 && letrasFala2 > letrasFala3) {
  numeroSuspeito = 2;
} else {
  numeroSuspeito = 3;
}

console.log(`O suspeito com a maior quantidade de letras é o número ${numeroSuspeito}.`);

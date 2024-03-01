class Animais {
  constructor(name, animal, race, age) {
    this.name = name;
    this.animal = animal;
    this.race = race;
    this.age = age;
  }
}

function coletaDadosPet() {
  const name = prompt("Digite o nome do pet:");
  const animal = prompt("Digite o tipo do animal:");
  const race = prompt("Digite a raça do pet:");
  const age = prompt("Digite a idade do pet:");

  return {
    name,
    animal,
    race,
    age,
  };
}

function exibirAnimais(name, animal, race, age) {
  const pet = new Animais(name, animal, race, age);
  console.log(`name: ${pet.name}`);
  console.log(`animal: ${pet.animal}`);
  console.log(`race: ${pet.race}`);
  console.log(`age: ${pet.age}`);
}

const { name, animal, race, age } = coletaDadosPet();

exibirAnimais(name, animal, race, age);

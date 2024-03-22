class Animais {
    constructor(nome, idade, raca, pelagem, ccf) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
        this.pelagem = pelagem;
        this.ccf = ccf;
    }

    get nome(){
        return this._nome;
    }

    set nome(novoNome){
        this._nome = novoNome;
    }

    get idade(){
        return this._idade;
    }

    set idade(novaIdade){
        this._idade = novaIdade;
    }

    get raca(){
        return this._raca;
    }

    set raca(novaRaca){
        this._raca = novaRaca;
    }

    get pelagem(){
        return this._pelagem;
    }

    set pelagem(novaPelagem){
        this._pelagem = novaPelagem;
    }

    get ccf(){
        return this._ccf;
    }

    set ccf(novoCcf){
        this._ccf = novoCcf;
    }
}

const chokito = new Animais('Chokito', 5, 'Vira-lata', 'Curta', 283940);

console.log(chokito);
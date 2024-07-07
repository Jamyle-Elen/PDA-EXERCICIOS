// let name = 'Dan'
// let promessa = new Promise((resolve, reject) => {
//     if(name === 'Dan'){
//         resolve(console.log("É"))
//     }else {
//         reject(console.log("Não é"))
//     }
// })

// promessa
// intelCode completions

// async/await

async function getCep() {
    await fetch('https://viacep.com.br/ws/01001000/json/')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(erro => console.error(erro))
}


async function getCep1() {
    const result = await(await fetch('https://viacep.com.br/ws/01001000/json/')).json()
    console.log(result)
}

// async --> definindo que uma funcao terá dados assincronos
// await --> estamos definindo que a seguir virá o dado a ser aguardado
// Express --> É um framework que nos ajuda a criar uma API e subir um servidor local
// no nosso pc para testarmos ela em um ambiente de teste
// bea
export async function getCep2() {
    const result = await(await fetch('https://viacep.com.br/ws/01001000/json/')).json()
}
// bea
function getCep3() {
    fetch("url")
    .then(res => res.json())
    .then(data => console.log(data));
}



getCep();
getCep1();
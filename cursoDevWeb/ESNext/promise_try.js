const { rejects } = require("assert");

function funcionarOuNao(valor, chanceDeErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceDeErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('teste...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`)) //tratar erro
    .then(() => console.log('Fim!'))
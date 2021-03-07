// ES8 Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj)) //chave
console.log(Object.values(obj)) // valor
console.log(Object.entries(obj)) // array com chave: valor

// Melhoria na notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Oi haha'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'au au!'
    }
}
console.log(new Cachorro().falar())
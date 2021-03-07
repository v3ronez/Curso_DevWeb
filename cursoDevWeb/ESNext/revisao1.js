// Destructuring
const [l, e, ...tras] = "cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3] // espaço vazio pula um elemento
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)
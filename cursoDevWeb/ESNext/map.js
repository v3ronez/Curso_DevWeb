const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('Angula', {framework: true})

console.log(tecnologias.get('react'))
console.log(tecnologias.get('Angula').framework)

const chavesVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero']

])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.size)
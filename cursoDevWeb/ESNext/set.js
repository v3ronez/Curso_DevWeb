// não aceita repetição, não é indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo')
times.add('Palmeiras')
times.add('flamengo').add('santos')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('flamengo')
console.log(times)

const nomes = ['raquel', 'lucas', 'bianca', 'bia']
const nomesSet = new Set(nomes)
console.log(nomesSet)
for (let letra of 'cod3r') {
    console.log(letra)
}

const assuntosEcma = ['map', 'set', 'promise']

for ( let i in assuntosEcma) { //apenas o numero do index
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['map',{ abordado: true}],
    ['set', { abordado: true}],
    ['promise', { abordado: false}]
])

for(let assunto of assuntosMap) {
    console.log(assunto)
}

for(let assunto of assuntosMap.keys()) {
    console.log(assunto)
}

for(let valor of assuntosMap.values()) {
    console.log(valor)
}
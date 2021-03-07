// operador ... rest(juntar), spred(espalhar)
// usar rest como parametro para funcao

// usar spread com objeto 
const funcionarios = { nome: 'Maria', salario: 2341.32 }
const clone = { ativo: true, ...funcionarios }
console.log(clone)

//usar spread com array
const grupoA = ['joao', 'pedro', 'paçoca']
const grupoTotal = ['maria', ...grupoA ]
console.log(grupoTotal)
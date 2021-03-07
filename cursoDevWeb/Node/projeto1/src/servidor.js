const porta = 3003

const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => { // se nao usar o Next é melhor nao colocar
    res.send(bancoDeDados.getProdutos()) // Converter pra JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.SalvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servidor escutando na porta ${porta}.`)
})

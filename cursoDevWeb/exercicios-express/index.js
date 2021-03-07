const express = require ('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(saudacao('Henrique'))

app.use('/opa',(req, res, next) => {
    console.log('Antes...')
    next()
})

app.get('/cliente/relatorio', (req, res) => {
    res.send(`Cliente relatório: Completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) =>{
    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })
   
    // req.on('end', function() {
    //     // res.json(JSON.parse(corpo))
    //     res.send(corpo)
    // })
    res.send(req.body)
    res.send(JSON.stringify(req.body))
})

app.get('/cliente/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`)
})



app.get('/opa',(req, res, next) => {
    // res.send('Estou bem')
    
    // res.json({
    //     name: 'Ipad 32gb',
    //     price: 1899.00,
    //     discount: 0.12
    // })
    console.log('Durante...')
    res.json([
        {id: 7, nome: 'Ana', position: 1 },
        {id: 32, nome: 'Bia', position: 2 },
        {id: 23, nome: 'Henri', position: 3 },
        {id: 3, nome: 'Bianca', position: 4 }
    ])
    next()
})
app.use('/opa',(req, res,) => {
    console.log('Depois...')
    
})

app.listen(3000, () => {
    console.log('Backend executando...')
})
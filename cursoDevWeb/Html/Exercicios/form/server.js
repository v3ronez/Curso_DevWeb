const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
    //get  .get usa req.query
app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    // console.log(req.query)
    resp.send('<h1>Parabéns. Usuário Incluido!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!!</h1>')
})
app.listen(3003)
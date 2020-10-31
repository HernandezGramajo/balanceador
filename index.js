const express = require('express')
var body_parser = require('body-parser');


const app = express()
const port = 3000
app.use(body_parser.json({ limit: '5mb', extended: true }));


app.get('/', (req, res) => {
  res.send('Balanceador!')
})
app.post('/login', (req, res) => {
    console.log(req.body)
    var user = req.body.user ;
    var password = req.body.password ;
    res.send('Login '+user+"   "+password+ " $")
  })

  app.post('/registro', (req, res) => {
    var datos = req.body.datos || '';
    res.send('Registro ' +datos)
  })

  app.get('/server', (req, res) => {
    res.send('Servidor')
  })

  app.get('/funcion', (req, res) => {
    res.send('Funcion')
  })

  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
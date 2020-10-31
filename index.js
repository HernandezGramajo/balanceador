const express = require('express')
var body_parser = require('body-parser');
const https = require('https');

const app = express()
const fetch = require('node-fetch');
const { dir } = require('console');
const port = 3000
app.use(body_parser.json({ limit: '5mb', extended: true }));

var direccionamiento = 1

var maquinalocal= "1493ba5945eb.ngrok.io";
var maquinanube= "google";

app.get('/', (req, res) => {
  res.send('Balanceador!')
})
app.post('/login', async (req, res) => {

    if (direccionamiento==1){
        try {
            const response = await fetch("http://"+maquinalocal+"/login", {
                method: 'post',
                body: JSON.stringify(req.body),
                headers: {'Content-Type': 'application/json'}
            });
            const body = await response.json();
            direccionamiento=0
            res.send(body)
        } catch (error) {
            

            try {
                const response = await fetch("http://"+maquinanube+"/login", {
                    method: 'post',
                    body: JSON.stringify(req.body),
                    headers: {'Content-Type': 'application/json'}
                });
                const body = await response.json();
                direccionamiento=1
                res.send(body)

                
            } catch (error) {
                res.send("No hay ningun servidor disponible")
            }
        }

        

        
    }else{
        try {
            const response = await fetch("http://"+maquinanube+"/login", {
                method: 'post',
                body: JSON.stringify(req.body),
                headers: {'Content-Type': 'application/json'}
            });
            const body = await response.json();
            direccionamiento=0
            res.send(body)
        } catch (error) {
            
            try {
                const response = await fetch("http://"+maquinalocal+"/login", {
                    method: 'post',
                    body: JSON.stringify(req.body),
                    headers: {'Content-Type': 'application/json'}
                });
                const body = await response.json();
                direccionamiento=1
                res.send(body)

                
            } catch (error) {
                res.send("No hay ningun servidor disponible")
            }
        }

    }
  })




  app.post('/registro', async (req, res) => {
    if (direccionamiento==1){
        try {
            const response = await fetch("http://"+maquinalocal+"/registro", {
                method: 'post',
                body: JSON.stringify(req.body),
                headers: {'Content-Type': 'application/json'}
            });
            const body = await response.json();
            direccionamiento=0
            res.send(body)
        } catch (error) {

            try {
                const response = await fetch("http://"+maquinanube+"/registro", {
                    method: 'post',
                    body: JSON.stringify(req.body),
                    headers: {'Content-Type': 'application/json'}
                });
                const body = await response.json();
                direccionamiento=1
                res.send(body)

                
            } catch (error) {
                res.send("No hay ningun servidor disponible")
            }
        }

        

        
    }else{
        try {
            const response = await fetch("http://"+maquinanube+"/registro", {
                method: 'post',
                body: JSON.stringify(req.body),
                headers: {'Content-Type': 'application/json'}
            });
            const body = await response.json();
            direccionamiento=0
            res.send(body)
        } catch (error) {
        
            try {
                const response = await fetch("http://"+maquinalocal+"/registro", {
                    method: 'post',
                    body: JSON.stringify(req.body),
                    headers: {'Content-Type': 'application/json'}
                });
                const body = await response.json();
                direccionamiento=1
                res.send(body)

                
            } catch (error) {
                res.send("No hay ningun servidor disponible")
            }
        }

    }
  })

  app.get('/server', async (req, res) => {
    if (direccionamiento==1){
        try {
            const response = await fetch("http://"+maquinalocal+"/server");
            const body = await response.json();
            direccionamiento=0
            res.send(body)
        } catch (error) {

            try {
                const response = await fetch("http://"+maquinanube+"/server");
                const body = await response.json();
                direccionamiento=1
                res.send(body)

                
            } catch (error) {
                res.send("No hay ningun servidor disponible")
            }
        }

        

        
    }else{
        try {
            const response = await fetch("http://"+maquinanube+"/server");
            const body = await response.json();
            direccionamiento=0
            res.send(body)
        } catch (error) {
        
            try {
                const response = await fetch("http://"+maquinalocal+"/server");
                const body = await response.json();
                direccionamiento=1
                res.send(body)

                
            } catch (error) {
                res.send("No hay ningun servidor disponible")
            }
        }

    }
  })


  app.get('/funcion', async (req, res) => {

    if (direccionamiento==1){
        try {
            const response = await fetch("http://"+maquinalocal+"/funcion");
            const body = await response.json();
            direccionamiento=0
            res.send(body)
        } catch (error) {

            try {
                const response = await fetch("http://"+maquinanube+"/funcion");
                const body = await response.json();
                direccionamiento=1
                res.send(body)

                
            } catch (error) {
                res.send("No hay ningun servidor disponible")
            }
        }

        

        
    }else{
        try {
            const response = await fetch("http://"+maquinanube+"/funcion");
            const body = await response.json();
            direccionamiento=0
            res.send(body)
        } catch (error) {
        
            try {
                const response = await fetch("http://"+maquinalocal+"/funcion");
                const body = await response.json();
                direccionamiento=1
                res.send(body)

                
            } catch (error) {
                res.send("No hay ningun servidor disponible")
            }
        }

    }
     
  })

  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
import express from "express"
const app = express()
const port = 3000 

app.get('/pessoa1',(req,res) =>{
    const pessoa1 = {
        nome: "Sirlene",
        email: "sirlene@teste.com",
        idade: 26,
        hobbies: ["hobbie 1"]
    }
    const pessoa1Json = JSON.stringify(pessoa1)
    res.setHeader("Content-Type","application/json")
    res.send(bibliotecasJson)
})

app.listen(port,() =>{
    console.log('App executando na porta'+port)
})

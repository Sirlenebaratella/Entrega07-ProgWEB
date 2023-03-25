/*
Crie uma rota com Node/Express para devolver um JSON com um objeto Pessoa com os dados: nome, email, idade, hobbies (lista de hobbies).
Crie uma outra rota que devolve uma lista de pessoas (no mínimo 3).
*/


import express from "express"
const app = express()
const port = 3000  

app.get('/people',(req,res) =>{
    const people = {
        nome: "Angelina Jolie",
        email: "angelinajolie@teste.com",
        idade: 48,
        hobbies: ["Atuar"]
    }
    const peopleJson = JSON.stringify(people)
    res.setHeader("Content-Type","application/json")
    res.send(peopleJson)
})

app.get('/pessoa1',(req,res) =>{
    const pessoa1 = {
        nome: "Sirlene",
        email: "sirlene@teste.com",
        idade: 26,
        hobbies: ["Falar Japones","cozinhar","Estudar"]
    }

    const pessoa2 = {
        nome: "Tiago",
        email: "tiago@teste.com",
        idade: 20,
        hobbies: ["Nadar","Jogar bola"]
    }

    const pessoa3 = {
        nome: "David",
        email: "sirlene@teste.com",
        idade: 23,
        hobbies: ["Programar","Dormir"]
    }

    const pessoa1Json = JSON.stringify([pessoa1,pessoa2,pessoa3])
    res.setHeader("Content-Type","application/json")
    res.send(pessoa1Json)
})


//executando a rota. só pode ter essa config. apenas uma vez.
app.listen(port,() =>{
    console.log('App executando na porta'+port)
})

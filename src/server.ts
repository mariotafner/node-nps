import express from 'express'

const app = express()

/*
    GET => Busca
    POST => Salvar
    PUT => Alterar
    DELETE => Deletar
    PATCH => Alteração específica
*/

//http://localhost:3333
app.get("/", (request, response) => {
    //return response.send("Hello World")
    return response.json({message: "Hello World"})
})

app.post("/", (request, response) => {
    return response.json({message: "Dados salvos!"})
})

app.listen(3333, () => console.log("Server is running")); //yarn dev
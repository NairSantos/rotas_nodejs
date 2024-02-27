const express = require ("express")
const app = express()

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081")
})

/*
exemplos da aula



app.get("/", function(req,res){
    res.end("Seja bem vindo ao Node JS")
})

app.get("/contato", function(req,res){
    res.end("Página de Contato")
})

app.get("/produtos/:item/:quantidade", function(req,res){
    res.end("item: " + req.params.item + "<br>Quantidade: " + req.params.quantidade)
})*/


//atividade do dia 26/02 //

app.get("/", function(req, res){
    res.end("Pagina principal vazia")
})
 
app.get("/cadastrar/:produto", function(req, res){
    res.end("Produto: " + req.params.produto)
})
 
app.get("/pesquisar/:produto/:modelo", function(req, res){
    res.end("Produto: " + req.params.produto + " modelo: " + req.params.modelo)
})
 
app.get("/contato/:sac/:produto", function(req, res){
    res.end("Sac: " + req.params.sac + " produto: " + req.params.produto)
})
const { response } = require('express');
const express = require('express');
const app = express();
// sinalizar ao express usar o json

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.get("/oi",function (req,res){
    res.send("Olá,mundo");
})

//Criando lista
const lista = [
  {
    id: 1,
    nome: "Paulo",
    pontos: 90,
  },
  {
    id: 2,
    nome: "Daniel",
    pontos: 52,
  },
  {
    id: 3,
    nome: "Beatriz",
    pontos: 97,
  },
];
// Enpoint READ ALL
app.get("/pontuacoes",function(req,res){
  res.send(lista);
});

app.post("/pontuacoes",function(req,res){
  const item = req.body;
  //console.log(item);
  // adicionar item na lista
  lista.push({
    
      id: lista.length+1,
      nome:item.nome,
      pontos: item.pontos,
    
  });
  res.send("item criado com sucesso");
});
app.listen(3000);

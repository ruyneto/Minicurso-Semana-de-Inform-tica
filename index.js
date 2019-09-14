const app = require("express")();
var porta = 3001
const mongoController = require("./MongoController");

app.use(require("express").json());

app.get("/",(req,res)=>{
    res.send("Olá Mundo eu sou um get.");
});

app.post("/",(req,res)=>{
    res.send("Olá Mundo eu sou um post.");
    console.log("Inserindo no banco.")
    mongoController.inserir(req.body);
});

app.get("/listar",(req,res)=>{
    mongoController.listar().then(val=>{
        res.send(val);
    }).catch((err)=>{
        res.send(err);
    });
});

app.delete("/deletar",(req,res)=>{
    mongoController.deletar(req.body._id);
    res.send("Deletado");
});

app.put("/update",(req,res)=>{
    mongoController.update(req.body);
    res.send("Update");
});


app.listen(porta,()=>{
    console.log("Servidor Ligado na porta:"+porta);

});
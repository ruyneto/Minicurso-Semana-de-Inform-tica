const mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost:27017/curso', {useNewUrlParser: true});

var schemaUsuario = mongoose.Schema({nome:String,senha:String});
var Usuario       = mongoose.model("usuario",schemaUsuario);


module.exports.inserir = (corpo)=>{
    let usuario  = Usuario(corpo);
    usuario.save((err)=>{
        if (err){throw error;}
        console.log("Inserido com sucesso");
    });
}

module.exports.listar = ()=>{
    return new Promise((resolve,reject)=>{
        Usuario.find({},(err,val)=>{
            if (err) reject(err);
            // console.log("Usuarios",val);
           resolve(val);
        });
    });
}

module.exports.deletar = (id)=>{
    Usuario.findByIdAndRemove(id,(err,res)=>{
    });
};

module.exports.update = (body)=>{
    Usuario.findByIdAndUpdate(body._id,{"nome":body.nome,"senha":body.senha}, {new: true},(err,res)=>{
        if (err) console.log(err);
        console.log("Documento evoluido.", res);
    });

};
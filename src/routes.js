const express = require('express')

const app = express.Router()

const user = require('./models/Usuario')



app.get('/',(req,res)=>{
    res.sendFile(__dirname+'index')
})
app.get('/cadastro',(req,res)=>{
    res.sendFile((__dirname+'/public/cadastro.html'))
})
app.post('/cadastro/novo',(req,res)=>{
    const novoUsuario = {
        login:req.body.login,
        email:req.body.email,
        senha:req.body.senha,
        
    }
    new user(novoUsuario).save().then(()=>{
        res.send('<h1>Cadastro Efetuado </h1>')
        res.redirect('/cadastro')

    }).catch((err)=>{
        req.flash('error_msg',`Houve um erro ao cadastrar ${err}`)
    })
})
app.get('/cadastro/alterar',(req,res)=>{
    user.findOne({_id:req.body.id}).then((user)=>{
        res.sendFile((__dirname+'/public/cadastro.html'))
        
    })
    .catch((err)=>{
        req.flash('error_msg','Esta Categoria não existe')
        res.redirect('/admin/categorias')
    })
   
})


console.log(__dirname)

module.exports= app;
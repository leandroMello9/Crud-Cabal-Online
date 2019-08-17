const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const flash= require('connect-flash')
const session = require('express-session')
const mongoose = require('mongoose')
console.log(__dirname)
const routes= require('./routes')

//Conectando ao mongo
mongoose.Promise=global.Promise    
mongoose.connect('mongodb://localhost/pristontale',{ useNewUrlParser: true }).then(()=>{
        console.log('Conectado ao mongo')}).catch((err)=>{
            console.log('Erro',err)
        })



//Uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( express.static(__dirname + '/public'));



app.set('view engine', 'html')

app.use(routes)

const port = 8081
app.listen(port,console.log(`Server ${port}`))
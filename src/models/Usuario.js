const {Schema,model} = require('mongoose')

const User = new Schema({
  
    login:{
        type:String,
        required:true,
        unique:true
        
    },
    senha:{
        type:String,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = model('usuario',User)
let mongoose= require('mongoose')
let bcrypt= require('bcryptjs')
let userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }
})
userSchema.pre('save', async function(next) {
    this.password= await bcrypt.hash(this.password,10)
    next()
})
module.exports= userSchema
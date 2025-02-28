import mongoose from "mongoose";

const GameuserSchema = new mongoose.Schema({
  
    username:{
        type: String,
        required:true,
        
    },

    email:{
        type: String,
        required:true,
        unique:true
    },

    password:{
        type: String,
        required:true,
       
    },

    isAdmin:{
     type:Boolean,
     default:false
    }

    



}, {timestamps:true}


)

const Gameuser = mongoose.model('gameusers' , GameuserSchema)

export default Gameuser;
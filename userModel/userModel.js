const {Schema,model}=require("mongoose");

const UserSchema=new Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

module.exports=model("userData",UserSchema);
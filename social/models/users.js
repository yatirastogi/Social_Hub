const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    profilepic:{
        type:String,
        default:"p1.jpg"
    },
    coverpic:{
        type:String,
        default:"c1.jpg"
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    idAdmin:{
        type:Boolean,
        default:false
    },
    desc:{
        type:String
    },
    city:{
        type:String
    }
},
{timestamps:true}
);

module.exports=mongoose.model("users",UserSchema)
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/login_data",{
    useNewUrlParser:true,
    useUnifiedTopology:true
  
})
.then(()=>{
    console.log("connnections is Sucessful.. ")
}).catch((e)=>{
    console.log("Error");
})



const LoginSchema=new mongoose.Schema({
    name:{
        type:String ,
        required:true
    },
    password:{
        type:Number,
        required:true
    }


    })

 const login_data=new mongoose.model("login_data",LoginSchema); 
 
 module.exports= login_data;




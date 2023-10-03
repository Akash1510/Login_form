const express =require("express");
const app=express();
const login_data=require("./db/mongo")
const path=require("path");
const hbs= require("hbs");

const port=process.env.PORT || 3000;
app.use(express.json());

const templates_path=path.join(__dirname,'./templates');
console.log(path.join(__dirname,"./templates"))


app.set('view engine','hbs');
app.set("views",templates_path);
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("login");
})
app.get("/signup",(req,res)=>{
    res.render("signup");
})

app.post("/signup",async(req,res)=>{
    try{
        const data={
            name:req.body.name,
            password:req.body.password,
        }
        await login_data.insertMany([data]);
        res.render("home");
    }catch{
        console.log("not Working");
    }

})

app.post("/login",async(req,res)=>{
    try{
    //     const data={
    //         name:req.body.name,
    //         password:req.body.password,
    //     }
    //     await login_data.insertMany([data]);
    //     res.render("home");
    const check =await login_data.findOne({name:req.body.name});
    if(check.password==req.body.password){
        res.render("home");

    }else{
        res.send("Wrog password ")
    }

    }catch{
        console.log("not Working");
    }

})

app.get("/",()=>{
    res.send("hello form Aakash ");
})

app.listen(port,()=>{
    console.log("Connection is Success full ");
})
const express=require("express");
const db=require("./db/database")
const userModel=require("./userModel/userModel");
const cors=require("cors");
const app=express();
const bcrypt=require("bcrypt");
const signupSchema=require("./validation/validation");
const validate=require("./validationMiddleware/middleware");
app.use(express.json())
app.use(express.urlencoded({extended:true}));


const SECRECT_KEY="you can give accordingly"


let corsOption={
  origin:"http://localhost:5173",
  methods:"GET,POST,PATCH,DELETE",
  Credentials:true
}

app.use(cors(corsOption))


// for register users
app.post("/user/register",async(req,res)=>{

  const {username,password}=req.body;

  //  const salt=10;
  //  const hashPassowrd=await bcrypt.hash(password,salt);
  const user=new userModel({
    username:username,
    password:password,
  }) 
  await user.save();
  res.json({msg:"user is successfully registered"})
})


// for login user
app.post("/user/login",async(req,res)=>{
  const{email,password}=req.body;
  
   const user=await userModel.findOne({email});
   
      
    const comparePassword=await bcrypt.compare(password,user.password);

    if(!comparePassword) res.json({msg:"User not found"})

    res.json({msg:"Login successfully"})

})


app.get("/user/data",(req,res)=>{
  res.json({
    "id": 1,"title": "iPhone 10",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  },);
})

const port=4000;

app.listen(port,()=>{console.log(`server is connected succefully at port ${port}`)});
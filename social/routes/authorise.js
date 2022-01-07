const router=require('express').Router();
const usermodel=require("../models/users")

router.get("/",(req,res)=>{
    res.send("authorise route home page");
})

router.post("/register",async (req,res)=>{
const newuser=await new usermodel({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,

});
try{
  const same_email = await usermodel.findOne({ email: req.body.email});
  const same_username = await usermodel.findOne({ username: req.body.username});


if(same_email)
res.json({"data":"Account Already Exists","done":0})
else if(same_username)
res.json({"data":"Username taken","done":0})
else{
    const usersave=await newuser.save()
    res.json({"data":"Account Succesfully Created!","done":1})
}}catch(err)
{
    console.log(err);
}


})


router.post("/login", async (req, res) => {
    try {
      const user = await usermodel.findOne({ email: req.body.email});
      if(!user)
       {res.json("user not found")}
      else
      {if(req.body.password==user.password){
          res.json(user);
          console.log(user)
          
      }
      else{
        res.json("wrong pass");
        console.log("wrong pass")
      }
    }
     
    } catch (err) {
      res.json(err)
    }
  });



module.exports=router
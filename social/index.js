const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const user_route=require("./routes/users");
const auth_route=require("./routes/authorise");
const post_route = require("./routes/Posts");
const multer = require("multer");
const path = require("path");
dotenv.config();

const User = require("./models/users");

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);
app.use("/asset", express.static(path.join(__dirname, "public/asset")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/asset");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.log(error);
  }
});

const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/asset/cover");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload2 = multer({ storage: storage2 });

app.put("/api/editcover/:username/:filename", upload2.single("file"), async(req, res) => {
  
 
  
        
              const user =await User.findOneAndUpdate({username:req.params.username}, {
                $set: {'coverpic':req.params.filename},
              });
              res.json("Account has been updated");
           
              
  })
  app.put("/api/editprofile/:username/:filename", upload.single("file"), async(req, res) => {
  
 
  
        
    const user =await User.findOneAndUpdate({username:req.params.username}, {
      $set: {'profilepic':req.params.filename},
    });
    res.json("Account has been updated");
 
    
})



//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/user",user_route)
app.use("/api/auth",auth_route)
app.use("/api/post",post_route)

app.get("/e",(req,res)=>{
    res.send("ddd")
})

app.listen(8800, () => {
  console.log("Backend server is running!");
});
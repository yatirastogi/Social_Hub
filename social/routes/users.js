const router=require('express').Router();

const User = require("../models/users");
//update user

router.put("/:username", async (req, res) => {
  
console.log(req.form)

        try {
            const user = await User.findOneAndUpdate({username:req.params.username}, {
              $set: req.body,
            });
            res.json("Account has been updated");
          } catch (err) {
            return res.json(err);
          }
     
})



//get user
router.get("/:username", async (req, res) => {
  try{
      const user = await User.findOne({username:req.params.username});
      if(user){
      //console.log(user)
     const { _id,password, updatedAt, ...other } = user._doc;//to get all properties except updated at and password
      res.json(other);
      }
      else{
        res.json("No match")
      }
    }catch (err) {
      res.json("no");
    }
   
  });


//follow a user

//req.params id contains id of someone u want to follow
//req.body.id contains ur id
router.put("/:username/:myusername/follow", async (req, res) => {
    if (req.params.myusername !== req.params.username) {
      try {
        const user = await User.findOne({username:req.params.username});
        const currentUser = await User.findOne({username:req.params.myusername});
        if (!user.followers.includes(req.params.myusername)) {
          await user.updateOne({ $push: { followers: req.params.myusername } });
          await currentUser.updateOne({ $push: { following:req.params.username } });
          res.json("user has been followed");
        } else {
          res.json("you allready follow this user");
        }  
       } catch (err) {
        res.json(err);
      }
    } else {
      res.json("you cant follow yourself");
    }
  });



  router.put("/:username/:myusername/unfollow", async (req, res) => {
    if (req.params.myusername !== req.params.username) {
      try {
        const user = await User.findOne({username:req.params.username});
        const currentUser = await User.findOne({username:req.params.myusername});
        if (user.followers.includes(req.params.myusername)) {
          await user.updateOne({ $pull: { followers: req.params.myusername } });
          await currentUser.updateOne({ $pull: { following:req.params.username } });
          res.json("user has been unfollowed");
        } else {
          res.json("you dont follow this user");
        }  
       } catch (err) {
        res.json(err);
      }
    } else {
      res.json("you cant unfollow yourself");
    }
  });
module.exports=router
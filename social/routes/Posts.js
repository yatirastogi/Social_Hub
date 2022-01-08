   
const router = require("express").Router();
const Post=require("../models/Posts");
const { route } = require("./users");
const User=require("../models/users")


//create a post
router.post("/",async (req,res)=>{
  console.log(req.body.user.username)
    const newPost=new Post(req.body.user)
    try{

        const savedpost=await newPost.save();
        res.json(savedpost)

    }catch(err){
        res.json(err)
    }

})


//update a post
router.put("/:id",async(req,res)=>{

    const post=await Post.findByIdAndUpdate(req.params.id)
    if(post.userId===req.body.userId)
    {
        await post.updateOne({$set:req.body});
        res.json("updated")

    }
    else{
        res.json("you're not the creatlor of this post")
    }

})

//delete a post
router.delete("/:id",async(req,res)=>{

    const post=await Post.findByIdAndUpdate(req.params.id)
    if(post.userId===req.body.userId)
    {
        await post.deleteOne({});
        res.json("deleted")

    }
    else{
        res.json("you're not the creator of this post so cant delete")
    }

})



//like or dislike a post
router.put("/:id/like/:username",async(req,res)=>{
    const post=await Post.findById(req.params.id)
    
    if (!post.likes.includes(req.params.username)) {
        await post.updateOne({ $push: { likes: req.params.username } });
        res.json("The post has been liked");
      } else {
        await post.updateOne({ $pull: { likes:req.params.username} });
        res.json("The post has been disliked");
      }
})

//get a post
router.get("/:id",async(req,res)=>{
    const post=await Post.findById(req.params.id)
    
   if(!post)
   {
       res.json("no post found")
   }
   else{
       res.json(post)
   }
    

})



router.post("/timeline/all", async (req, res) => {


    try {
      const currentUser = await User.findOne({username:req.body.username});
      
    
      const userPosts = await Post.find({ username: req.body.username });
     // res.json(userPosts)
     
      const friendPosts = await Promise.all(
        currentUser.following.map((friendId) => {
         
          return Post.find({ username: friendId });
        })
        
      );
      console.log(friendPosts)
      if(userPosts){
      res.json(userPosts.concat(...friendPosts))
      }
      else{
        res.json(friendPosts)
      }
    } catch (err) {
      res.json(err);
    }
  });

module.exports = router;
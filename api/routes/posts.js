const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");


//CREATE POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        console.log(savedPost);
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE POST
router.put("/:id", async (req, res) => {

    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body
                    },
                    { new: true }
                );
                res.status(200).json(updatedPost);
            } catch (error) {
                res.status(500).json(err)
            }
        } else {
            res.status(401).json("You can update your post only")
        }
    } catch (err) {
        res.status(500).json(err)
    }
}
)


//DELETE
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username == req.body.username) {
            try {
                await post.delete();
                res.status(200).json("post has been deleted");
            } catch (error) {
                console.log(error);
                res.status(500).json(error)
            }
        } else {
            res.status(401).json("You can Delete only your account");
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET POST
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    } catch (error) {

    }
})

// GET ALL POST
router.get("/", async (req, res) => {
    const username = req.query;
    const catName = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find(username);
        } else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName]
                }
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts)
    } catch (error) {

    }
})
module.exports = router;
const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Post = require("../models/Post");


//UPDATE
router.put("/:id", async (req, res) => {

    if (req.body.userId == req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true })
            res.status(200).json(updateUser);
        } catch (error) {
            res.status(500).json(error)

        }
    } else {
        res.status(401).json("You can update only your account");
    }
}
)
//DELETE
router.delete("/:id", async (req, res) => {
    try {

        if (req.body.userId == req.params.id) {
            try {
                const user = await User.findById(req.params.id);
                if (user) {
                    await Post.deleteMany({ username: user.username })
                    try {
                        const DeletedUser = await User.findByIdAndDelete(req.params.id)
                        res.status(200).json(DeletedUser);
                    } catch (error) {
                        res.status(500).json(err)

                    }
                }


            } catch (error) {

            }
        } else {
            res.status(401).json("You can Delete only your account");
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET USER
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc;
        res.status(200).json(others)
    } catch (error) {

    }
})

module.exports = router;
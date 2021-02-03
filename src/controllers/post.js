//import neccesary files
const {Post} = require('../models/Post');

//list all posts  --- for main page
exports.listAllPosts = async (req, res) => {
    try {
      const allPosts = await Post.find({});
      res.status(200).send(allPosts);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
};

//list all posts from author -- for search button
exports.listUserPosts = async (req, res) => {
    try {
        const allPosts = await Post.find({ author: req.params.user_id });
        res.status(200).send(allPosts);
    } catch (error) {
        res.status(404).send({ message: "user not found" });
    }
};

//add new post (with author)
exports.addNewPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        post.author = req.params.user_id;
        const returnedValue = await post.save();
    
        res.status(201).send(returnedValue);
    } catch (error) {
        res.status(400).send(error);
    }
};

//find post by user ID
exports.getPostsByUser = async (req, res) => {
  try {
    const allPosts = await Post.find({ author: req.params.user_id });
    res.status(200).send(allPosts);
  } catch (error) {
    res.status(404).send({ message: "user not found" });
  }
};

exports.addPost = async (req, res) => {
  try {
    // const post = new Post(req.body);
    // const user = await User.findById(req.params.user_id);
    // user.posts.push(post);
    // const returnedValue = await user.save();
    const post = new Post(req.body);
    post.author = req.params.user_id;
    const returnedValue = await post.save();

    res.status(201).send(returnedValue);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log(post);
        res.status(200).send("successfully updated");
    } catch (error) {
        res.status(404).send({ message: "user not found" });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).send(post);
    } catch (error) {
        res.status(404).send({ message: "user not found" });
    }
};

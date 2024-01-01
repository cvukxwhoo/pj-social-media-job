import PostModel from '../Models/post.js';

const PostController = {
  createPost: async (req, res) => {
    try {
      const newPost = req.body;
      const createNewPost = await PostModel.create(newPost);
      res.status(201).json({
        message: 'Post created successfully',
        data: createNewPost,
        isSuccess: true,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        data: null,
        isSuccess: false,
      });
    }
  },

  getPost: async (req, res) => {
    try {
      const allPost = req.body;
      const getAllPost = await PostModel.find(allPost);
      res.status(201).json({
        message: 'Get successfully',
        data: getAllPost,
        isSuccess: true,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        data: null,
        isSuccess: false,
      });
    }
  },
};

export default PostController;

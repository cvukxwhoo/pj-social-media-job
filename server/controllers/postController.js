import PostModel from '../Models/post.js';

const PostController = {
  createPost: async (req, res) => {
    const newPost = res.body;
    try {
      const createNewPost = await PostModel.create(newPost);

      res.status(201).json({
        message: 'Post created successfully',
        data: createNewPost,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};

export default PostController;

import express from 'express';

// middlewares
import middlewares from '../middlewares/index.js';

// controllers
import PostController from '../controllers/postController.js';

const postRouter = express.Router();

//  Routes
postRouter.post('/', middlewares.createPost, PostController.createPost);

export default postRouter;

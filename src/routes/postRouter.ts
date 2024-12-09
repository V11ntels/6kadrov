import express from 'express';
import PostController from '../controllers/postController.js';

const postRouter = express.Router();

postRouter.get('/', PostController.getPosts);
postRouter.get('/:id', PostController.getPostById);

export default postRouter;

import express from 'express';
import PostController from '../controllers/postController.js';

const postRouter = express.Router();

postRouter.get('/', PostController.getPosts);
postRouter.post('/', PostController.createPost);
postRouter.get('/:id', PostController.getPostById);
postRouter.delete('/:id', PostController.deletePost);
postRouter.put('/:id', PostController.updatePostById);

export default postRouter;

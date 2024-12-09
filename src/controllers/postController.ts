import { controllerFunction } from '../types/share.js';

export default class PostController {
    static getPosts: controllerFunction = (req, res) => {
        res.send('List of posts');
    };

    static getPostById: controllerFunction = (req, res) => {
        const id = req.params.id;
        res.send(`post with id ${id}`);
    };
}

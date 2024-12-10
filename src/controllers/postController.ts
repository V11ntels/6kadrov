import { plainToInstance } from 'class-transformer';
import PostService from '../services/postService.js';
import { controllerFunction } from '../types/share.js';
import { UpdatePostDto } from '../dto/post/UpdatePost.dto.js';
import { validate } from 'class-validator';
import { CreatePostDto } from '../dto/post/CreatePost.dto.js';

export default class PostController {
    static getPosts: controllerFunction = async (req, res) => {
        const posts = await PostService.getAllPosts();
        res.json(posts);
    };

    static getPostById: controllerFunction = async (req, res) => {
        const id = Number(req.params.id);
        const post = await PostService.getPostById(id);
        res.json(post);
    };

    static updatePostById: controllerFunction = async (req, res) => {
        const postDto = plainToInstance(UpdatePostDto, req.body);

        const errors = await validate(postDto);
        if (errors.length) return res.status(400).json(errors);

        const id = Number(req.params.id);
        await PostService.updatePostById(id, postDto);
        res.send();
    };

    static createPost: controllerFunction = async (req, res) => {
        const postDto = plainToInstance(CreatePostDto, req.body);

        const errors = await validate(postDto);
        if (errors.length) return res.status(400).json(errors);

        await PostService.createPost(postDto);
        res.send();
    };

    static deletePost: controllerFunction = async (req, res) => {
        const id = Number(req.params.id);

        await PostService.deletePost(id);
        res.send();
    };
}

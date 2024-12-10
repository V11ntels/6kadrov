import AppDataSource from '../config/database.js';
import { CreatePostDto } from '../dto/post/CreatePost.dto.js';
import { UpdatePostDto } from '../dto/post/UpdatePost.dto.js';
import { Post } from '../entities/Post.js';

const postRepo = AppDataSource.getRepository(Post);

export default class PostService {
    static async getAllPosts() {
        const posts = await postRepo.find();

        return posts;
    }

    static async getPostById(id: number) {
        const post = await postRepo.findOneBy({ post_id: id });

        return post;
    }

    static async updatePostById(id: number, dataUpdate: UpdatePostDto) {
        await postRepo.update({ post_id: id }, dataUpdate);
    }

    static async createPost(dataPost: CreatePostDto) {
        await postRepo.insert(dataPost);
    }

    static async deletePost(id: number) {
        await postRepo.delete(id);
    }
}

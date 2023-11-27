import { Request, Response } from "express";
import Post from "../models/Post";
// import User from "../models/User";

export const postController = {
  all: async (req: Request, res: Response) => {
    const posts = await Post.findAll();
    res.json({ posts });
  },
  show: async (req: Request, res: Response) => {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    res.json({ post });
  },
  create: async (req: Request, res: Response) => {
    const { title, userId, description } = req.body;
    const post = Post.build({ title, UserId: userId, description });
    await post.save();
    res.json({ msg: "Post created", post });
  },
};

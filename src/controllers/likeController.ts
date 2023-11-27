import { Request, Response } from "express";
import Like from "../models/Like";

export const likeController = {
  all: async (req: Request, res: Response) => {
    const likes = await Like.findAll();
    res.json({ likes });
  },
  show: async (req: Request, res: Response) => {
    const { id } = req.params;
    const like = await Like.findByPk(id);
    res.json({ like });
  },
  create: async (req: Request, res: Response) => {
    const { userId, postId } = req.body;
    const like = Like.build({ UserId: userId, PostId: postId });
    await like.save();
    res.json({ msg: "Like created", like });
  },
};

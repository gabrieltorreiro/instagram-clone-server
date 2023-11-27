import { Request, Response } from "express";
import User from "../models/User";

export const userController = {
  all: async (req: Request, res: Response) => {
    const users = await User.findAll();
    res.json({ users });
  },
  show: async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    res.json({ user });
  },
  create: async (req: Request, res: Response) => {
    const { username, password, email } = req.body;
    const user = User.build({ username, password, email });
    await user.save();
    res.json({ msg: "user created", user });
  },
};

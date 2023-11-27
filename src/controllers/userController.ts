import { Request, Response } from "express";
import User from "../models/User";

export const userController = {
  all: async (req: Request, res: Response) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ msg: "Server Error" });
    }
  },
  show: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ msg: "not found or wrong id" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ msg: "Server Error" });
    }
  },
  create: async (req: Request, res: Response) => {
    try {
      const { username, password, email } = req.body;
      const user = User.build({ username, password, email });
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).json({ msg: "Server Error" });
    }
  },
};

import { NextFunction, Request, Response } from "express";
import validator from "validator";
import { MissingParams } from "../errors";

export const userValidator = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username } = req.body;
    console.log(username, !username);
    if (!username || !validator.isAlphanumeric(username)) {
      throw MissingParams("Missing or Wrong Username field");
    }
    next();
  } catch (error: any) {
    const statusCode = error?.statusCode || 500;
    const msg = { msg: error.msg } || error;
    res.status(statusCode).json(msg);
  }
};

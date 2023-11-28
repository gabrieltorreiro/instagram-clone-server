import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { MissingParams } from "../errors";

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const { statusCode, msg } = MissingParams(
      errors
        .array()
        .map((c) => c.msg)
        .join(", "),
    );
    return res.status(statusCode).json(msg);
  }
  next();
};

export default validate;

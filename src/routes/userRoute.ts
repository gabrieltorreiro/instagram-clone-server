import express from "express";
import { userController } from "../controllers/userController";
import { userValidator } from "../validator/userValidator";
import validate from "../validator";

const route = express();

route.get("/", userController.all);
route.get("/:id", userValidator.show, validate, userController.show);
route.post("/", userValidator.create, validate, userController.create);

export default route;

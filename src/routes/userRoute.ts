import express from "express";
import { userController } from "../controllers/userController";
import { userValidator } from "../validator/userValidator";

const route = express();

route.get("/", userController.all);
route.get("/:id", userController.show);
route.post("/", userValidator, userController.create);

export default route;

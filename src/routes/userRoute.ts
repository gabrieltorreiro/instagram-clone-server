import express from "express";
import { userController } from "../controllers/userController";

const route = express();

route.get("/", userController.all);
route.get("/:id", userController.show);
route.post("/", userController.create);

export default route;

import express from "express";
import { postController } from "../controllers/postController";

const route = express();

route.get("/", postController.all);
route.get("/:id", postController.show);
route.post("/", postController.create);

export default route;

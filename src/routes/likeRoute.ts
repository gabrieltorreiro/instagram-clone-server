import express from "express";
import { likeController } from "../controllers/likeController";

const route = express();

route.get("/", likeController.all);
route.get("/:id", likeController.show);
route.post("/", likeController.create);

export default route;

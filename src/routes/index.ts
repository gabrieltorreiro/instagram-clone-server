import express from "express";
import userRoute from "./userRoute";
import postRoute from "./postRoute";
import likeRoute from "./likeRoute";

const route = express();

route.use("/user", userRoute);
route.use("/post", postRoute);
route.use("/like", likeRoute);

export default route;

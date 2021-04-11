import express from "express";
import images from "./api/images";

const routes = express();

routes.use("/images", images);

export default routes;
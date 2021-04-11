import express from "express";
const images = express.Router();

images.get("/", (req, res): void => {
	res.status(200).send("success");
});

export default images;

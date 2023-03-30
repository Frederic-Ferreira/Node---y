import { Request, Response } from "express";
import { newPostService } from "../services/createPostService";

export const newPostHandler = async (req: Request, res: Response) => {
  try {
    const { title, body } = req.body;

    if (!title || !body) {
      res.status(400).send("Title and body are required");
    }

    const post = await newPostService(title, body);

    res.send(post);
  } catch (e) {
    if (typeof e === "string") {
      res.status(400).json({ message: e.toUpperCase() });
    } else if (e instanceof Error) {
      res.status(500).json({ message: e.message });
    } else {
      res.status(500).json({ message: "Unknown error" });
    }
  }
};

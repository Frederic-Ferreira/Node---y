import { Request, Response } from "express";
import { getPostsService } from "../services/getPostsService";

export const getPostsHandler = async (req: Request, res: Response) => {
  try {
    const posts = await getPostsService();
    res.send(posts);
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

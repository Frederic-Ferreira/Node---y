import { Request, Response } from "express";
import { modifyPostService } from "../services/updatePostService";

export const updatePostHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) throw new Error("No id provided");

    const { title, body } = req.body;

    if (!title && !body) throw new Error("No data provided");

    const post = await modifyPostService(id, title, body);

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

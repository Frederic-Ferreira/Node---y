import { Request, Response } from "express";
import { findPostService } from "../services/findPostService";

export const findPostHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) throw new Error("No id provided");

    const post = await findPostService(id);

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

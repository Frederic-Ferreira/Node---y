import { Request, Response } from "express";
import { deletePostService } from "../services/deletePostService";

export async function deletePostHandler(req: Request, res: Response) {
  try {
    const { id } = req.params;

    if (!id) throw new Error("No id provided");

    await deletePostService(id);

    res.send({ message: "Post deleted" });
  } catch (e) {
    if (typeof e === "string") {
      res.status(400).json({ message: e.toUpperCase() });
    } else if (e instanceof Error) {
      res.status(500).json({ message: e.message });
    } else {
      res.status(500).json({ message: "Unknown error" });
    }
  }
}

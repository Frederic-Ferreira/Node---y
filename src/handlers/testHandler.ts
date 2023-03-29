import { Request, Response } from "express";

export const testHandler = async (req: Request, res: Response) => {
  res.send("Hello World from the test route!");
};

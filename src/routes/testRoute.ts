import express from "express";
import { testHandler } from "../handlers/testHandler";

const router = express.Router();

router.get("/", testHandler);

export { router as testRoute };

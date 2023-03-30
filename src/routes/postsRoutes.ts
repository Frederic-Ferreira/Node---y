import { getPostsHandler } from "../handlers/getPostsHandler";
import { newPostHandler } from "../handlers/newPostHandler";
import { Router } from "express";
import { findPostHandler } from "../handlers/findPostHandler";
import { updatePostHandler } from "../handlers/updatePostHandler";
import { deletePostHandler } from "../handlers/deletePostHandler";

const router = Router();

router.route("/").get(getPostsHandler).post(newPostHandler);

router
  .route("/:id")
  .get(findPostHandler)
  .put(updatePostHandler)
  .delete(deletePostHandler);

export { router as postsRoutes };

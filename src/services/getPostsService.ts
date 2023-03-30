import { findPosts } from "../repositories/postsRepository";

export async function getPostsService() {
  return await findPosts();
}

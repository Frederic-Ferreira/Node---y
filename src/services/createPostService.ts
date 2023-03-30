import { createPost } from "../repositories/postsRepository";

export async function newPostService(title: string, body: string) {
  return await createPost(title, body);
}

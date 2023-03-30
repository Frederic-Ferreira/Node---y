import { deletePost } from "../repositories/postsRepository";

export async function deletePostService(id: string) {
  return await deletePost(id);
}

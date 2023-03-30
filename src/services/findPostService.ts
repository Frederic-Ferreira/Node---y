import { getPost } from "../repositories/postsRepository";

export async function findPostService(id: string) {
  return await getPost(id);
}

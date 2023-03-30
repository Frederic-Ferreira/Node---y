import { updatePost } from "../repositories/postsRepository";

export async function modifyPostService(
  id: string,
  title: string,
  body: string
) {
  return await updatePost(id, title, body);
}

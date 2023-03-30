import { prisma } from "./prisma";

export async function findPosts() {
  return await prisma.post.findMany();
}

export async function createPost(title: string, body: string) {
  return await prisma.post.create({
    data: {
      title,
      body,
    },
  });
}

export async function getPost(id: string) {
  return await prisma.post.findUnique({
    where: {
      id,
    },
  });
}

export async function updatePost(id: string, title: string, body: string) {
  const data =
    body && title ? { title, body } : body && !title ? { body } : { title };

  return await prisma.post.update({
    where: {
      id,
    },
    data,
  });
}

export async function deletePost(id: string) {
  return await prisma.post.delete({
    where: {
      id,
    },
  });
}

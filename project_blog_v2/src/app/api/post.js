import { PrismaClient } from "@prisma/client";
const DB = new PrismaClient();

const postSelectAll = async () => {
  try {
    const post = await DB.tbl_post.findMany();
    await DB.$disconnect();
    return post;
  } catch (error) {
    return null;
  }
};

const createPost = async (data) => {
  await DB.tbl_post.create({ data });
};

const updatePost = async (data) => {
  const p_seq = parseInt(data.p_seq);

  await DB.tbl_post.update({
    where: { p_seq },
    data: {
      p_nseq: data.p_nseq,
      p_title: data.p_title,
      p_content: data.p_content,
    },
  });
  await DB.post.update({ where: { data: data.p_seq } });
};

export { createPost, updatePost, postSelectAll };

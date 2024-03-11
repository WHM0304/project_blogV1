import { PrismaClient } from "@prisma/client";
const DB = new PrismaClient();

const noticeSelectAll = async () => {
  try {
    const notice = await DB.tbl_notice.findMany();
    await DB.$disconnect();
    return notice;
  } catch (error) {
    return null;
  }
};

const createNotice = async (data) => {
  await DB.tbl_notice.create({ data });
};

const updateNotice = async (data) => {
  const n_seq = parseInt(data.n_seq);
  await DB.tbl_notice.update({
    where: { n_seq },
    data: { n_title: data.n_title, n_div: data.n_div },
  });
};

const deleteNotice = async (n_seq) => {
  await DB.tbl_notice.delete({ where: { n_seq } });
};
export { createNotice, updateNotice, noticeSelectAll, deleteNotice };

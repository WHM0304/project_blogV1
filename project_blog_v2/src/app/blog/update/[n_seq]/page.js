import { noticeSelectAll, updateNotice } from "@/app/api/notice";
import { redirect } from "next/navigation";
import { deleteNotice } from "@/app/api/notice";
export default async ({ params }) => {
  const select = await noticeSelectAll({
    where: { n_seq: params.n_seq },
  });
  const data = select[0];
  const clickHandler = async () => {
    "use server";
    await deleteNotice(data.n_seq);
    console.log(data);
    redirect("/");
  };
  // console.log(select);
  const actionHandler = async (FormData) => {
    "use server";
    const noticeUp = {
      n_seq: params.n_seq,
      n_title: FormData.get("n_title"),
      n_div: FormData.get("n_div"),
    };
    await updateNotice(noticeUp);
    redirect("/blog");
  };

  return (
    <form method="POST" action={actionHandler}>
      <input name="n_title" placeholder={data.n_title} />
      <select name="n_div">
        <option>변경할 게시판을 선택해주세요</option>
        <option value="메모">메모</option>
        <option value="자유게시판">자유게시판</option>
        <option value="기타">기타</option>
      </select>
      <input type="submit" value="추가하기" />
      <input type="button" value="삭제하기" onClick={clickHandler} />
    </form>
  );
};

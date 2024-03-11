import { createNotice } from "@/app/api/notice";
import { redirect } from "next/navigation";
export default () => {
  const actionHandler = async (FormData) => {
    "use server";
    const noticeData = {
      n_title: FormData.get("n_title"),
      n_div: FormData.get("n_div"),
    };
    await createNotice(noticeData);
    redirect("/blog");
  };

  return (
    <form method="POST" action={actionHandler}>
      <input name="n_title"></input>
      <select name="n_div">
        <option value="메모">메모</option>
        <option value="자유게시판">자유게시판</option>
        <option value="기타">기타</option>
      </select>
      <input type="submit" value="추가하기"></input>
    </form>
  );
};

import { redirect } from "next/navigation";
import { createPost } from "@/app/api/post";
export default ({ params }) => {
  const actionHandler = async (FormData) => {
    "use server";
    const postData = {
      p_title: FormData.get("p_title"),
      p_content: FormData.get("p_content"),
      p_nseq: parseInt(params.n_seq),
    };
    await createPost(postData);
    redirect(`/blog/${params.n_seq}/list`);
  };

  return (
    <form method="POST" action={actionHandler}>
      <input name="p_title"></input>
      <textarea name="p_content"></textarea>
      <input type="submit"></input>
    </form>
  );
};

import { postSelectAll } from "@/app/api/post";
export default async ({ params }) => {
  const postdata = await postSelectAll({
    where: { p_nseq: params.n_seq },
  });
  const postList = postdata.map((item) => {
    return (
      <>
        <h1>{item.p_title}</h1>
        <li>
          <p>{item.p_content}</p>
        </li>
      </>
    );
  });
  //   console.log(postList);
  return <>{postList}</>;
};

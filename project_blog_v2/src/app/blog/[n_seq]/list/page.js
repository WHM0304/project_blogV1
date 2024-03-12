"use client";
import { postSelectAll, postSelect } from "@/app/api/post.js";
import Link from "next/link";
export default async ({ params }) => {
  const p_nseq = params.n_seq;
  const postData = await postSelectAll();
  console.log(postData);
  // const router = useRouter();
  // const onClickHandler = (p_nseq) => {
  //   router.push(`/blog/${p_nseq}/post/detail`);
  // };
  const postList = postData?.map((item) => {
    return (
      <li>
        <Link
          href={`/blog/${params.n_seq}/post/detail/${item.p_seq}/`}
        >
          <span>{item.p_nseq}//게시판//</span>
          <label> //제목//</label>
          <labe>{item.p_title}</labe>
        </Link>
      </li>
    );
  });

  return (
    <div>
      <Link href={`/blog/${params.n_seq}/post/add`}>
        게시글추가하기
      </Link>
      <ul>{postList}</ul>
    </div>
  );
};

"use client";
import Link from "next/link";
import { noticeSelectAll } from "@/app/api/notice";
import "./Aside.css";
export default async () => {
  const noticeList = await noticeSelectAll();

  const viewList = noticeList?.map((item) => {
    return (
      <li>
        <Link href={`/blog/${item.n_seq}/list`}>
          {item.n_title}({item.n_div})
        </Link>
      </li>
    );
  });
  return (
    <>
      <div className="nav">
        <p>
          <Link href="/blog/add">게시판 추가</Link>
        </p>
        <p>
          <Link href="/blog/change">게시판 설정</Link>
        </p>
      </div>
      <div className="list">
        <div>전체게시판</div>
        <ul>{viewList}</ul>
      </div>
    </>
  );
};

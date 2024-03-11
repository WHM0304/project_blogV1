"use client";

import { noticeSelectAll } from "@/app/api/notice";
import Link from "next/link";

export default async () => {
  const allData = await noticeSelectAll();

  const liView = allData.map((blog) => {
    return (
      <li key={blog.n_seq}>
        <Link href={`/blog/update/${blog.n_seq}`}>
          <span>{blog.n_title}</span>
        </Link>
      </li>
    );
  });

  return <ul>{liView}</ul>;
};

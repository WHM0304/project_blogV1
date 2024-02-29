document.addEventListener("DOMContentLoaded", () => {
  const top_nav = document.querySelector("ul.nav");
  const div_nav = document.querySelector("div.nav");
  const home = document.querySelector("#home");
  const 네비 = {
    로그인: "로그인",
    회원가입: "회원가입",
    내정보: "내정보",
    게시판추가: "게시판추가",
    게시판설정: "게시판설정",
  };
  top_nav?.addEventListener("click", (e) => {
    const name = e.target.innerHTML;
    if (name === 네비.로그인) {
      document.location.href = "/";
    } else if (name === 네비.회원가입) {
      document.location.href = "/";
    } else if (name === 네비.내정보) {
      document.location.href = "/";
    }
  });
  div_nav?.addEventListener("click", (e) => {
    const target = e.target.innerHTML;
    if (target === 네비.게시판추가) {
      document.location.href = "/notice/insert";
    } else if (target === 네비.게시판설정) {
      document.location.href = "/notice/setting";
    }
  });
  home?.addEventListener("click", () => {
    document.location.href = "/";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const List = document.querySelector("div.list");
  List?.addEventListener("click", (e) => {
    const target = e.target;

    if (target.tagName === "P") {
      const seq = target.dataset.n_seq;
      return (document.location.href = `/post/${seq}/list`);
    }
  });
});

const join_click_event = async () => {
  const join_form = document.querySelector("form.join");
  const userId = join_form.querySelector("#userid");
  const password = join_form.querySelector("#password");
  const re_password = join_form.querySelector("re_password");
  const nickname = join_form.querySelector("#nick");
  if ((userId.value = "")) {
    alert("사용자이름 입력해주세요");
    userId.select();
    return false;
  } else {
    const response = await fetch(`/users/${userId.value}/check`);
    const json = await response.json();
    if (json.MESSAGE === "FOUND") {
      alert("이미 등록된 ID가 있습니다.");
      userId.select();
      return false;
    }
  }

  if (password.value === "") {
    alert("비밀번호를 입력해야 합니다.");
    password.select();
    return false;
  }
  if (re_password === "") {
    alert("비밀번호 확인을 입력해주세요.");
    re_password.select();
    return false;
  }
  if (password.value !== re_password.value) {
    alert("비밀번호와 비밀번호 확인의 입력값이 다릅니다.");
    password.select();
    return false;
  }
  join_form.submit();
};

document.addEventListener("DOMContentLoaded", () => {
  const join_btn = document.querySelector("#join_btn");
  join_btn.addEventListener("click", join_click_event);
});

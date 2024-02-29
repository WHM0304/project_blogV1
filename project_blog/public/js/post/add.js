document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".add_form");

  form.addEventListener("click", (e) => {
    const target = e.target;
    if (target.value === "추가") {
      form.submit();
    } else if (target.value === "돌아가기") {
      const n_seq = target.dataset.n_seq;
      document.location.href = `/post/${n_seq}/list`;
    }
  });
});

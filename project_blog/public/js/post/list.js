document.addEventListener("DOMContentLoaded", () => {
  const add = document.querySelector("#add");
  add?.addEventListener("click", () => {
    const n_seq = add.dataset.n_seq;
    document.location.href = `/post/${n_seq}/add`;
  });
});

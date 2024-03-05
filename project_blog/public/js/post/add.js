const imagePreView = (event) => {
  const img_add = document.querySelector("img.img_add");
  const file = event.target.files[0];

  const fileReader = new FileReader();
  fileReader.onload = (e) => {
    const fileURL = e.target.result;
    img_add.src = fileURL;
  };
  fileReader.readAsDataURL(file);
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".add_form");
  const input_img = document.querySelector("#p_image");
  const img_add = document.querySelector("img.img_add");

  form?.addEventListener("click", (e) => {
    const target = e.target;
    if (target.value === "추가") {
      form.submit();
    } else if (target.value === "돌아가기") {
      const n_seq = target.dataset.n_seq;
      document.location.href = `/post/${n_seq}/list`;
    }
  });
  img_add?.addEventListener("click", () => {
    input_img.click();
  });
  input_img?.addEventListener("change", imagePreView);
});

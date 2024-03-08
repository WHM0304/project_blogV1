document.addEventListener("DOMContentLoaded", async () => {
  const date = document.querySelector("#date");
  const time = document.querySelector("#time");
  const date_fetch = await fetch("/date");
  const time_fetch = await fetch("/time");
  const date_json = await date_fetch.json();
  const time_json = await time_fetch.json();
  date?.value = date_json;
  time?.value = time_json;
});

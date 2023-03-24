const menu = document.getElementById("menu");
const nav_list = document.getElementById("nav_list");
menu.addEventListener("click", () => {
  console.log("hi");
  if (nav_list.classList.contains("hide")) {
    nav_list.classList.remove("hide");
    nav_list.classList.add("show");
  } else {
    nav_list.classList.add("hide");
    nav_list.classList.remove("show");
  }
});

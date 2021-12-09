const sidebar = document.querySelector(".sidebar");
const expandIcon = document.querySelector(".expand-icon");
let row = document.getElementById("row");
expandIcon.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

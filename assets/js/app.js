const sidebar = document.getElementById("sidebar");
const sideBarClose = document.getElementById("sideBarClose");
const sideBarOpen = document.getElementById("sideBarOpen");
const overlay = document.getElementById("overlay");


// OPEN
sideBarOpen.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

// CLOSE by X
sideBarClose.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// CLOSE by clicking overlay
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});
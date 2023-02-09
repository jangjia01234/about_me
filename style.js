const htmlElement = document.querySelector("html");
const bodyElement = document.querySelector("body");
const navBarElement = document.querySelector(".navBar");
const navBarLeftElement = document.querySelector(".navBar_left");
const logoElement = document.querySelector(".logo");
const navBarRightElement = document.querySelector(".navBar_right");

htmlElement.style.backgroundColor = "black";

bodyElement.style.margin = "0 auto";
bodyElement.style.height = "100vh";
bodyElement.style.fontFamily = "KIMM_Bold";

navBarElement.style.display = "flex";
navBarElement.style.justifyContent = "space-between";
navBarElement.style.alignItems = "center";
navBarElement.style.color = "rgba(106, 106, 106, 0.013)";
navBarElement.style.padding = "16px 24px";

navBarLeftElement.style.fontSize = "20px";
navBarLeftElement.style.fontWeight = "800";

logoElement.addEventListener("mouseover", function () {
  logoElement.style.cursor = "pointer";
});

navBarRightElement.style.display = "flex";
navBarRightElement.style.justifyContent = "flex-end";
navBarRightElement.style.gap = "40px";
navBarRightElement.style.fontSize = "14px";

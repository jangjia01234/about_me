const htmlElement = document.querySelector("html");
const bodyElement = document.querySelector("body");
const navBarElement = document.querySelector(".navBar");
// const aTagElement = document.getElementsByTagName("a");
const navBarLeftElement = document.querySelector(".navBar_left");
const logoElement = document.querySelector(".logo");
const navBarRightElement = document.querySelector(".navBar_right");
const profileElement = document.querySelector(".profile");
const profileTitleElement = document.querySelector(".profile-title");
const profileSubTitleElement = document.querySelector(".profile-subTitle");

htmlElement.style.backgroundColor = "black";

bodyElement.style.margin = "0 auto";
bodyElement.style.height = "100vh";
bodyElement.style.fontFamily = "KIMM_Bold";

navBarElement.style.display = "flex";
navBarElement.style.justifyContent = "space-between";
navBarElement.style.alignItems = "center";
navBarElement.style.color = "rgba(255, 255, 255, 0.701)";
navBarElement.style.padding = "16px 24px";

// aTagElement.style.textDecoration = "none";
// aTagElement.style.color = "rgba(255, 255, 255, 0.701)";
// aTagElement.style.fontWeight = "800";

// aTagElement.addEventListener("mouseover", function () {
//   aTagElement.style.color = "white";
//   aTagElement.style.fontWeight = "800";
// });

navBarLeftElement.style.fontSize = "20px";
navBarLeftElement.style.fontWeight = "800";

logoElement.style.color = "white";

navBarRightElement.style.display = "flex";
navBarRightElement.style.justifyContent = "flex-end";
navBarRightElement.style.gap = "40px";
navBarRightElement.style.fontSize = "14px";

profileElement.style.display = "flex";
profileElement.style.flexDirection = "column";
profileElement.style.alignItems = "center";
profileElement.style.fontStyle = "italic";

profileTitleElement.style.marginTop = "100px";
profileTitleElement.style.fontFamily = "KIMM_Bold";
profileTitleElement.style.fontWeight = "800";
profileTitleElement.style.fontSize = "50px";
profileTitleElement.style.color = "white";
profileTitleElement.style.letterSpacing = "1px";
profileTitleElement.style.fontFamily = "HBIOS-SYS";

profileSubTitleElement.style.fontSize = "12px";
profileSubTitleElement.style.color = "rgba(255, 255, 255, 0.864)";
profileSubTitleElement.style.margin = "10px 0 60px 0";
profileSubTitleElement.style.opacity = "50%";
profileSubTitleElement.style.textAlign = "center";
profileSubTitleElement.style.letterSpacing = "2px";
profileSubTitleElement.style.lineHeight = "16px";

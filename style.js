const htmlElement = document.querySelector("html");
const bodyElement = document.querySelector("body");

const navBarElement = document.querySelector("nav");
// const aTagElement = document.getElementsByTagName("a");
const navBarLeftElement = document.querySelector(".navBar_left");
const logoElement = document.querySelector(".logo");
const navBarRightElement = document.querySelector(".navBar_right");

const profileElement = document.querySelector(".profile");
const profileTitleElement = document.querySelector(".profile-title");
const profileSubTitleElement = document.querySelector(".profile-subTitle");

const meImgElement = document.querySelector(".meImg");
const meImgPhotoElement = document.querySelector(".meImg_img");

const contentElement = document.querySelector(".content");
const contentMainElement = document.querySelector(".content_main");

const addressBlogElement = document.querySelector(".address_blog");

const playlistNowElement = document.querySelector(".playlist_now");
const playlistElement = document.querySelector(".playlist");

const workElement = document.querySelector(".work");
const workTitleElement = document.querySelector(".work_title");

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

meImgElement.style.width = "250px";
meImgElement.style.height = "250px";
meImgElement.style.borderRadius = "30%";
meImgElement.style.overflow = "hidden";
meImgElement.style.border = "10px solid silver";

meImgPhotoElement.style.width = "100%";
meImgPhotoElement.style.height = "100%";
meImgPhotoElement.style.objectFit = "cover";

meImgElement.addEventListener("mouseover", function () {
  meImgElement.style.cursor = "pointer";
  meImgElement.style.transform = "scale(1.04)";
  meImgElement.style.transition = "all 200ms ease-in-out";
});

meImgElement.addEventListener("mouseout", function () {
  meImgElement.style.transform = "scale(1.0)";
});

// contentElement.style.height = "70vh";
// contentElement.style.display = "hidden";
// contentElement.style.flexDirection = "column";
// contentElement.style.justifyContent = "center";
// contentElement.style.alignItems = "center";
// contentElement.style.textAlign = "center";
// contentElement.style.gap = "40px";
// contentElement.style.fontFamily = "HBIOS-SYS";
// contentElement.style.fontSize = "30px";

// contentMainElement.style.color = "white";
// contentMainElement.style.padding = "40px";
// contentMainElement.style.width = "22ch";
// contentMainElement.style.animation =
//   "typing 2s steps(22), blink 0.5s step-end infinite alternate";
// contentMainElement.style.whiteSpace = "nowrap";
// contentMainElement.style.overflow = "hidden";
// contentMainElement.style.fontSize = "1.8em";

// addressBlogElement.style.margin = "10px";

// playlistElement.style.padding = "50px 80px";
// playlistElement.style.display = "flex";
// playlistElement.style.flexDirection = "column";
// playlistElement.style.justifyContent = "center";
// playlistElement.style.alignItems = "center";

// playlistNowElement.style.color = "white";
// playlistNowElement.style.fontSize = "30px";
// playlistNowElement.style.marginBottom = "20px";
// playlistNowElement.style.fontFamily = "HBIOS-SYS";

workTitleElement.style.margin = "100px 0 40px 0";

// workElement.style.color = "white";
// workElement.style.display = "none";
// workElement.style.flexDirection = "column";
// workElement.style.alignItems = "center";
// workElement.style.gap = "40px";
// workElement.style.fontSize = "40px";

const navOpen = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav__menu");
const navList = document.querySelector(".nav__list");

// Navber Açıp Kapama
navOpen.addEventListener("click", () => {
  const listHeight = navList.getBoundingClientRect().height;
  const containerHeight = navContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    navContainer.style.height = `${listHeight}px`;
  } else {
    navContainer.style.height = "0px";
  }
});





function gizleGoster(devam) {
    var secilenID = document.getElementById(devam);
    if (secilenID.style.display == "none") {
      secilenID.style.display = "";
    } else {
      secilenID.style.display = "none";
    }
  }

navOpen.addEventListener("click", () => {
  const listHeight = navList.getBoundingClientRect().height;
  const containerHeight = navContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    navContainer.style.height = `${listHeight}px`;
  } else {
    navContainer.style.height = "0px";
  }
});


const navBar = document.querySelector(".navigation");
const topLink = document.querySelector(".goto-top");
window.addEventListener("scroll", () => {
  const navHeight = navBar.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix__nav");
  } else {
    navBar.classList.remove("fix__nav");
  }

  if (scrollHeight > 500) {
    topLink.classList.add("show");
  } else {
    topLink.classList.remove("show");
  }
});

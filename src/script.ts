const mobileBtn = document.querySelector(".mobile-btn");
const navMenu = document.querySelector(".menu-list");
const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");

if (mobileBtn && navMenu && iconHamburger && iconClose) {
  mobileBtn.setAttribute("aria-expanded", "false");

  mobileBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");

    mobileBtn.setAttribute("aria-expanded", String(isOpen));
    iconHamburger.classList.toggle("hidden", isOpen);
    iconClose.classList.toggle("hidden", !isOpen);
  });
}
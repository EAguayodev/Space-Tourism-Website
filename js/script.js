// mobile menu
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

// Get crew info and image of crew members pulled from json file
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const crewData = data.crew;

    let crewIndex = 0;
    let crewButtons = document.querySelectorAll(".crew-btn");
    let crewMemberImage = document.querySelector(".crew-image");
    let crewMemberName = document.querySelector(".crew-member");
    let crewMemberRole = document.querySelector(".crew-title");
    let crewMemberBio = document.querySelector(".crew-description");

    crewButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        crewIndex = index;
        if (crewMemberImage) {
          crewMemberImage.src = crewData[crewIndex].images.webp;
        }
        if (crewMemberName) {
          crewMemberName.textContent = crewData[crewIndex].name;
        }
        if (crewMemberRole) {
          crewMemberRole.textContent = crewData[crewIndex].role;
        }
        if (crewMemberBio) {
          crewMemberBio.textContent = crewData[crewIndex].bio;
        }
        button.classList.add("bg-white");
      });
    });
  });

// Get Technology info pulled from json file
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const technologyData = data.technology;
    let technologyIndex = 0;
    let technologyButtons = document.querySelectorAll(".button-technology");
    let technologyImage = document.querySelector(".technology-img");
    let technologyName = document.querySelector(".technology-name");
    let technologyDescription = document.querySelector(
      ".technology-description",
    );

    technologyButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        technologyIndex = index;
        if (technologyImage) {
          // FIXME: Portrait image is not showing on desktop, but landscape image is showing on tablet/mobile. Need to fix this.
          // NOTE: innerWidth is used to check the width of the viewport and change the image source accordingly. This maybe a workaround for the issue with the portrait image not showing on desktop.
          technologyImage.src = technologyData[technologyIndex].images.portrait;
          // technologyImage.src = innerWidth >= 1224 ? technologyData[technologyIndex].images.portrait : technologyData[technologyIndex].images.landscape;
        }
        if (technologyName) {
          technologyName.textContent = technologyData[technologyIndex].name;
        }
        if (technologyDescription) {
          technologyDescription.textContent = technologyData[technologyIndex].description;
        }
        technologyButtons.forEach((btn) => btn.classList.remove("bg-white"));
        button.classList.add("bg-white");
        button.style.color = "hsl(230, 35%, 7%)";
      });
    });
  });

// planet info pulled from json file
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const destinationData = data.destinations;
    let destinationIndex = 0;
    let destinationButtons = document.querySelectorAll(".btn-destinations");
    let destinationImage = document.querySelector(".destination-img");
    let destinationName = document.querySelector(".destination-name");
    let destinationDescription = document.querySelector(
      ".destination-description",
    );
    let destinationDistance = document.querySelector(".distance-text");
    let destinationTravelTime = document.querySelector(".travel-text");
    destinationButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        destinationIndex = index;
        if (destinationImage) {
          destinationImage.src = destinationData[destinationIndex].images.webp;
        }
        if (destinationName) {
          destinationName.textContent = destinationData[destinationIndex].name;
        }
        if (destinationDescription) {
          destinationDescription.textContent =
            destinationData[destinationIndex].description;
        }
        if (destinationDistance) {
          destinationDistance.textContent =
            destinationData[destinationIndex].distance;
        }
        if (destinationTravelTime) {
          destinationTravelTime.textContent =
            destinationData[destinationIndex].travel;
        }
        
        button.classList.add("active:border-gray-300");
      });
    });
  });
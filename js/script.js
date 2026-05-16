const mobileBtn = document.querySelector(".mobile-btn");
const navMenu = document.querySelector(".menu-list");
const iconHamburger = document.querySelector(".icon-hamburger");
const iconClose = document.querySelector(".icon-close");

if (mobileBtn && navMenu && iconHamburger && iconClose) {
  mobileBtn.setAttribute("aria-expanded", "false");

  mobileBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("active");
    document.addEventListener('mousedown', (event) => {
      if (isOpen && !navMenu.contains(event.target) && !mobileBtn.contains(event.target)) {
        navMenu.classList.remove("active");
      }
    });

    mobileBtn.setAttribute("aria-expanded", String(isOpen));
    iconHamburger.classList.toggle("hidden", isOpen);
    iconClose.classList.toggle("hidden", !isOpen);
  });
}


function animateTransition(elements, updateFn, duration = 380) {
  const els = Array.isArray(elements) ? elements : [elements];
  els.forEach((el) => el && el.classList.add('content-exiting'));
  setTimeout(() => {
    updateFn();
    els.forEach((el) => el && el.classList.remove('content-exiting'));
  }, duration);
}


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
        const contentEls = [crewMemberImage, crewMemberName, crewMemberRole, crewMemberBio];
        animateTransition(contentEls, () => {
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
        });
        button.classList.add("bg-white");
      });
    });
  });


fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const technologyData = data.technology;
    let technologyButtons = document.querySelectorAll(".button-technology");
    let technologyPictures = document.querySelectorAll("picture[data-tech-index]");
    let technologyName = document.querySelector(".technology-name");
    let technologyDescription = document.querySelector(
      ".technology-description",
    );

    technologyButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        const techPicturesWrapper = document.getElementById('tech-pictures');
        const contentEls = [techPicturesWrapper, technologyName, technologyDescription];
        animateTransition(contentEls, () => {
     
          technologyPictures.forEach((pic) => {
            const isActive = Number(pic.dataset.techIndex) === index;
            pic.classList.toggle("hidden", !isActive);
          });
          if (technologyName) {
            technologyName.textContent = technologyData[index].name;
          }
          if (technologyDescription) {
            technologyDescription.textContent = technologyData[index].description;
          }
        });
        technologyButtons.forEach((btn) => btn.classList.remove("bg-white"));
        technologyButtons.forEach((btn) => btn.classList.add("text-white"));
        button.classList.add("bg-white");
        button.classList.remove("text-white");
      });
    });
  });


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
        const contentEls = [destinationImage, destinationName, destinationDescription, destinationDistance, destinationTravelTime];
        animateTransition(contentEls, () => {
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
        });
        destinationButtons.forEach((btn) => {
          btn.classList.remove("tab-active");
          btn.setAttribute("aria-selected", "false");
        });
        button.classList.add("tab-active");
        button.setAttribute("aria-selected", "true");
      });
    });
  });
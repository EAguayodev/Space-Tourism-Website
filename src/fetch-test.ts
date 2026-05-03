fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
   
    const crewData = data.crew;
    
    // let destinationIndex = 0;
    // let technologyIndex = 0;
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
        crewButtons.forEach((btn) => btn.classList.remove("bg-white"));
        button.classList.add("bg-white");
      });
    });
  });

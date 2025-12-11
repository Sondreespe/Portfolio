const sections = document.querySelectorAll(".section");
const controls = document.querySelectorAll(".control"); // hver knapp
const allSections = document.querySelector(".main-content");

function pageTransition() {
  // Klikk på knappene i menyen (ikonene)
  controls.forEach((btn) => {
    btn.addEventListener("click", function () {
      // flytt active-btn til riktig knapp
      const currentBtn = document.querySelector(".active-btn");
      if (currentBtn) currentBtn.classList.remove("active-btn");
      this.classList.add("active-btn");

      // bytt seksjon
      const id = this.dataset.id; // data-id på knappen
      if (!id) return;

      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      if (element) element.classList.add("active");
    });
  });

  // toggle theme button
  const themeBtn = document.querySelector(".theme-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  }
}

pageTransition();

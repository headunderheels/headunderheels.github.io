const progressBarContainer = document.getElementById("progress-bar-container");
const pageHeading = document.getElementById("title");
const sectionHeadings = document.querySelectorAll("h2");

const updateProgressBar = () => {
  const scrollPosition = window.scrollY;

  sectionHeadings.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const circle = progressBarContainer.children[index+2];

    // Calculate the distance between the top of the page and the section
    const distance = Math.abs(sectionTop - scrollPosition);
    const windowHeight = window.innerHeight;

    // Normalize the distance value to a range between 0 and 1
    const normalizedDistance = 1 - Math.min(distance / windowHeight, 1);

    // Calculate the scale value based on the normalized distance
    const scaleValue = 1 - normalizedDistance * 0.5;

    // Calculate the background color intensity based on the normalized distance
    const colorIntensity = 170 - Math.floor(normalizedDistance * 85);

    circle.style.transform = `scale(${scaleValue})`;
    circle.style.backgroundColor = `rgb(${colorIntensity}, ${colorIntensity}, ${colorIntensity})`;

    // Add click event listener to the circle
    circle.addEventListener("click", () => {
      window.scrollTo({
        top: sectionTop - 40,
        behavior: "smooth"
      });
    });
  });
};

// function scrollToTop() {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   });
// }

window.addEventListener("scroll", updateProgressBar);
document.addEventListener("DOMContentLoaded", () => {
  sectionHeadings.forEach(() => {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    progressBarContainer.appendChild(circle);
  });
  updateProgressBar();
});


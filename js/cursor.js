// from https://dev.to/israelmitolu/using-custom-cursors-with-javascript-for-a-better-user-experience-1n0b
// HEAVILY customized

let cursorBall = document.querySelector(".cursor-ball");
let cursorOutline = document.querySelector(".cursor-outline");

document.addEventListener("mousemove", (e) => {
    cursorBall.style.top = e.pageY + "px";
    cursorBall.style.left = e.pageX + "px";
  
    cursorOutline.style.top = e.pageY + "px";
    cursorOutline.style.left = e.pageX + "px";
  });
  
document.addEventListener("mousedown", (e) => {
  if (e.button === 0) {
    cursorOutline.classList.add("cursor-outline-mousedown");
    cursorBall.classList.add("cursor-ball-mousedown");
  }
});
document.addEventListener("mouseup", () => {
  cursorOutline.classList.remove("cursor-outline-mousedown");
  cursorBall.classList.remove("cursor-ball-mousedown");
});  
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("button") && !cursorBall.classList.contains("cursor-ball-spatial-audio")) {
    cursorBall.classList.add("cursor-ball-spatial-audio");
    cursorOutline.classList.add("cursor-outline-spatial-audio");
    e.target.classList.add("button-active");
  }
  else if (e.target.classList.contains("button") && cursorBall.classList.contains("cursor-ball-spatial-audio")) {
    cursorBall.classList.remove("cursor-ball-spatial-audio");
    cursorOutline.classList.remove("cursor-outline-spatial-audio");
    e.target.classList.remove("button-active");
  }
});

document.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("circle") || e.target.classList.contains("button") ||
    e.target.classList.contains("link")) {
    cursorOutline.classList.add("cursor-outline-hover");
    cursorBall.classList.add("cursor-ball-hover");
  }
});  
document.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("circle") || e.target.classList.contains("button") || e.target.classList.contains("link")) {
    cursorOutline.classList.remove("cursor-outline-hover");
    cursorBall.classList.remove("cursor-ball-hover");
  }
});

document.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("underline")) {
    cursorBall.classList.add("cursor-ball-hover-underline");
    cursorOutline.classList.add("cursor-outline-hover-underline");
  }
});  
document.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("underline")) {
    cursorBall.classList.remove("cursor-ball-hover-underline");
    cursorOutline.classList.remove("cursor-outline-hover-underline");
  }
});
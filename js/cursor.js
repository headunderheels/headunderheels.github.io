// from https://dev.to/israelmitolu/using-custom-cursors-with-javascript-for-a-better-user-experience-1n0b
// HEAVILY customized

let cursorBall = document.querySelector(".cursor-ball");
let cursorOutline = document.querySelector(".cursor-outline");

// Fallback if cursor elements don't exist
if (!cursorBall || !cursorOutline) {
  document.documentElement.style.cursor = 'auto';
} else {
  document.addEventListener("mousemove", (e) => {
      // Combine the mouse position with the -50% centering offset from CSS
      cursorBall.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
    
      cursorOutline.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
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
}
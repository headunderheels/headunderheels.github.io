const underlineElements = document.querySelectorAll('.underline');
const popupElements = document.querySelectorAll('.popup');
const containerElement = document.querySelector('.container');

for (let i = 0; i < underlineElements.length; i++) {
  const underlineElement = underlineElements[i];
  const popupElement = popupElements[i];

  underlineElement.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const popupWidth = popupElement.offsetWidth;
    const popupHeight = popupElement.offsetHeight;
    const windowHeight = window.innerHeight;
    const containerRect = containerElement.getBoundingClientRect();
    const containerLeft = containerRect.left;
    const containerRight = containerRect.right;
    
    // Calculate the position of the popup element
    let popupX = x + 20;
    let popupY = y + 20;
    
    // Check if the popup is going off the edge of the screen
    const margin = 10;
    if (popupX + popupWidth + margin > containerRight) {
      popupX -= (popupX + popupWidth + margin) - containerRight;
    }
    if (popupX < containerLeft + margin) {
      popupX = containerLeft + margin;
    }
    if (popupY + popupHeight + margin > windowHeight) {
      popupY -= (popupY + popupHeight + margin) - windowHeight;
    }
    if (popupY < margin) {
      popupY = margin;
    }

    popupElements[i].style.left = popupX + 'px';
    popupElements[i].style.top = popupY + 'px';
    popupElements[i].style.display = 'block';
  });

  underlineElements[i].addEventListener('mouseleave', () => {
    popupElements[i].style.display = 'none';
  });
}
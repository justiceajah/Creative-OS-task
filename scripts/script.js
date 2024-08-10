function changeImageSrc(newSrc) {
  // Change the image source
  document.querySelector(".content-img").src = newSrc;

  // Get all span elements in the carousel-indicator
  const indicators = document.querySelectorAll(".carousel-indicator .dot");

  let elementWithClassPos = 0;
  // Remove the active class from the currently active span
  indicators.forEach((indicator, key) => {
    if (indicator.classList.contains("active")) {
      elementWithClassPos = key;
      indicator.classList.remove("active");
    }
  });
  if (elementWithClassPos === 0) {
    // Add the active class to the next
    indicators[1].classList.add("active");
  } else {
    indicators[0].classList.add("active");
  }
}

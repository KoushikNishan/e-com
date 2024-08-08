let slideIndex = 0;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slide");
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Increment index and reset if out of range
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }
  
  // Display the current slide
  slides[slideIndex].style.display = "block";

  // Move to the next slide after 2 seconds
  slideIndex++;
  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

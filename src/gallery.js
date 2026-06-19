// gallery.js
export function initGallery() {
  // Find all gallery sections on the page
  const wrappers = document.querySelectorAll(".project-gallery-wrapper");

  wrappers.forEach((wrapper) => {
    const modal = wrapper.querySelector(".lightbox-modal");
    const openBtn = wrapper.querySelector(".open-gallery-btn");
    const closeBtn = wrapper.querySelector(".close-lightbox");
    const prevBtn = wrapper.querySelector(".lightbox-prev");
    const nextBtn = wrapper.querySelector(".lightbox-next");
    const slides = wrapper.getElementsByClassName("lightbox-slide");
    const thumbs = wrapper.getElementsByClassName("demo-thumb");

    if (!modal || !openBtn) return; // Guard clause for incomplete rows

    let slideIndex = 1;

    function showSlides(n) {
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }

      // Hide all main view slides in this project gallery
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      // Deactivate all thumbnails in this project gallery
      for (let i = 0; i < thumbs.length; i++) {
        thumbs[i].classList.remove("active-thumb");
      }

      // Show active items safely
      if (slides[slideIndex - 1]) slides[slideIndex - 1].style.display = "block";
      if (thumbs[slideIndex - 1]) thumbs[slideIndex - 1].classList.add("active-thumb");
    }

    // Open & Close Events
    openBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
      showSlides(slideIndex);
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", () => modal.style.display = "none");
    }
    
    // Close if user clicks background overlay outside the image content
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });

    // Next/Prev Bindings
    if (prevBtn) prevBtn.addEventListener("click", () => showSlides(slideIndex -= 1));
    if (nextBtn) nextBtn.addEventListener("click", () => showSlides(slideIndex += 1));

    // Thumbnail Index Pickers
    Array.from(thumbs).forEach(thumb => {
      thumb.addEventListener("click", (e) => {
        const targetIndex = parseInt(e.target.getAttribute("data-thumb-index"), 10);
        showSlides(slideIndex = targetIndex);
      });
    });
  });
}
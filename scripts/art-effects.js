document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".art-piece").forEach((el, i) => {
    const angle = (Math.random() * 6 - 3).toFixed(2);
    el.style.setProperty("--r", angle);
    el.style.setProperty("--index", i);

    const tack = document.createElement("div");
    tack.classList.add("tack");
    const corners = ["tl", "tr", "bl", "br"];
    tack.classList.add(corners[Math.floor(Math.random() * corners.length)]);
    el.appendChild(tack);
  

// Lightbox logic
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  document.querySelectorAll(".art-piece img").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  });

});


// Lightbox logic
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  document.querySelectorAll(".art-piece img").forEach(img => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.style.display = "flex";
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  });

});
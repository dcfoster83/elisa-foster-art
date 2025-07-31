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
  });
});
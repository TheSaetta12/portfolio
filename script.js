document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const footer = document.querySelector(".site-footer");
  if (footer) {
    footer.insertAdjacentHTML(
      "beforeend",
      `<div class="container" style="margin-top:10px; text-align:center; opacity:0.9;">© ${year} Pietro Gancitano</div>`
    );
  }
});
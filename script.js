document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = year;
  }
});
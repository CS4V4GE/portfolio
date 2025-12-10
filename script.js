const yearSpan = document.getElementById("year");
if (yearSpan) {
  const now = new Date();
  yearSpan.textContent = now.getFullYear();
}

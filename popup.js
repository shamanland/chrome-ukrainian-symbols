document.addEventListener("DOMContentLoaded", function() {
  var cells = document.querySelectorAll("td");
  for (var i = 0, n = cells.length; i < n; ++i) {
    cells[i].addEventListener("click", function() {
      window.prompt("Press Ctrl+C to copy", this.innerText || this.textContent);
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var cells = document.querySelectorAll("td");
  for (var i = 0, n = cells.length; i < n; ++i) {
    cells[i].addEventListener("click", function() {
      var input = document.querySelector("input");
      input.value = this.textContent;
      input.select();
    });
  }
});

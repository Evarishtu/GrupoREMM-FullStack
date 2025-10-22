function addMenu() {
  fetch('menu.html')
    .then(response => response.text())
    .then(data => document.getElementById('menu').outerHTML = data);
}  
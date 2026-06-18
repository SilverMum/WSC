fetch("components/nav.html")
  .then(response => response.text())
  .then(html => {
      document.getElementById("nav-placeholder").innerHTML = html;
  })
  .catch(err => {
      console.error("Navigation failed to load:", err);
  });

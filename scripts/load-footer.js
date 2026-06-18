fetch("components/footer.html")
  .then(response => response.text())
  .then(html => {
      document.getElementById("footer-placeholder").innerHTML = html;
  })
  .catch(err => {
      console.error("Footer failed to load:", err);
  });

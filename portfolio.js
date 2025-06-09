
  // Load saved theme on page load
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }

  document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    // Save the preference
    const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });


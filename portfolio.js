
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

  // Pie Chart - Skill Proficiency Overview
  const pieCtx = document.getElementById('dashboardSkillPie').getContext('2d');
  new Chart(pieCtx, {
    type: 'pie',
    data: {
      labels: ['Python', 'Flask', 'JavaScript', 'Wireshark', 'HTML/CSS'],
      datasets: [{
        label: 'Proficiency',
        data: [25, 20, 20, 15, 20],
        backgroundColor: [
          '#ec4899', // pink
          '#8b5cf6', // purple
          '#00ffae', // green
          '#f59e0b', // amber
          '#38bdf8'  // sky blue
        ],
        borderColor: '#1f2937',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: '#d1d5db' // light gray text
          }
        }
      }
    }
  });
document.querySelectorAll('.tab-links a').forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();

    // Remove active from all tabs
    document.querySelectorAll('.tab-links a').forEach(t => t.classList.remove('active'));

    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');

    // Add active to clicked tab
    tab.classList.add('active');

    // Show the linked content
    const targetId = tab.getAttribute('href').substring(1); // remove '#'
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.style.display = 'block';
    }
  });
});
targetContent.scrollIntoView({ behavior: 'smooth' });



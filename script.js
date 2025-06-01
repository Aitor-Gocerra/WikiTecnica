// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Load Linux commands from JSON
    fetch('datos.json')
        .then(response => response.json())
        .then(data => {
            const comandosLinuxContainer = document.getElementById('comandos-linux-container');
            if (comandosLinuxContainer) {
                const ul = document.createElement('ul');
                data.comandosLinux.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = `<strong>${item.comando}:</strong> ${item.descripcion}`;
                    ul.appendChild(li);
                });
                comandosLinuxContainer.appendChild(ul);
            }
        })
        .catch(error => console.error('Error al cargar los comandos de Linux:', error));

    // Theme toggle functionality [cite: 13]
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            // Optionally, save the user's preference in localStorage
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });

        // Check for saved theme preference on page load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }

    // Search functionality [cite: 13]
    const searchInput = document.getElementById('wiki-search');
    const wikiContent = document.getElementById('wiki-content'); // Main container for all sections
    const sections = wikiContent.querySelectorAll('section'); // Get all content sections

    if (searchInput && wikiContent) {
        searchInput.addEventListener('keyup', (event) => {
            const searchTerm = event.target.value.toLowerCase().trim();

            sections.forEach(section => {
                const sectionText = section.textContent.toLowerCase();
                if (sectionText.includes(searchTerm)) {
                    section.style.display = ''; // Show the section
                } else {
                    section.style.display = 'none'; // Hide the section
                }
            });
        });
    }
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
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
});
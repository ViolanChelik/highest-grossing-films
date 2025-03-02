document.addEventListener("DOMContentLoaded", () => {
    fetch("films.json")
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector("#films-table tbody");
            data.forEach(film => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${film.title}</td>
                    <td>${film.release_year || 'N/A'}</td>
                    <td>${film.director}</td>
                    <td>${film.box_office}</td>
                    <td>${film.country}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error("Error loading films data:", error));
});

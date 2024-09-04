/* document.addEventListener('DOMContentLoaded', function() {
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
                        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

    let date = new Date();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();

    const calendarDiv = document.getElementById('calendar');
    const monthYearDiv = document.getElementById('month-year');

    function renderCalendar(month, year) {
        calendarDiv.innerHTML = '';
        monthYearDiv.textContent = `${monthNames[month]} ${year}`;

        const daysDiv = document.createElement('div');
        daysDiv.className = 'days';

        dayNames.forEach(day => {
            const dayNameDiv = document.createElement('div');
            dayNameDiv.className = 'day-name';
            dayNameDiv.textContent = day;
            daysDiv.appendChild(dayNameDiv);
        });

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 1; i < firstDay; i++) {
            const emptyDiv = document.createElement('div');
            daysDiv.appendChild(emptyDiv);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayNumberDiv = document.createElement('div');
            dayNumberDiv.className = 'day-number';
            dayNumberDiv.textContent = day;
            daysDiv.appendChild(dayNumberDiv);
        }

        calendarDiv.appendChild(daysDiv);
    }

    document.getElementById('prev-month').addEventListener('click', function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    document.getElementById('next-month').addEventListener('click', function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
*/

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const citySelect = document.getElementById('city');
    const typeSelect = document.getElementById('type');
    const resultsDiv = document.getElementById('results');

    function filterResults() {
        const city = citySelect.value;
        const type = typeSelect.value;

        // Exemple de filtrage, vous devrez remplacer cela par une logique réelle
        resultsDiv.innerHTML = `<p>Filtrage en cours : Ville - ${city || 'Aucune'}, Type - ${type || 'Aucun'}</p>`;
        
        // Vous pouvez ajouter ici une logique pour afficher les résultats en fonction des filtres
    }

    citySelect.addEventListener('change', filterResults);
    typeSelect.addEventListener('change', filterResults);
});

    });

    renderCalendar(currentMonth, currentYear);
});

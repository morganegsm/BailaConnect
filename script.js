document.addEventListener('DOMContentLoaded', function() {
    const calendarDiv = document.getElementById('calendar');
    const date = new Date();
    const year = date.getFullYear();

    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
                        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    const dayNames = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

    for (let month = 0; month < 12; month++) {
        const monthDiv = document.createElement('div');
        monthDiv.className = 'month';
        monthDiv.innerHTML = `<div class="month-name">${monthNames[month]} ${year}</div>`;
        
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

        monthDiv.appendChild(daysDiv);
        calendarDiv.appendChild(monthDiv);
    }
});

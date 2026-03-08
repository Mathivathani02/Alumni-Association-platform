// Mock database of alumni
const alumniData = [
    { name: "Jessica Miller", year: "2021", role: "Software Engineer", company: "Microsoft", location: "Seattle" },
    { name: "Ryan Gupta", year: "2018", role: "Data Scientist", company: "Tesla", location: "Austin" },
    { name: "Amara Okafor", year: "2023", role: "Product Designer", company: "Airbnb", location: "Remote" },
    { name: "David Smith", year: "2015", role: "Marketing Director", company: "Nike", location: "Oregon" }
];

const grid = document.getElementById('alumniGrid');
const searchInput = document.getElementById('searchInput');

// Function to display alumni
function displayAlumni(data) {
    grid.innerHTML = ""; // Clear existing cards
    
    data.forEach(alumnus => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <span class="badge">Class of ${alumnus.year}</span>
            <h3>${alumnus.name}</h3>
            <p><strong>${alumnus.role}</strong></p>
            <p>${alumnus.company}</p>
            <p>📍 ${alumnus.location}</p>
        `;
        grid.appendChild(card);
    });
}

// Initial display
displayAlumni(alumniData);

// Search Logic
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = alumniData.filter(person => 
        person.name.toLowerCase().includes(term) || 
        person.company.toLowerCase().includes(term)
    );
    displayAlumni(filtered);
});
// Simulated student database
const students = [
    { id: '12345', password: 'password123' },
    { id: '67890', password: 'password456' }
];

// Simulated candidates
const candidates = [
    'helena ofusu',
    'joseph kofi',
    'philip'
];

// Simulated voting results
let votingResults = {
    'helena ofusu': 0,
    'joseph kofi': 0,
    'philip': 0
};

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const votingForm = document.getElementById('voting-form');
    const loginSection = document.getElementById('login-section');
    const votingSection = document.getElementById('voting-section');
    const resultsSection = document.getElementById('results-section');
    const candidatesContainer = document.getElementById('candidates');
    const resultsContainer = document.getElementById('results');

    // Populate candidates
    candidates.forEach(candidate => {
        const div = document.createElement('div');
        div.className = 'candidate';
        div.innerHTML = `
            <input type="radio" name="candidate" value="${candidate}" id="${candidate}">
            <label for="${candidate}">${candidate}</label>
        `;
        candidatesContainer.appendChild(div);
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const studentId = document.getElementById('student-id').value;
        const password = document.getElementById('password').value;

        const student = students.find(s => s.id === studentId && s.password === password);

        if (student) {
            loginSection.style.display = 'none';
            votingSection.style.display = 'block';
        } else {
            alert('Invalid student ID or password');
        }
    });

    votingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedCandidate = document.querySelector('input[name="candidate"]:checked');

        if (selectedCandidate) {
            votingResults[selectedCandidate.value]++;
            votingSection.style.display = 'none';
            resultsSection.style.display = 'block';
            displayResults();
        } else {
            alert('Please select a candidate');
        }
    });

    function displayResults() {
        resultsContainer.innerHTML = '';
        for (const [candidate, votes] of Object.entries(votingResults)) {
            const div = document.createElement('div');
            div.textContent = `${candidate}: ${votes} vote(s)`;
            resultsContainer.appendChild(div);
        }
    }
});

function performSearch() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    const pages = [
        { name: "Home", url: "home.html" },
        { name: "About Us", url: "about.html" },
        { name: "Academics", url: "academics.html" },
        { name: "Admissions", url: "admissions.html" },
        { name: "Extracurricular", url: "extracurricular.html" },
        { name: "Faculty", url: "faculty.html" },
        { name: "Alumni", url: "alumni.html" },
        { name: "School Management", url: "management.html" },
        { name: "Contact Us", url: "contact.html" }
    ];

    // Normalize search term for error tolerance
    const normalizedInput = normalizeInput(input);

    // Attempt to find a match with minor error tolerance
    const matchedPage = pages.find(page => 
        normalizeInput(page.name.toLowerCase()).includes(normalizedInput)
    );

    if (matchedPage) {
        window.location.href = matchedPage.url; // Redirect to the corresponding page
    } else {
        alert("No matching page found!"); // Alert if the page does not exist
    }
}

// Normalize the input to help with minor errors
function normalizeInput(input) {
    // Replace common typos and remove spaces
    const typoCorrections = {
        'contct': 'contact',
        'admisions': 'admissions',
        'admssions': 'admissions',
        'admision': 'admissions',
        'admisson': 'admissions',
        'admissons': 'admissions',
        'mision': 'mission',
        'misson': 'mission',
        'misions': 'missions',
        'mssion': 'mission',
        // Add more corrections for one, two, and three-letter combinations
        'ad': 'admissions',
        'admi': 'admissions',
        'adm': 'admissions',
        'con': 'contact',
        'cont': 'contact',
        'conct': 'contact',
        'mis': 'mission',
        'mss': 'mission',
        'mi': 'mission',
        'msn': 'mission',
        'ms': 'mission'
    };

    // Replace the input with corrections
    for (const [wrong, correct] of Object.entries(typoCorrections)) {
        input = input.replace(new RegExp(wrong, 'g'), correct);
    }

    // Remove spaces and return the normalized input
    return input.replace(/\s+/g, '');
}

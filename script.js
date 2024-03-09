// JavaScript for handling search functionality
function searchCourses() {
    var searchInput = document.getElementById('searchInput').value;
    // Perform search functionality here, e.g., fetching results from a database
    console.log('Searching for: ' + searchInput);
}

// JavaScript for handling form submission (optional)
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting
    searchCourses();
}

// JavaScript for handling any other dynamic functionality
// This can include AJAX requests, DOM manipulation, etc.

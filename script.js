// Get all toggle buttons
var toggleButtons = document.querySelectorAll('.toggle-btn');

// Loop through each toggle button
toggleButtons.forEach(function(button) {
    // Add click event listener to each button
    button.addEventListener('click', function() {
        // Get the next sibling element (answer)
        var answer = this.parentNode.nextElementSibling;
        // Toggle the 'show' class on the answer element
        answer.classList.toggle('show');
    });
});

ddocument.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    function checkVisibility() {
        elements.forEach(function (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight * 0.75) {
                element.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on page load
});
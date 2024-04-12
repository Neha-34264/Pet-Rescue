
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('form');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const breedInput = document.getElementById('breed');
            const emailInput = document.getElementById('email');
            const passwordInput = document.getElementById('password');

            if (!nameInput.value) {
                alert('Please add your name.');
            } else if (!breedInput.value) {
                alert('Please add the breed name.');
            } else if (!emailInput.value || !isValidEmail(emailInput.value)) {
                alert('Please enter a valid email address.');
            } else if (passwordInput.value.length < 8) {
                alert('Password must be at least 8 characters long.');
            } else {
                form.submit();
            }
        });

        function isValidEmail(email) {
            // Regular expression for basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    });

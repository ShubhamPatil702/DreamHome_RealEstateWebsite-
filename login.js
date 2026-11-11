document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        
        let email = emailInput.value.trim();
        let password = passwordInput.value.trim();
        
        if (email === "" || password === "") {
            alert("Please fill in both email and password.");
            return;
        }
        
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        
        // If everything is valid, simulate successful login
        alert("Login successful!");
        form.submit();
    });

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
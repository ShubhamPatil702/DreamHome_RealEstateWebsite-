document.addEventListener("DOMContentLoaded", function() {
    gsap.to(".contact-container", { opacity: 1, duration: 1, y: -20 });
    gsap.to(".contact-form", { opacity: 1, duration: 1.5, delay: 0.5, y: -20 });
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let name = this.querySelector('input[placeholder="Your Name"]').value;
        let email = this.querySelector('input[placeholder="Your Email"]').value;
        let subject = this.querySelector('input[placeholder="Subject"]').value;
        let message = this.querySelector('textarea').value;
        
        if (name && email && subject && message) {
            alert('Your message has been sent successfully!');
            this.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});

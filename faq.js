document.addEventListener("DOMContentLoaded", function() {
    gsap.to(".faq-container", { opacity: 1, duration: 1, y: -20 });

    let faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        item.addEventListener("click", function() {
            this.classList.toggle("active");
            let answer = this.querySelector(".faq-answer");
            gsap.to(answer, { height: "toggle", opacity: "toggle", duration: 0.3 });
        });
    });
});
